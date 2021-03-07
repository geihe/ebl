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
  InstructionFrame05,
  InstructionFrame06,
  InstructionFrame07,
  InstructionFrame09,
  InstructionFrame10,
  InstructionFrame11,
  InstructionFrame11alt,
  InstructionFrame12,
  InstructionFrame12alt,
  InstructionFrame13,
  InstructionFrame14,
  InstructionFrame16a_I_simultan_group23alt,
  InstructionFrame16a_II_simultan_group23alt,
  InstructionFrame16b_I_sequenziell_group01alt,
  InstructionFrame16b_II_sequenziell_group01alt,
  InstructionFrame19alt,
  InstructionFrame20aalt,
  InstructionFrame20balt,
  InstructionFrame20calt,
  InstructionFrame22alt,
  InstructionFrame22bIaalt,
  InstructionFrame22bIbalt,
  InstructionFrame22bIIbalt,
  InstructionFrame22bIIcalt,
  InstructionFrame22bIIdalt,
  InstructionFrame22bIIealt,
  InstructionFrame23alt
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

  buildSession1() {
    const cancelTest = {
      if: (lastlog) => lastlog === 'break',
      then: <CancelFrame/>,
    };

    const einleitung = [<InstructionFrame01/>,
      <ToDoFrame text={'Video Einleitung '}/>]; // -->InstructionFrame02

    const vorabInformation = [<InstructionFrame03/>,
      {
        repeat: [<InstructionFrame04/>, <InstructionFrame05/>, <InstructionFrame06/>,
          <InstructionFrame07/>, <InstructionTest/>,],
        until: (lastlog) => lastlog.correct
      }];

    const datenschutzEinverstaendnis = [<InstructionFrame09/>,
      <InstructionFrame10/>, cancelTest,
      <InstructionFrame11/>, cancelTest,
      <InstructionFrame12/>, cancelTest,
      <InstructionFrame13/>, cancelTest,
      <InstructionFrame14/>];

    this.tlManager.add([
      ...einleitung,
      ...vorabInformation,
      ...datenschutzEinverstaendnis,


      <InstructionFrame11alt/>,
      preTest,
      <InstructionFrame12alt/>,
      EBL01_MathCourse,
      this.group >2 ?
        [<InstructionFrame16a_I_simultan_group23alt/>,
        <InstructionFrame16a_II_simultan_group23alt/>,]
        :
        [<InstructionFrame16b_I_sequenziell_group01alt/>,
          <InstructionFrame16b_II_sequenziell_group01alt/>,]
      ,
      exampleFrames(this.group),

      // <InstructionFrame18/>,  -> ist bereits in EBLPause integriert
      <EBLPause/>,
      <InstructionFrame19alt/>,
      <InstructionFrame20aalt/>, postFrames[0],
      <InstructionFrame20balt/>, postFrames[1],
      <InstructionFrame20calt/>, postFrames[2],
      <InstructionFrame20balt/>,
      <InstructionFrame20calt/>,
      <ToDoFrame text={'Video Debriefing, '}/>,
      <InstructionFrame22alt/>,
      <EBL01_Demographics/>,
      <InstructionFrame22bIaalt/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIbalt/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIIbalt/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIIcalt/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIIdalt/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIIealt/>, <FixationCrossFrame nocross/>,
      <InstructionFrame23alt/>,
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
      exampleFramesTest(this.group)
    );
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }

}
