import React from "react";

export const config = {
  develop: true,

  language: 'de',
  numberOfSessions: 2,
  timeBetweenSessionsInSeconds: 5 * 60,
  pauseSeconds: 75,
  timeForExamples: 60,//TODO 3600

  instructions: {
    delay: 1000, //TODO 3000
    animation: '0.1s',
  },

  mathCourse: {
    delay: 1000, //TODO 3000
    animation: '0.1s',
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

  r:
  radio 0: Anzahl gleich/ändert sich
  radio 1: Anzahl eine/mehrere Ergebnisfolgen
  radio 2: mal 2, weil eine/mehrere Ereignisfolgen --> zu p3, p4
  radio 3: nicht mal 2, weil eine/mehrere Ereignisfolgen --> zu p1, p2
  radio 4: Nenner gleich, weil sich Ergebnisanzahl ändert/nicht ändert --> zu p1, p3
  radio 5: Nenner verschieden, weil sich Ergebnisanzahl ändert/nicht ändert --> zu p2, p4

  b: nur ein Button ohne weiter Eingabefelder
  */
  examples: {
    groups: [//TODO 2. Session berücksichtigen
      {
        id: 'blocked-sequential',
        items: [
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
        ]
      },
      {
        id: 'interleaved-sequential',
        items: [
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
        ]
      },
      {
        id: 'blocked-simultaneous',
        items: [
          ["c1234 p1 e1234"],
          ["c2341 p2 e1234"],
          ["c3412 p3 e1234"],
          ["c4123 p4 e1234"],
        ]
      },
      {
        id: 'interleaved-simultaneous',
        items: [
          ["c1 p1234 e1234"],
          ["c2 p2341 e1234"],
          ["c3 p3412 e1234"],
          ["c4 p4123 e1234"],
        ]
      },
      {
        id: 'test',
        items: [
          ["c4 p4 b",
            "c1 p4 b",
            "c2 p4 b",
            "c3 p4 e4"],
          ["c1 p1 r01",
            "c2 p2 r01",
            "c3 p3 r24",
            "c4 p4 r25"],
          ["c2341 p2 e1234"],
          ["c4 p4123 e1234"],
        ]
      },
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
    radioDelay: 777,
    items: [
      ['postMC_1',
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
        'postFT2step_4',],
        //------------------------
        ['postConcept_1',
        'postConcept_2',
        'postConcept_3',
        'postConcept_4',
        'postConceptNew_1',
        'postConceptNew_2',
        'postConceptNew_3',
        'postConceptNew_4',],
        //TODO Postopen_1 und Postopen_2
        //Nun 16 Textaufgaben
        ['pz-rvt1',
        'pz-rvt2',
        'pz-rvt3',
        'pz-rvt4',
        'pz-rvt5',
        'pz-rvt6',
        'pz-rvt7',
        'pz-rvt8',
        'lw-rvt1',
        'lw-rvt2',
        'lw-rvt3',
        'lw-rvt4',
        'lw-rvt5',
        'lw-rvt6',
        'lw-rvt7',
        'lw-rvt8',]
    ],
  },

}