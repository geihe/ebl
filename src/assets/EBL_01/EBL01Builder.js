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
  InstructionFrame09_III,
  InstructionFrame10,
  InstructionFrame11,
  InstructionFrame12,
  InstructionFrame16a_I_simultan_group23,
  InstructionFrame16a_II_simultan_group23,
  InstructionFrame16b_I_sequenziell_group01,
  InstructionFrame16b_II_sequenziell_group01,
  InstructionFrame18,
  InstructionFrame19,
  InstructionFrame22
} from "../../Frames/Instructions/InstructionFrame";
import {CancelFrame} from "../../Frames/CancelFrame";

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
    const cancelTest = {
      if: (lastlog) => lastlog === 'break',
      then: <CancelFrame/>,
    };

    this.tlManager.add([
      <InstructionFrame22/>,
      <Demographics/>,
      <InstructionFrame01/>,
      <InstructionFrame02/>,
      <InstructionFrame03/>,
      <InstructionFrame04/>,
      <InstructionFrame05/>,cancelTest,
      <InstructionFrame06/>,
      <InstructionFrame07/>,cancelTest,
      <InstructionFrame08_I/>,cancelTest,
      <InstructionFrame08_II/>,cancelTest,
      <InstructionFrame09_I/>,
      <InstructionFrame09_II/>,
      <InstructionFrame09_III/>,
      <InstructionFrame10/>,
      <InstructionFrame11/>,
      preFrames,
      <InstructionFrame12/>,
      this.group >1 ?
        [<InstructionFrame16a_I_simultan_group23/>,
        <InstructionFrame16a_II_simultan_group23/>,]
        :
        [<InstructionFrame16b_I_sequenziell_group01/>,
          <InstructionFrame16b_II_sequenziell_group01/>,]
      ,
      <ToDoFrame text={' 2-3 Fragen, ob der Ablauf des Experiments verstanden wurde'}/>,
      exampleFrames(this.group),
      <InstructionFrame18/>,
      <EBLPause/>,
      <InstructionFrame19/>,
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
