import React from 'react';
import {TimelineManager} from "../helper/TimelineManager";
import {testTimeline} from "../Test/testTimeline";
import {EBLPause} from "../Frames/EBL/EBLPause";
import {exampleFrames} from "../Frames/EBL/EBL01_ExampleFrames";
import {EBL01_Demographics} from "../Frames/Instructions/EBL01_Demographics"
import {
  InstructionFrame01,
  InstructionFrame03,
  InstructionFrame04,
  InstructionFrame06,
  InstructionFrame09,
  InstructionFrame10,
  InstructionFrame100_sequenziell_12,
  InstructionFrame100_simultan_34,
  InstructionFrame101_sequenziell_12,
  InstructionFrame101_simultan_34,
  InstructionFrame103,
  InstructionFrame11,
  InstructionFrame16a,
  InstructionFrame16b,
  InstructionFrame17,
  InstructionFrame200,
  InstructionFrame201,
  InstructionFrame202,
  InstructionFrame203,
  InstructionFrame204,
  InstructionFrame206,
  InstructionFrame207,
  InstructionFrame208,
  InstructionFrame209,
  InstructionFrame210,
  InstructionFrame211a,
  InstructionFrame211b,
  InstructionFrame212
} from "../Frames/Instructions/InstructionFrame";
import {CancelFrame} from "../Frames/CancelFrame";
import {FixationCrossFrame} from "../Frames/FixationCrossFrame";
import {ebl01_MathCourse} from "../assets/EBL01/Ebl01_MathCourse";
import {InstructionTest} from "../Frames/InstructionTest";
import {postFrames, preTest} from "../assets/EBL01/EBL01_PrePostTest";
import {EBL01Video} from "../Frames/EBL/EBL01Video";
import {JolFrame1, JolFrame2, JolFrame3, JolFrame4} from "../Frames/JolFrames";
import {config} from "../config";

export class EBL01Builder {
  constructor(t) {
    this.t = t;
    this.tlManager = new TimelineManager();
    this.session = 1;
    this.group = 0; //group von 1 bis 4 , 0 -> test
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
      case 99:
        this.buildTestSession();
        break;
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

  buildSession1() { //TODO milestones einbauen
    const cancelTest = {
      if: (lastlog) => lastlog === 'break',
      then: <CancelFrame/>,
    };

    // -->InstructionFrame02
    this.tlManager.add([
      {milestone: true},
      <InstructionFrame01/>,
      <EBL01Video videoID={'introduction'}/>,
      <InstructionFrame03/>,
      {
        repeat: [<InstructionFrame04/>, <InstructionFrame06/>,
          <InstructionTest/>,],
        until: (lastlog) => lastlog.correct
      },
      <InstructionFrame09/>, cancelTest,
      <InstructionFrame10/>, cancelTest,
      <InstructionFrame11/>, cancelTest,
      {milestone: true},
      <InstructionFrame16a/>,
      <InstructionFrame16b/>,
      preTest,
      <InstructionFrame17/>,
      ebl01_MathCourse,
      {milestone: true},
      this.group <= 2 ?
        [<InstructionFrame100_sequenziell_12/>,
          <InstructionFrame101_sequenziell_12/>,] :
        [<InstructionFrame100_simultan_34/>,
          <InstructionFrame101_simultan_34/>,]
      ,
      exampleFrames(this.group),
      {milestone: true},
      <InstructionFrame103/>,
      <JolFrame1/>,
      <JolFrame2/>,
      <JolFrame3/>,
      <JolFrame4/>,
      {timer: config.pauseSeconds, frames: [<EBLPause/>]},
      {milestone: true},
      <InstructionFrame200/>,
      <InstructionFrame201/>, postFrames[0], {milestone: true},
      <InstructionFrame202/>, postFrames[1], {milestone: true},
      <InstructionFrame203/>, postFrames[2], {milestone: true},

      <InstructionFrame204/>,
      <EBL01_Demographics/>,
      <InstructionFrame206/>, <FixationCrossFrame nocross/>,
      <InstructionFrame207/>, <FixationCrossFrame nocross/>,
      <InstructionFrame208/>, <FixationCrossFrame nocross/>,
      <InstructionFrame209/>, <FixationCrossFrame nocross/>,
      <InstructionFrame210/>, <FixationCrossFrame nocross/>,
      <InstructionFrame211a/>,
      {
        if: (lastlog) => lastlog === 'Ja',
        then: <InstructionFrame211b/>,
      },
      <FixationCrossFrame nocross/>,
      <InstructionFrame212/>,

    ]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }

  buildTestSession() {
    this.tlManager.add(<InstructionFrame06/>,<InstructionFrame10/>,
      {

        repeat: [<InstructionFrame04/>, <InstructionFrame06/>,
          <InstructionTest/>,],
        until: (lastlog) => lastlog.correct
      },
    );
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }
}