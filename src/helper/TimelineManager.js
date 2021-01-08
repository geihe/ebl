export class TimelineManager {
  constructor(timelineRec) {
    this.timelineRec = [];
    if (timelineRec) {
      this.add(timelineRec);
    }
  }

  add(timelineRec) {
    this.timelineRec = this.timelineRec.concat(timelineRec);
    return this;
  }

  getFlatTimeline() {
    const tl = TimelineElement.convert(this.timelineRec);
    tl.setCumEffort(0);
    tl.normCumEffort(tl.effort);

    return tl.flat().map((el, i) => {
      return {...el, key: i}
    });
  }
}

class TimelineElement {
  constructor(el) {
    this.id = el.id;
  }

  static convert(el) {
    if (Array.isArray(el)) {
      return new TLarray(el);
    }
    if (Object.prototype.toString.call(el) === '[object Object]') {
      if (el.hasOwnProperty('if')) {
        return new TLif(el);
      }
      if (el.hasOwnProperty('while')) {
        return new TLwhile(el);
      }
      if (el.hasOwnProperty('repeat')) {
        return new TLrepeat(el);
      }
      if (el.hasOwnProperty('milestone')) {
        return new TLMilestone(el);
      }
      if (el.hasOwnProperty('nextSession')) {
        return new TLNextSession(el);
      }

      return new TLFrame(el);
    } else {
      return {type: 'unknown'};
    }
  }

  static negate(predicateFunc) {
    return function () {
      return !predicateFunc.apply(this, arguments);
    };
  }

  static mergeArrays(arrays) {
    return [].concat.apply([], arrays);
  }
}

class TLFrame extends TimelineElement {
  constructor(frameSource) {
    super(frameSource);
    this.type = 'frame';
    if (frameSource.hasOwnProperty('frame')) {
      this.frame = frameSource.frame;
      this.effort = frameSource.effort || 1;
      this.noProgress = frameSource.noProgress;
      this.id = frameSource.id;
      this.noLog = frameSource.nolog;
    } else {
      this.effort = 1;
      this.frame = frameSource;
    }
  }

  flat() {
    return this;
  }

  setCumEffort(start) {
    this.cumEffort = start + this.effort;
  }

  normCumEffort(total) {
    this.cumEffort = this.cumEffort * 100 / total;
  }
}

class TLarray extends TimelineElement {
  constructor(arraySource) {
    super(arraySource);
    this.type = 'array';
    this.array = arraySource.map(TimelineElement.convert);
    this.effort = this.array.reduce((a, c) => a + c.effort, 0);
  }

  flat() {
    const nested = this.array.map(el => el.flat());
    return TimelineElement.mergeArrays(nested);
  }

  setCumEffort(start, factor = 1) {
    this.array.reduce((a, c) => {
      c.setCumEffort(a);
      return a + factor * c.effort;
    }, start)
  }

  normCumEffort(total) {
    this.array.forEach(el => el.normCumEffort(total));
  }
}

class TLif extends TimelineElement {
  constructor(ifSource) {
    super(ifSource);
    this.type = 'if';
    this.if = ifSource.if;
    this.then = TimelineElement.convert(ifSource.then || []);
    this.else = TimelineElement.convert(ifSource.else || []);
    this.effort = (this.then.effort + this.else.effort) / 2;
  }

  flat() {
    const thenTimeline = this.then.flat();
    const elseTimeline = this.else.flat();
    const nested = [
      {type: 'jumpif', jumpif: this.if, jumpRel: elseTimeline.length + 2},
      elseTimeline,
      {type: 'jump', jumpRel: thenTimeline.length + 1},
      thenTimeline
    ];
    return TimelineElement.mergeArrays(nested);
  }

  setCumEffort(start) {
    this.then.setCumEffort(start, this.effort / this.then.effort);

    if (this.else.setCumEffort) {
      this.else.setCumEffort(start, this.effort / this.else.effort);
    }
  }

  normCumEffort(total) {
    this.then.normCumEffort(total);
    if (this.else.normCumEffort) {
      this.else.normCumEffort(total);
    }
  }
}

class TLwhile extends TimelineElement {
  constructor(whileSource) {
    super(whileSource);
    this.type = 'while';
    this.while = whileSource.while;
    this.do = TimelineElement.convert(whileSource.do);
    this.effort = this.do.effort;
  }

  flat() {
    const doTimeline = this.do.flat();
    const nested = [
      {
        type: 'jumpif',
        jumpif: TimelineElement.negate(this.while),
        jumpRel: doTimeline.length + 2,
      },
      doTimeline,
      {type: 'jump', jumpRel: -(doTimeline.length + 1)}
    ];
    return TimelineElement.mergeArrays(nested);
  }

  setCumEffort(start) {
    this.do.setCumEffort(start);
  }

  normCumEffort(total) {
    this.do.normCumEffort(total);
  }
}

class TLrepeat extends TimelineElement {
  constructor(repeatSource) {
    super(repeatSource);
    this.type = 'repeat';
    this.repeat = TimelineElement.convert(repeatSource.repeat);
    this.until = repeatSource.until;
    this.effort = this.repeat.effort;
  }

  flat() {
    const repeatTimeline = this.repeat.flat();
    const nested = [
      repeatTimeline,
      {
        type: 'jumpif',
        jumpif: TimelineElement.negate(this.until),
        jumpRel: -repeatTimeline.length,
      },
    ];
    return TimelineElement.mergeArrays(nested);
  }

  setCumEffort(start) {
    this.repeat.setCumEffort(start);
  }

  normCumEffort(total) {
    this.repeat.normCumEffort(total);
  }
}

class TLMilestone extends TimelineElement {
  constructor(frameSource) {
    super(frameSource);
    this.type = 'milestone';
    this.effort = 0;
  }

  flat() {
    return {type: 'milestone'};
  }

  setCumEffort(start) {
    this.cumEffort = start + this.effort;
  }

  normCumEffort(total) {
    this.cumEffort = this.cumEffort * 100 / total;
  }
}

class TLNextSession extends TimelineElement {
  constructor(frameSource) {
    super(frameSource);
    this.type = 'nextSession';
    this.timeBetweenSessionsInSeconds = frameSource.timeBetweenSessionsInSeconds;
    this.effort = 0;
  }

  flat() {
    return {type: 'nextSession', timeBetweenSessionsInSeconds: this.timeBetweenSessionsInSeconds};
  }

  setCumEffort(start) {
    this.cumEffort = start + this.effort;
  }

  normCumEffort(total) {
    this.cumEffort = this.cumEffort * 100 / total;
  }
}