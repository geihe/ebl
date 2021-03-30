import React from "react";

export const config = {
  develop: true,

  language: 'de',
  numberOfSessions: 1,
  timeBetweenSessionsInSeconds: 5 * 60,
  pauseSeconds: 75, //TODO 600
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
      { // group 0
        id: 'test',
        items: [
          ["c1 p1 r100-1035",
            "c2 p1 r101-1044",
            "c3 p1 r100-1037",
            "c4 p1 r101-1045"],
          // ["c1 p1-2-3-4 e1-2-3-4"],
          // ["c2-3-4-1 p2 r10-13-20-25-31-33-41-45"],
          // ["c1 p1 r0-3",
          //   "c2 p2 r1-5",
          //   "c3 p3 r0-4",
          //   "c4 p4 r1-2"],
          // ["c3 p2-3-4-1 r11-15-20-24-31-32-40-43"],
        ]
      },
      {  // group 1
        id: 'blocked-sequential',
        items: [
          ["c1 p1 r101-1035",
            "c2 p1 r100-1044",
            "c3 p1 r101-1036",
            "c4 p1 r100-1047"],
          ["c2 p2 r200-2035",
            "c3 p2 r201-2056",
            "c4 p2 r200-2037",
            "c1 p2 r201-2054"],
          ["c3 p3 r301-3026",
            "c4 p3 r300-3045",
            "c1 p3 r301-3024",
            "c2 p3 r300-3047"],
          ["c4 p4 r400-4024",
            "c1 p4 r401-4055",
            "c2 p4 r400-4026",
            "c3 p4 r401-4057"],
        ]
      },
      {   // group 2
        id: 'interleaved-sequential',
        items: [
          ["c1 p1 r101-1035",
            "c1 p2 r201-2054",
            "c1 p3 r301-3024",
            "c1 p4 r401-4055"],
          ["c2 p2 r200-2035",
            "c2 p3 r300-3047",
            "c2 p4 r400-4026",
            "c2 p1 r100-1044"],
          ["c3 p3 r301-3026",
            "c3 p4 r401-4057",
            "c3 p1 r101-1036",
            "c3 p2 r201-2056"],
          ["c4 p4 r400-4024",
            "c4 p1 p1 r100-1047",
            "c4 p2 r200-2037",
            "c4 p3 p3 r300-3045"],
        ]
      },
      { // group 3
        id: 'blocked-simultaneous',
        items: [
          ["c1-2-3-4 p1 r111-1135-120-1244-131-1336-140-1447"],
          ["c2-3-4-1 p2 r210-2135-221-2256-230-2337-241-2454"],
          ["c3-4-1-2 p3 r311-3145-320-3224-331-3347-340-3426"],
          ["c4-1-2-3 p4 r410-4124-421-4255-430-4326-441-4457"],
        ]
      },
      { // group 4
        id: 'interleaved-simultaneous',
        items: [
          ["c1 p1-2-3-4 r110-1135-221-2254-330-3324-441-4455"],
          ["c2 p2-3-4-1 r211-2135-320-3247-431-4326-140-1444"],
          ["c3 p3-4-1-2 r310-3126-421-4257-130-1336-241-2456"],
          ["c4 p4-1-2-3 r411-4124-120-1247-231-2337-340-3445"],
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
      [
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
      ],
      //------------------------
      [
        'postConcept_1',
        'postConcept_2',
        'postConcept_3',
        'postConcept_4',
        'postConceptNew_1',
        'postConceptNew_2',
        'postConceptNew_3',
        'postConceptNew_4',
        'postOpen_1', 'postOpen_2',
      ],
      //Nun 16 Textaufgaben
      [
        'pz-rvt1',
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
        'lw-rvt8',
      ]
    ],
  },

}