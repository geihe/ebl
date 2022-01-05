// principle 0: Header
// principle 1: order relevant, with replacement
// principle 2: order relevant, without replacement
// principle 3: order irrelevant, with replacement
// principle 4: order irrelevant, without replacement

export const selfExplanations = [
  {
    id: 0,
    exampleNrs: [0],
    html: {
      de: `Beschreibe die Lösung der Beispielaufgabe! <br/>Was fällt dir auf?`,
      en: `Describe the solution of the worked example. <br/>What do you notice?`
    }
  },
  {
    id: 1,
    exampleNrs: [0, 1],
    html: {
      de: `Vergleiche Aufgabe 1 und 2, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Describe the solution of the first and the second worked examples. <br/>Compare them!`
    }
  },
  {
    id: 2,
    exampleNrs: [0, 2],
    html: {
      de: `Vergleiche Aufgabe 1 und 3, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Describe the solution of the third worked example and compare it with the solutions for the first and second example.`
    }
  },
  {
    id: 3,
    exampleNrs: [0, 3],
    html: {
      de: `Vergleiche Aufgabe 1 und 4, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Describe the solution of the fourth worked example and compare it to the other three.`
    }
  },
  {
    id: 4,
    exampleNrs: [0, 1, 2, 3],
    html: {
      de: `Vergleiche alle vier Aufgaben, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Compare all four solutions of these worked examples.`
    }
  },
];

const principles = new Map();
principles.set(1, {orderRelevant: true, withReplacement: true});
principles.set(2, {orderRelevant: false, withReplacement: false});
principles.set(3, {orderRelevant: false, withReplacement: true});
principles.set(4, {orderRelevant: false, withReplacement: false});

const numberText = [
  'In dieser Aufgabe',
  'In Aufgabe 1',
  'In Aufgabe 2',
  'In Aufgabe 3',
  'In Aufgabe 4'
];


const radioOptions = new Map();
radioOptions.set(0, {label: `ändert sich.`, value: 'Ergebnisanzahl ändert sich.'});
radioOptions.set(1, {label: `bleibt gleich.`, value: 'Ergebnisanzahl bleibt gleich.'});
radioOptions.set(2, {label: `ist nur eine Ereignisfolge günstig.`, value: 'eine günstig'});
radioOptions.set(3, {label: `sind mehrere Ereignisfolgen günstig.`, value: 'mehrere günstig'});
radioOptions.set(4, {label: `nur eine Ereignisfolge günstig ist.`, value: 'mal 2, da nur eine Ergebnisfolge'});
radioOptions.set(5, {label: `mehrere Ereignisfolgen günstig sind.`, value: 'mal 2, da mehrere Ergebnisfolgen'});
radioOptions.set(6, {
  label: `die Ergebnisanzahl gleich bleibt.`,
  value: 'Nenner gleich, da Ergebnisanzahl gleich bleibt'
});
radioOptions.set(7, {label: `sich die Ergebnisanzahl ändert.`, value: 'Nenner gleich, da sich Ergebnisanzahl ändert'});

const radioQuestions2 = {
  textFunction: (nrText) => ({de: `<strong>${nrText}</strong> <strong>wird mit 2 multipliziert</strong>, weil...`}),
  trueOption: [{principleFunction: p => !p.orderRelevant, option: 5}]
}

const lowercaseFirstLetter = string => string[0].toLowerCase() + string.slice(1);
const radioQuestions = new Map();
radioQuestions.set(0,
  {
    text: (nrText) => ({de: `Die Anzahl möglicher Ergebnisse <strong>${lowercaseFirstLetter(nrText)}</strong>...?`}),
    validQuestion: principle => true,
    answers: [p => 0, p => 1],
    validAnswers: [p => p.withReplacement ? 1 : 0],
  });

radioQuestions.set(1,
  {
    text: (nrText) => ({de: `<strong>${nrText}</strong> ...`}),
    validQuestion: principle => true,
    answers: [p => 2, p => 3],
    validAnswers: [p => p.orderRelevant ? 2 : 3],
  });

radioQuestions.set(2,
  {
    text: (nrText) => ({de: `<strong>${nrText}</strong> <strong>wird mit 2 multipliziert</strong>, weil...`}),
    validQuestion: principle => !principle.orderRelevant,
    answers: [p => 4, p => 5, p => 6, p => 7],
    validAnswers: [p => 5],
  });

radioQuestions.set(3,
  {
    text: (nrText) => ({de: `<strong>${nrText}</strong> wird <strong>nicht mit 2 multipliziert</strong>, weil...`}),
    validQuestion: principle => principle.orderRelevant,
    answers: [p => 4, p => 5, p => 6, p => 7],
    validAnswers: [p => 4],
  });

radioQuestions.set(4,
  {
    text: (nrText) => ({de: `<strong>${nrText}</strong> sind die Nenner der Brüche <strong>gleich</strong>, weil ...`}),
    validQuestion: principle => principle.withReplacement,
    answers: [p => 4, p => 5, p => 6, p => 7],
    validAnswers: [p => 6],
  });

