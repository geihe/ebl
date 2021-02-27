import React from 'react';
import {TimelineManager} from "../../helper/TimelineManager";
import {testTimeline} from "../../Test/testTimeline";
import {ToDoFrame} from "../../Frames/ToDoFrame";
import {Demographics} from "../../Frames/Demographics";
import {EBLPause} from "../../Frames/EBL/EBLPause";
import {postFrames, preFrames} from "./EBL01_PrePostTest";
import {exampleFrames, exampleFramesTest} from "./EBL01_ExampleFrames";
import {
  InstructionFrame01,
  InstructionFrame03,
  InstructionFrame04,
  InstructionFrame05,
  InstructionFrame06,
  InstructionFrame07,
  InstructionFrame08_I,
  InstructionFrame08_II,
  InstructionFrame09_I,
  InstructionFrame09_II,
  InstructionFrame09_III,
  InstructionFrame09_IV,
  InstructionFrame11,
  InstructionFrame12,
  InstructionFrame16a_I_simultan_group23,
  InstructionFrame16a_II_simultan_group23,
  InstructionFrame16b_I_sequenziell_group01,
  InstructionFrame16b_II_sequenziell_group01,
  InstructionFrame19,
  InstructionFrame20a,
  InstructionFrame20b,
  InstructionFrame20c,
  InstructionFrame22,
  InstructionFrame22bIa,
  InstructionFrame22bIb,
  InstructionFrame22bIIb,
  InstructionFrame22bIIc,
  InstructionFrame22bIId
} from "../../Frames/Instructions/InstructionFrame";
import {CancelFrame} from "../../Frames/CancelFrame";
import {FixationCrossFrame} from "../../Frames/FixationCrossFrame";
import {Test} from "../../Frames/Test";
import {EBL01_MathCourse} from "./EBL01_MathCourse";

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

    this.tlManager.add([
      <InstructionFrame01/>,
      <ToDoFrame text={'Video Einleitung '}/>,
      <InstructionFrame03/>,
      <InstructionFrame04/>,
      <InstructionFrame05/>,cancelTest,
      <InstructionFrame07/>,cancelTest,
      <InstructionFrame08_I/>,cancelTest,
      <InstructionFrame08_II/>,cancelTest,
      <InstructionFrame06/>,
      {
        repeat: [<InstructionFrame09_I/>, <InstructionFrame09_II/>, <InstructionFrame09_III/>,<InstructionFrame09_IV/>,<Test/>,],
        until: (lastlog)=>lastlog.correct
      },
      <InstructionFrame11/>,
      preFrames,
      <InstructionFrame12/>,
      EBL01_MathCourse,
      this.group >1 ?
        [<InstructionFrame16a_I_simultan_group23/>,
        <InstructionFrame16a_II_simultan_group23/>,]
        :
        [<InstructionFrame16b_I_sequenziell_group01/>,
          <InstructionFrame16b_II_sequenziell_group01/>,]
      ,
      exampleFrames(this.group),

      // <InstructionFrame18/>,  -> ist bereits in EBLPause integriert
      <EBLPause/>,
      <InstructionFrame19/>,
      <InstructionFrame20a/>, postFrames[0],
      <InstructionFrame20b/>, postFrames[1],
      <InstructionFrame20c/>, postFrames[2],
      <InstructionFrame20b/>,
      <InstructionFrame20c/>,
      <ToDoFrame text={'Video Debriefing, '}/>,
      <InstructionFrame22/>,
      <Demographics/>,
      <InstructionFrame22bIa/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIb/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIIb/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIIc/>, <FixationCrossFrame nocross/>,
      <InstructionFrame22bIId/>, <FixationCrossFrame nocross/>,
      <ToDoFrame text={'Versuchspersonenbescheinigung '}/>,
      <ToDoFrame text={'Einverständnis, dass die Daten anonymisiert auf den Server geladen werden '}/>,
      <ToDoFrame text={'Session-Ende, Code erzeugen, Mailadresse abfragen,  '}/>,
    ]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }

  buildTestSession() {
    console.log(exampleFramesTest());
    this.tlManager.add(exampleFramesTest(),);
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }

}
