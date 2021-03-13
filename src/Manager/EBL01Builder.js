import React from 'react';
import {TimelineManager} from "../helper/TimelineManager";
import {testTimeline} from "../Test/testTimeline";
import {ToDoFrame} from "../Frames/ToDoFrame";
import {EBLPause} from "../Frames/EBL/EBLPause";
import {exampleFrames, exampleFramesTest} from "../Frames/EBL/EBL01_ExampleFrames";
import {EBL01_Demographics} from "../Frames/Instructions/EBL01_Demographics"
import {
  InstructionFrame01,
  InstructionFrame03,
  InstructionFrame04,
  InstructionFrame06,
  InstructionFrame07,
  InstructionFrame09,
  InstructionFrame10,
  InstructionFrame100_sequenziell_12,
  InstructionFrame100_simultan_34,
  InstructionFrame101_sequenziell_12,
  InstructionFrame101_simultan_34,
  InstructionFrame11,
  InstructionFrame12,
  InstructionFrame13,
  InstructionFrame14,
  InstructionFrame16,
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
import {EBL01_MathCourse} from "../assets/EBL01/EBL01_MathCourse";
import {InstructionTest} from "../Frames/InstructionTest";
import {postFrames, preTest} from "../assets/EBL01/EBL01_PrePostTest";

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

      <InstructionFrame01/>,
      <ToDoFrame text={'Video Einleitung '}/>,
      <InstructionFrame03/>,
      {
        repeat: [<InstructionFrame04/>, <InstructionFrame06/>,
          <InstructionFrame07/>, <InstructionTest/>,],
        until: (lastlog) => lastlog.correct
      },
      <InstructionFrame09/>,
      <InstructionFrame10/>, cancelTest,
      <InstructionFrame11/>, cancelTest,
      <InstructionFrame12/>, cancelTest,
      <InstructionFrame13/>, cancelTest,
      <InstructionFrame14/>,

      <InstructionFrame16/>,
      preTest,
      <InstructionFrame17/>,
      EBL01_MathCourse,
      this.group <= 2 ?
        [<InstructionFrame100_sequenziell_12/>,
          <InstructionFrame101_sequenziell_12/>,] :
        [<InstructionFrame100_simultan_34/>,
          <InstructionFrame101_simultan_34/>,]
      ,
      exampleFrames(this.group),

      <EBLPause/>,
      <ToDoFrame text={'Nächsten Frame durch Video ersetzen.'}/>,
      <InstructionFrame200/>,
      <InstructionFrame201/>, postFrames[0],
      <InstructionFrame202/>, postFrames[1],
      <InstructionFrame203/>, postFrames[2],
      <ToDoFrame text={'Video Debriefing?, '} />,
      <InstructionFrame204/>,
      <EBL01_Demographics/>,
      <InstructionFrame206/>, <FixationCrossFrame nocross/>,
      <InstructionFrame207/>, <FixationCrossFrame nocross/>,
      <InstructionFrame208/>, <FixationCrossFrame nocross/>,
      <InstructionFrame209/>, <FixationCrossFrame nocross/>,
      <InstructionFrame210/>, <FixationCrossFrame nocross/>,
      <InstructionFrame211a/>, <FixationCrossFrame nocross/>,
      <InstructionFrame212/>,
      <ToDoFrame text={'Versuchspersonenbescheinigung '}/>,
      <ToDoFrame text={'Einverständnis, dass die Daten anonymisiert auf den Server geladen werden '}/>,
      <ToDoFrame text={'Session-Ende, Code erzeugen, Mailadresse abfragen,  '}/>,
    ]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }

  buildTestSession() {
    this.tlManager.add(
      <InstructionFrame211a/>,
        {
          if: (lastlog) => lastlog === 'Ja',
          then:  <InstructionFrame211b/>,
        },
      <FixationCrossFrame nocross/>,
      <InstructionFrame212/>,
      exampleFramesTest(this.group)
    );
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }

}
