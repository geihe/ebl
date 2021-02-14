import React from 'react';
import {TimelineManager} from "../../helper/TimelineManager";
import {testTimeline} from "../../Test/testTimeline";
import {ToDoFrame} from "../../Frames/ToDoFrame";
import {Demographics} from "../../Components/Demographics";
import {EBLPause} from "../../Frames/EBL/EBLPause";
import {postFrames, preFrames} from "./EBL01_PrePostTest";
import {exampleFrames} from "./EBL01_ExampleFrames";
import {
  InstructionFrame01,
  InstructionFrame02,
  InstructionFrame03,
  InstructionFrame04,
  InstructionFrame05,
  InstructionFrame06,
  InstructionFrame07,
  InstructionFrame08_I,
  InstructionFrame08_II,
  InstructionFrame09_I,
  InstructionFrame09_II,
  InstructionFrame09_III
} from "../../Frames/Instructions/InstructionFrame";
import {CancelFrame} from "../../Frames/CancelFrame";
import {DelayedFrame} from "../../Frames/DelayedFrame";

export class EBL01Builder {
  constructor(t) {
    this.t = t;
    this.tlManager = new TimelineManager();
    this.session = 1;
    this.group = 0;
  }

  setSession(session) {
    this.session = session;
    return this;
  }

  setGroup(group) {
    this.group = group;
    return this;
  }

  build() {
    switch (this.session) {
      case 1:
        this.buildSession1();
        break;
      case 2:
        this.buildSession2();
        break;
      default:
        console.log("Fehler in EBL01Builder: Session-Nr. nicht gefunden.");
    }
  }

  buildSession1() {
    this.tlManager.add([
      <DelayedFrame space delay={0}>#####</DelayedFrame>,
      <DelayedFrame cancelButton delay={3000}> *** </DelayedFrame>,
      {
        if: (lastlog) => lastlog === 'break',
        then: <CancelFrame/>,
      },

      <InstructionFrame01/>,
      <InstructionFrame02/>,
      <InstructionFrame03/>,
      <InstructionFrame04/>,
      <InstructionFrame05/>,
      <InstructionFrame06/>,
      <InstructionFrame07/>,
      <InstructionFrame08_I/>,
      <InstructionFrame08_II/>,
      <InstructionFrame09_I/>,
      <InstructionFrame09_II/>,
      <InstructionFrame09_III/>,
      preFrames,
      <ToDoFrame text={'Video "und nun eine kleiner mathematischer Lehrtext"'}/>,
      <ToDoFrame
        text={'Video "nun kommt das eigentliche Experiment mit Beschreibung"<br/>4 mal, für jeden Fall eins<br/>auch Erläuterung der Fragen zur Anstrengung'}/>,
      <ToDoFrame text={' 2-3 Fragen, ob der Ablauf des Experiments verstanden wurde'}/>,
      exampleFrames(this.group),
      <EBLPause/>,
      <ToDoFrame text={'Video "Nun kommen einige Aufgaben, mit denen wie den Lernerfolg überprüfen"'}/>,
      postFrames,
      <Demographics/>,
      <ToDoFrame text={'Einverständnis, dass die Daten anonymisiert auf den Server geladen werden '}/>,
      <ToDoFrame text={'Video Debriefing, '}/>,
    ]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }

  buildTest() {
    // this.tlManager.add(this.getProcessMeasures());
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }

}
