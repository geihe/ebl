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
import {ScreenCheck} from "../Frames/ScreenCheck";

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
      {frame: <InstructionFrame01/>, id:'firstFrame'},
      <EBL01Video videoID={'introduction'}/>,
      <InstructionFrame03/>,
      {
        repeat: [<InstructionFrame04/>, <InstructionFrame06/>,
          {frame: <InstructionTest/>, id:'InstructionTest'}],
        until: (lastlog) => lastlog.valid
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
      {frame: <JolFrame1/>, id:'JoL1'},
      {frame: <JolFrame2/>, id:'JoL2'},
      {frame: <JolFrame3/>, id:'JoL3'},
      {frame: <JolFrame4/>, id:'JoL4'},
      {timer: config.pauseSeconds, frames: [<EBLPause/>]},
      {milestone: true},
      <InstructionFrame200/>,
      <InstructionFrame201/>, postFrames[0], {milestone: true},
      <InstructionFrame202/>, postFrames[1], {milestone: true},
      <InstructionFrame203/>, postFrames[2], {milestone: true},

      <InstructionFrame204/>,
      {frame: <EBL01_Demographics/>, id:'Demographics'},
      {frame: <InstructionFrame206/>, id:'Störung'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame207/>, id:'Konzentration'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame208/>, id:'IstStudieNeu'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame209/>, id:'Ernsthaft'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame210/>, id:'Hilfsmittel'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame211a/>, id:'GabEsSchwierigkeiten'},
      {
        if: (lastlog) => lastlog === 'Schwierigkeiten? Ja',
        then: {frame: <InstructionFrame211b/>, id:'Schwierigkeiten'},
      },
      <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame212/>, id:'Feedback'},
    ]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }

  buildTestSession() {
    this.tlManager.add(
      <ScreenCheck/>,
      exampleFrames(this.group),
      <InstructionFrame200/>,
      <InstructionFrame201/>, postFrames[0], {milestone: true},
      <InstructionFrame202/>, postFrames[1], {milestone: true},
      <InstructionFrame203/>, postFrames[2], {milestone: true},
    );
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }
}