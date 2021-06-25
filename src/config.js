export const config = {
  develop: true,
  milestones: true,

  language: 'de',
  numberOfSessions: 1,
  timeBetweenSessionsInSeconds: 5 * 60, //7*60*60*24
  pauseSeconds: 600, //600
  timeForExamples: 300, //300
  likertFrameDelay: 500, //500
  vph: 2,

  instructions: {
    delay: 3000, //3000
    animation: '0.1s',
  },

  mathCourse: {
    delay: 3000, //3000
    animation: '0.1s',
  },

  preTest: {
    showFeedback: false,
    repeatOnWrong: false,
    hideStimulusOnResponse: true,
    textAreaMinLength: 5,
    inputMinLength: 1,
    radioAutoContinue: true,
    radioDelay: 500, //500

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
      {  // group 0
        id: 'full',
        items: [
        ]
      },
      {  // group 1
        id: 'blocked-sequential',
        items: [
          ["c1 p1 r100-1035",
            "c2 p1 r101-1044",
            "c3 p1 r100-1036",
            "c4 p1 r101-1047"],
          ["c2 p2 r200-2035",
            "c3 p2 r201-2056",
            "c4 p2 r200-2037",
            "c1 p2 r201-2054"],
          ["c3 p3 r300-3026",
            "c4 p3 r301-3045",
            "c1 p3 r300-3024",
            "c2 p3 r301-3047"],
          ["c4 p4 r400-4024",
            "c1 p4 r401-4055",
            "c2 p4 r400-4027",
            "c3 p4 r401-4056"],
        ]
      },
      {   // group 2
        id: 'interleaved-sequential',
        items: [
          ["c1 p1 r100-1035",
            "c1 p2 r201-2054",
            "c1 p3 r300-3024",
            "c1 p4 r401-4055"],
          ["c2 p2 r200-2035",
            "c2 p3 r301-3047",
            "c2 p4 r400-4027",
            "c2 p1 r101-1044"],
          ["c3 p3 r300-3026",
            "c3 p4 r401-4056",
            "c3 p1 r100-1036",
            "c3 p2 r201-2056"],
          ["c4 p4 r400-4024",
            "c4 p1 r101-1047",
            "c4 p2 r200-2037",
            "c4 p3 r301-3045"],
        ]
      },
      { // group 3
        id: 'blocked-simultaneous',
        items: [
          ["c1-2-3-4 p1 r110-1135-121-1244-130-1336-141-1447"],
          ["c2-3-4-1 p2 r210-2135-221-2256-230-2337-241-2454"],
          ["c3-4-1-2 p3 r310-3126-321-3245-330-3324-341-3447"],
          ["c4-1-2-3 p4 r410-4124-421-4255-430-4327-441-4456"],
        ]
      },
      { // group 4
        id: 'interleaved-simultaneous',
        items: [
          ["c1 p1-2-3-4 r110-1135-221-2254-330-3324-441-4455"],
          ["c2 p2-3-4-1 r210-2135-321-3247-430-4327-141-1444"],
          ["c3 p3-4-1-2 r310-3126-421-4256-130-1336-241-2456"],
          ["c4 p4-1-2-3 r410-4124-121-1247-230-2337-341-3445"],
        ]
      },
      {
        id: 'test',
        items: [
          ["c1 p1 r100-1035",
            "c2 p1 r101-1044",
            "c3 p1 r100-1037",
            "c4 p1 r101-1045"],
        ]
      },
    ],
    textAreaMinLength: 10,
  },

  postTest: {
    showFeedback: false,
    repeatOnWrong: false,
    hideStimulusOnResponse: true,
    textAreaMinLength: 5,
    inputMinLength: 1,
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
        'postMC_1_draw3',
        'postMC_3_draw3',
        'postMC_6_draw3',
        'postMC_7_draw3',
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
        'postOpen_1',
        'postOpen_2',
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
      ],

    ],
  },


}