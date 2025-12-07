import React from 'react';
import {exampleFrames} from "../Frames/EBL/EBL_ExampleFrames";
import {EBL01_Demographics} from "../Frames/Instructions/EBL01_Demographics";
import {EBL01Video} from "../Frames/EBL/EBL01Video";
import {InstructionTest} from "../Frames/InstructionTest";
import {ebl02_MathCourse} from "../assets/EBL01/Ebl02_MathCourse";

import {
  Feedback01Announce,
  Feedback02Gebunden,
  Feedback03Halbautomatisch,
  Feedback05Post,
  Feedback07Offen,
  InstructionFrame01,
  InstructionFrame03,
  InstructionFrame04,
  InstructionFrame06,
  InstructionFrame09,
  InstructionFrame10,
  InstructionFrame101,
  InstructionFrame103,
  InstructionFrame104,
  InstructionFrame11,
  InstructionFrame16b,
  InstructionFrame17,
  InstructionFrame200,
  InstructionFrame201,
  InstructionFrame202,
  InstructionFrame203,
  InstructionFrame204a,
  InstructionFrame206,
  InstructionFrame207,
  InstructionFrame208,
  InstructionFrame209,
  InstructionFrame210,
  InstructionFrame211a,
  InstructionFrame211b,
  InstructionFrame212,
  InstructionFrame_4b_100,
  InstructionFrame_4b_101_contrast,
  InstructionFrame_4b_101_note,
  InstructionFrame_4b_101_similarity,
  InstructionFrame_4b_102,
} from "../Frames/Instructions/InstructionFrame";
import {UserCodeForm} from '../Frames/Instructions/UserCodeForm';
import {CancelFrame} from "../Frames/CancelFrame";
import {FixationCrossFrame} from "../Frames/FixationCrossFrame";
import {postFrames, preTest} from "../assets/EBL01/EBL01_PrePostTest";
import {JolFrame1, JolFrame2, JolFrame3, JolFrame4} from "../Frames/JolFrames";
import {Pq1, Pq2, Pq3, Pq4} from "../Frames/ProcessQuestions";
import {SONA_ID} from "../Frames/Instructions/SONA_ID";


const cancelTest = {
  if: (lastlog) => lastlog === 'break',
  then: <CancelFrame/>,
};
const saveUserCode = {
  id: 'SONA_function',
  function: (data) => {
    const log = data.find(d => d.id === "UserCode").log;
    data[0].userCode = log.code;
  }
};


export function EBL04bSession1(groupManager) {
  return [
    {frame: <InstructionFrame01/>, id: 'firstFrame'},
    <EBL01Video videoID={'introduction'}/>,
    {frame: <UserCodeForm/>, id: 'UserCode'}, saveUserCode,

    {
      repeat: [<InstructionFrame04/>, <InstructionFrame06/>,
        {frame: <InstructionTest/>, id: 'InstructionTest'}],
      until: (lastlog) => lastlog.valid
    },

    <InstructionFrame09/>, cancelTest,
    <InstructionFrame10/>, cancelTest,
    <InstructionFrame11/>, cancelTest,
    <InstructionFrame03/>,
    {frame: <EBL01_Demographics/>, id: 'Demographics'},
    {
      id: 'groupFunction',
      function: (data) => {
        const log = data.find(d => d.id === "Demographics").log;
        const male = log.gender !== "female"; //zählt auch divers mit
        const age = +log.age;
        console.log(groupManager);
        if (!groupManager.hasGroupId()) {
          groupManager.determineGroup(male, age);
        }
        const groupId = groupManager.getGroupId();
        const oldTag = data[0].tag;
        // data[0].tag = addToTag(groupId, oldTag);
        data[0].male = male ? 1 : 0;
        data[0].age = age;
        data[0].groupId = groupId;
        return groupId;
      }
    },

    // <InstructionFrame16a/>,
    <InstructionFrame16b/>,
    preTest,
    <InstructionFrame17/>,
    ebl02_MathCourse,
    <InstructionFrame_4b_100/>,
    {
      if: () => groupManager.getGroupId() == 1,
      then: [<InstructionFrame_4b_101_note/>,]
    },
    {
      if: () => groupManager.getGroupId() == 2,
      then: [<InstructionFrame_4b_101_note/>]
    },
    {
      if: () => groupManager.getGroupId() == 3,
      then: [
        <InstructionFrame_4b_101_similarity/>,
        <EBL01Video videoID={'similarity'}/>,
      ]
    },
    {
      if: () => groupManager.getGroupId() == 4,
      then: [
        <InstructionFrame_4b_101_contrast/>,
        <EBL01Video videoID={'contrast'}/>,
      ]
    },
    <InstructionFrame101/>,
    <InstructionFrame_4b_102/>,

    {
      if: (lastlog, data) => groupManager.getGroupId() == 1,
      then: exampleFrames(1),
    },

    {
      if: (lastlog, data) => groupManager.getGroupId() == 2,
      then: exampleFrames(2),
    },

    {
      if: (lastlog, data) => groupManager.getGroupId() == 3,
      then: exampleFrames(3),
    },

    {
      if: (lastlog, data) => groupManager.getGroupId() == 4,
      then: exampleFrames(4),
    },

    <InstructionFrame103/>,
    {frame: <Pq1/>, id: 'Pq1'},
    {frame: <Pq2/>, id: 'Pq2'},
    {frame: <Pq3/>, id: 'Pq3'},
    {frame: <Pq4/>, id: 'Pq4'},
    <InstructionFrame104/>,
    {frame: <JolFrame1/>, id: 'JoL1'},
    {frame: <JolFrame2/>, id: 'JoL2'},
    {frame: <JolFrame3/>, id: 'JoL3'},
    {frame: <JolFrame4/>, id: 'JoL4'},
    //TODO Übergabe an Qualtrics
  ];
}

export function EBL04bSession2() {
  return [
    {frame: <UserCodeForm/>, id: 'UserCode'}, saveUserCode,
    <InstructionFrame200/>,
    <InstructionFrame201/>, postFrames[0], {milestone: true},
    <InstructionFrame202/>, postFrames[1], {milestone: true},
    <InstructionFrame203/>, postFrames[2], {milestone: true},

    <InstructionFrame204a/>,
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
    <Feedback01Announce/>,
    <Feedback02Gebunden/>,
    <Feedback03Halbautomatisch/>,
    <Feedback05Post/>,
    <Feedback07Offen/>,
    {frame: <InstructionFrame212/>, id: 'Feedback'},
    {frame: <SONA_ID/>, id: 'SONA_ID'},
    {
      id: 'SONA_function',
      function: (data) => {
        const log = data.find(d => d.id === "SONA_ID").log;
        console.log(data);
        data[0].tag = log.sona1;
      }
    },
  ];
}