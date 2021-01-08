import React from "react";
import {
  Instruction01,
  Instruction02,
  Instruction03,
  Instruction04a,
  Instruction04b,
  Instruction05,
  Instruction06a,
  Instruction06b,
  Instruction07a,
  Instruction07b,
  Instruction07c,
  Instruction08,
  Instruction09,
  Instruction10
} from "./EBL01_Introduction";

export const config = {
  develop: true,

  language: 'de',
  numberOfSessions: 2,
  timeBetweenSessionsInSeconds: 5*60,

  introduction: {
    delay: 1000,
    animation: '',
    items: [
      <Instruction01/>,
      <Instruction02/>,
      <Instruction03/>,
      <Instruction04a/>,
      <Instruction04b/>,
      <Instruction05/>,
      <Instruction06a/>,
      <Instruction06b/>,
      <Instruction07a/>,
      <Instruction07b/>,
      <Instruction07c/>,
      <Instruction08/>,
      <Instruction09/>,
      <Instruction10/>,
    ],
  },

  preTest: {
    showFeedback: false,
    repeatOnWrong: false,
    hideStimulusOnResponse: true,
    textAreaMinLength: 7,
    inputMinLength: 2,
    radioAutoContinue: true,
    radioDelay: 1111,

    items: [
      'pre1step_1',
      'pre1step_2',
      'pre1step_3',
      'pre1step_4',
      'preMulti_4',
      'preMulti_1',
      'preMulti_2',
      'preMulti_3',
      'postMC_1',
      'postMC_3',
      'postMC_6',
      'postMC_7',
    ],
  },

  /*
  c:
  context 1: Fahrradhelm
  context 2: Edelgase
  context 3: Skispringen
  context 4: Kekse

  p:
  principle 0: Header
  principle 1: order relevant, with replacement
  principle 2: order relevant, without replacement
  principle 3: order irrelevant, with replacement
  principle 4: order irrelevant, without replacement

  e:
  explanation 0: Lösung beschreiben
  explanation 1: Aufgaben 1 und 2 vergleichen
  explanation 2: Aufgaben 1 und 3 vergleichen
  explanation 3: Aufgaben 1 und 4 vergleichen
  explanation 4: Alle 4 Aufgaben vergleichen
  */
  examples: {
    groups: [//TODO 2. Session berücksichtigen
      {id: 'blocked-sequential',
      items:[
        ["c1 p1 e0",
        "c2 p1 e0",
        "c3 p1 e0",
        "c4 p1 e0"],
        ["c2 p2 e0",
        "c3 p2 e0",
        "c4 p2 e0",
        "c1 p2 e0"],
        ["c3 p3 e0",
        "c4 p3 e0",
        "c1 p3 e0",
        "c2 p3 e0"],
        ["c4 p4 e0",
        "c1 p4 e0",
        "c2 p4 e0",
        "c3 p4 e0"],
      ]},
      {id: 'interleaved-sequential',
      items:[
        ["c1 p1 e0",
          "c2 p2 e0",
          "c3 p3 e0",
          "c4 p4 e0"],
        ["c2 p2 e0",
          "c3 p3 e0",
          "c4 p4 e0",
          "c1 p1 e0"],
        ["c3 p3 e0",
          "c3 p4 e0",
          "c3 p1 e0",
          "c3 p2 e0"],
        ["c4 p4 e0",
          "c4 p1 e0",
          "c4 p2 e0",
          "c4 p3 e0"],
      ]},
      {id: 'blocked-simultaneous',
        items:[
            ["c1234 p1 e1234"],
            ["c2341 p2 e1234"],
            ["c3412 p3 e1234"],
            ["c4123 p4 e1234"],
        ]},
      {id: 'interleaved-simultaneous',
      items:[
        ["c1 p1234 e1234"],
        ["c2 p2341 e1234"],
        ["c3 p3412 e1234"],
        ["c4 p4123 e1234"],
      ]},
    ],
    textAreaMinLength: 10,
  },

  postTest: {
    showFeedback: false,
    repeatOnWrong: false,
    hideStimulusOnResponse: true,
    textAreaMinLength: 7,
    inputMinLength: 2,
    radioAutoContinue: true,
    radioDelay: 1111,
    items: [
      'postConcept_1',
      'postConcept_2',
      'postConcept_3',
      'postConcept_4',
      'postMC_1',
      'postMC_3',
      'postMC_6',
      'postMC_7',
      'postNT2step_1',
      'postNT2step_2',
      'postNT2step_3',
      'postNT2step_4',
      'postFT2step_1',
      'postFT2step_2',
      'postFT2step_3',
      'postFT2step_4',
      'postConceptNew_1',
      'postConceptNew_2',
      'postConceptNew_3',
      'postConceptNew_4',
    ],
  },
}