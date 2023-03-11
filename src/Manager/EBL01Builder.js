import React from 'react';
import {TimelineManager} from "../helper/TimelineManager";
import {addToTag, getDataFromTag} from "../helper/tagHelper";
import {EBL01_Demographics} from "../Frames/Instructions/EBL01_Demographics"
import {
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
  InstructionFrame212,
  ShowStudyCode
} from "../Frames/Instructions/InstructionFrame";
import {CancelFrame} from "../Frames/CancelFrame";
import {FixationCrossFrame} from "../Frames/FixationCrossFrame";
import {postFrames} from "../assets/EBL01/EBL01_PrePostTest";
import {JolFrame4} from "../Frames/JolFrames";

export class EBL01Builder {
  constructor(t) {
    this.t = t;
    this.tlManager = new TimelineManager();
    this.session = 1;
    this.groupManager = null; //group von 1 bis 4 , 0 -> test
    this.showStudyCode = false;
  }

  setSession(session) {
    this.session = session;
    return this;
  }

  setGroupManager(groupManager) {
    this.groupManager = groupManager;
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

    // -->InstructionFrame02
    this.tlManager.add([
      {frame: <EBL01_Demographics/>, id: 'Demographics'},
      {
        id: 'groupFunction',
        function: (data) => {
          const log = data.find(d => d.id === "Demographics").log;
          const male = log.gender !== "female";
          const age = +log.age;
          this.groupManager.determineGroup(male, age);
          const groupId = this.groupManager.getGroupId();
          const oldTag = data[0].tag;
          data[0].tag = addToTag(groupId, oldTag);
          data[0].male = male ? 1 : 0;
          data[0].age = age;
          data[0].groupId = groupId;
          console.log(this.groupManager.getGroupName());
          console.log(data);
          console.log(getDataFromTag(data[0].tag));
          return groupId;
        }
      },//TODO verschieben
      // {
      //   if: (last, data) => data.find(d => d.id === "groupFunction").result <= 2,
      //   then: [<InstructionFrame100_sequenziell_12/>, <InstructionFrame101_sequenziell_12/>,],
      //   else:  [<InstructionFrame100_simultan_34/>,  <InstructionFrame101_simultan_34/>,]
      // },

      // //-----------------------------
      // {frame: <InstructionFrame01/>, id: 'firstFrame'},
      // {milestone: true},
      // <EBL01Video videoID={'introduction'}/>,
      // <InstructionFrame03/>,
      // {
      //   repeat: [<InstructionFrame04/>, <InstructionFrame06/>,
      //     {frame: <InstructionTest/>, id: 'InstructionTest'}],
      //   until: (lastlog) => lastlog.valid
      // },
      // {milestone: true},
      // <InstructionFrame09/>, cancelTest,
      // <InstructionFrame10/>, cancelTest,
      // <InstructionFrame11/>, cancelTest,
      // {milestone: true},
      // <InstructionFrame16a/>,
      // <InstructionFrame16b/>,
      // {frame: <EBL01_Demographics/>, id: 'Demographics'},
      // {function: (data) => console.log('TEST')},//TODO
      // preTest,
      // {milestone: true},
      // <InstructionFrame17/>,
      // ebl01_MathCourse,
      // {milestone: true},
      // this.groupManager <= 2 ?//TODO
      //   [<InstructionFrame100_sequenziell_12/>,
      //     <InstructionFrame101_sequenziell_12/>,] :
      //   [<InstructionFrame100_simultan_34/>,
      //     <InstructionFrame101_simultan_34/>,]
      // ,
      // exampleFrames(this.groupManager),
      // {milestone: true},
      // <InstructionFrame103/>,
      // {frame: <Pq1/>, id: 'Pq1'},
      // {frame: <Pq2/>, id: 'Pq2'},
      // {frame: <Pq3/>, id: 'Pq3'},
      // {frame: <Pq4/>, id: 'Pq4'},
      // <InstructionFrame104/>,
      // {frame: <JolFrame1/>, id: 'JoL1'},
      // {frame: <JolFrame2/>, id: 'JoL2'},
      // {frame: <JolFrame3/>, id: 'JoL3'},
      {frame: <JolFrame4/>, id: 'JoL4'},
      //{timer: config.pauseSeconds, frames: [<EBLPause/>]},
      //TODO Übergabe an Qualtrics
    ]);
  }

  buildSession2() {
    this.tlManager.add([
      //TODO ggf. Begrüßung zu Teil 2
      <InstructionFrame200/>,
      <InstructionFrame201/>, postFrames[0], {milestone: true},
      <InstructionFrame202/>, postFrames[1], {milestone: true},
      <InstructionFrame203/>, postFrames[2], {milestone: true},

      <InstructionFrame204/>,
      {frame: <InstructionFrame206/>, id: 'Störung'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame207/>, id: 'Konzentration'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame208/>, id: 'IstStudieNeu'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame209/>, id: 'Ernsthaft'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame210/>, id: 'Hilfsmittel'}, <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame211a/>, id: 'GabEsSchwierigkeiten'},
      {
        if: (lastlog) => lastlog === 'Schwierigkeiten? Ja',
        then: {frame: <InstructionFrame211b/>, id: 'Schwierigkeiten'},
      },
      <FixationCrossFrame nocross/>,
      {frame: <InstructionFrame212/>, id: 'Feedback'},
    ]);
    if (this.showStudyCode) {
      this.tlManager.add(<ShowStudyCode random/>);
    }

  }

  buildTestSession() {
    this.tlManager.add(
      postFrames[0],
    );
    this.tlManager.add(<ShowStudyCode random/>);
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }
}