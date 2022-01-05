// principle 0: Header
// principle 1: order relevant, with replacement
// principle 2: order relevant, without replacement
// principle 3: order irrelevant, with replacement
// principle 4: order irrelevant, without replacement

export class Principle {
  constructor(p) {
    this.id=p;
    this.orderRelevant = (p === 1 || p === 2);
    this.withReplacement = (p === 1 || p === 3);
  }
}