radioQuestions.set(5,
  {
    text: (nrText) => ({de: `<strong>${nrText}</strong> sind die Nenner der Brüche <strong>verschieden</strong>, weil ...`}),
    validQuestion: principle => !principle.withReplacement,
    answers: [p => 4, p => 5, p => 6, p => 7],
    validAnswers: [p => 7],
  });


const radioCombine = [
  {
    principle: 1, //order relevant, with replacement
    html: [ //Optionen zu Frage 0 bis 5
      {trueOption: 1, falseOptions: [0]}, //Frage 0 Option 1 korrekt, Option 0 falsch etc.
      {trueOption: 2, falseOptions: [3]},
      {trueOption: undefined, falseOptions: []},
      {trueOption: 4, falseOptions: [5, 6, 7]},
      {trueOption: 6, falseOptions: [4, 5, 7]},
      {trueOption: undefined, falseOptions: []},
    ]
  },
  {
    principle: 2, //order relevant, without replacement
    html: [ //Optionen zu Frage 0 bis 5
      {trueOption: 0, falseOptions: [1]}, //Frage 0 Option 1 korrekt, Option 0 falsch etc.
      {trueOption: 2, falseOptions: [3]},
      {trueOption: undefined, falseOptions: []},
      {trueOption: 4, falseOptions: [5, 6, 7]},
      {trueOption: undefined, falseOptions: []},
      {trueOption: 7, falseOptions: [4, 5, 6]},
    ]
  },
  {
    principle: 3, //order irrelevant, with replacement
    html: [ //Optionen zu Frage 0 bis 5
      {trueOption: 1, falseOptions: [0]}, //Frage 0 Option 1 korrekt, Option 0 falsch etc.
      {trueOption: 3, falseOptions: [2]},
      {trueOption: 5, falseOptions: [4, 6, 7]},
      {trueOption: undefined, falseOptions: []},
      {trueOption: 6, falseOptions: [4, 5, 7]},
      {trueOption: undefined, falseOptions: []},
    ]
  },
  {
    principle: 4, //order irrelevant, without replacement
    html: [ //Optionen zu Frage 0 bis 5
      {trueOption: 0, falseOptions: [1]}, //Frage 0 Option 1 korrekt, Option 0 falsch etc.
      {trueOption: 3, falseOptions: [2]},
      {trueOption: 5, falseOptions: [4, 6, 7]},
      {trueOption: undefined, falseOptions: []},
      {trueOption: undefined, falseOptions: []},
      {trueOption: 7, falseOptions: [4, 5, 6]},
    ]
  },
]


// 1. Ziffer: Prinzip

// 2. Ziffer: Nummer der Aufgabe (0 bei sequential)

// 3. Ziffer: Welche der 6 Fragen?
//    0: Anzahl gleich/ändert sich
//    1: Anzahl eine/mehrere Ergebnisfolgen
//    2: mal 2, weil eine/mehrere Ereignisfolgen --> zu p3, p4
//    3: nicht mal 2, weil eine/mehrere Ereignisfolgen --> zu p1, p2
//    4: Nenner gleich, weil sich Ergebnisanzahl ändert/nicht ändert --> zu p1, p3
//    5: Nenner verschieden, weil sich Ergebnisanzahl ändert/nicht ändert --> zu p2, p4

// 4. Ziffer (optional): Distraktor-Nummer
//    0: Ergebnisanzahl ändert sich.
//    1: Ergebnisanzahl bleibt gleich.
//    2: eine günstig
//    3: mehrere günstig
//    4: mal 2, da nur eine Ergebnisfolge
//    5: mal 2, da mehrere Ergebnisfolgen
//    6: Nenner gleich, da Ergebnisanzahl gleich bleibt
//    7: Nenner gleich, da sich Ergebnisanzahl ändert

export const selfRadioFunction = (n) => {
  const digits = n.toString().split('');
  const principle = +digits.shift();
  const exampleNr = +digits.shift();
  const questionNr = +digits.shift();
  const distractor = +digits.shift();

  const exampleText = numberText[exampleNr];
  const htmlFunction = radioHtml[questionNr];
  const htmlObject = htmlFunction(exampleText);

  const combineData = radioCombine[principle - 1];
  if (combineData.principle !== principle) {
    console.warn('Prinzipien inkonsistent');
  }
  const options = combineData.html[questionNr];
  const trueOptionIndex = options.trueOption;
  const trueOption = {valid: true, ...radioOption[trueOptionIndex]};
  const distractorArray = options.falseOptions;
  const distractorOptionIndex = isNaN(distractor) ?
    distractorArray[Math.floor(Math.random() * distractorArray.length)] :
    distractor;
  const distractorOption = {valid: false, ...radioOption[distractorOptionIndex]};

  return ({
    id: n,
    exampleNrs: [exampleNr - 1],
    html: htmlObject,
    options: Math.random() < 0.5 ? [trueOption, distractorOption] : [distractorOption, trueOption]
  });
};
