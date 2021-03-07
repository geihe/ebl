/*
principle 0: Header
principle 1: order relevant, with replacement
principle 2: order relevant, without replacement
principle 3: order irrelevant, with replacement
principle 4: order irrelevant, without replacement
*/

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

const numberText = ['In dieser Aufgabe', 'In Aufgabe 1', 'In Aufgabe 2', 'In Aufgabe 3', 'In Aufgabe 4'];
const lowercaseFirstLetter = string => string[0].toLowerCase() + string.slice(1);
const selfRadioTemplate = [(nrText) => (
  {
    html: {de: `Die Anzahl möglicher Ergebnisse <strong>${lowercaseFirstLetter(nrText)}</strong>...?`},
    options: [
      {label: `ändert sich.`, value: 'Ergebnisanzahl ändert sich.'},
      {label: `bleibt gleich.`, value: 'Ergebnisanzahl bleibt gleich.'},
    ]
  }), (nrText) => (
  {
    html: {de: `<strong>${nrText}</strong> ...`},
    options: [
      {label: `ist nur eine Ergebnisfolge günstig.`, value: 'eine günstig'},
      {label: `sind mehrere Ergebnisfolgen günstig.`, value: 'mehrere günstig'},
    ]
  }), (nrText) => (
  {
    //principle 3 or 4
    html: {de: `<strong>${nrText}</strong> <strong>wird mit 2 multipliziert</strong>, weil...`},
    options: [
      {label: `nur eine Ergebnisfolge günstig ist.`, value: 'mal 2, da nur eine Ergebnisfolge'},
      {label: `mehrere Ergebnisfolgen günstig sind.`, value: 'mal 2, da mehrere Ergebnisfolgen'},
    ]
  }), (nrText) => (
  {
    //principle 1 or 2
    html: {de: `<strong>${nrText}</strong> wird <strong>nicht mit 2 multipliziert</strong>, weil...`},
    options: [
      {label: `nur eine Ergebnisfolge günstig ist.`, value: 'nicht mal 2, da nur eine Ergebnisfolge'},
      {label: `mehrere Ergebnisfolgen günstig sind.`, value: 'nicht mal 2, da mehrere Ergebnisfolgen'},
    ]
  }), (nrText) => (
  {
    //principle 1 or 3
    html: {de: `<strong>${nrText}</strong> sind die Nenner der Brüche <strong>gleich</strong>, weil ...`},
    options: [
      {label: `die Ergebnisanzahl gleich bleibt.`, value: 'Nenner gleich, da Ergebnisanzahl gleich bleibt'},
      {label: `sich die Ergebnisanzahl ändert.`, value: 'Nenner gleich, da sich Ergebnisanzahl ändert'},
    ]
  }), (nrText) => (
  {
    //principle 2 or 4
    html: {de: `<strong>${nrText}</strong> sind die Nenner der Brüche <strong>verschieden</strong>, weil ...`},
    options: [
      {label: `die Ergebnisanzahl gleich bleibt.`, value: 'Nenner verschieden, da Ergebnisanzahl gleich bleibt'},
      {label: `sich die Ergebnisanzahl ändert.`, value: 'Nenner verschieden, da sich Ergebnisanzahl ändert'},
    ]
  }),
];
export const selfRadioFunction = (n) => {

  const exampleNr = [Math.floor(n / 10)];
  const exampleNrs = [n < 10 ? 0 : exampleNr - 1]; //Nr. 1-4 auf index 0-3 herunterrechnen
  const id = n % 10;
  return {id: id, exampleNrs, ...selfRadioTemplate[id](numberText[exampleNr])}
};

// Zehnerstelle:   nrText = Text "In Aufgabe 1"...
// 0 - "In Dieser Aufgabe..."
// Einerstelle:    id der Frage

//  principe 1  -->  ids  0,1,3,4
//  principe 2  -->  ids  0,1,3,5
//  principe 3  -->  ids  0,1,2,4
//  principe 4  -->  ids  0,1,2,5


//  n     nrText   id    principles
//  0     0         0     1234
//  1     0         1     1234
//  2     0         2     34
//  3     0         3     12
//  4     0         4     13
//  5     0         5     24
// 10     1         0     1234
// 11     1         1     1234
// 12     1         2     34
// 13     1         3     12
// 14     1         4     13
// 15     1         5     24
// 20     2         0     1234
// 21     2         1     1234
// 22     2         2     34
// 23     2         3     12
// 24     2         4     13
// 25     2         5     24
// 30     3         0     1234
// 31     3         1     1234
// 32     3         2     34
// 33     3         3     12
// 34     3         4     13
// 35     3         5     24
// 40     4         0     1234
// 41     4         1     1234
// 42     4         2     34
// 43     4         3     12
// 44     4         4     13
// 45     4         5     24