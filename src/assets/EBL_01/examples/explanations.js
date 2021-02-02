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
    html: {
      de: `Beschreibe die Lösung der Beispielaufgabe! <br/>Was fällt dir auf?`,
      en: `Describe the solution of the worked example. <br/>What do you notice?`
    }
  },
  {
    id: 1,
    html: {
      de: `Vergleiche Aufgabe 1 und 2, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Describe the solution of the first and the second worked examples. <br/>Compare them!`
    }
  },
  {
    id: 2,
    html: {
      de: `Vergleiche Aufgabe 1 und 3, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Describe the solution of the third worked example and compare it with the solutions for the first and second example.`
    }
  },
  {
    id: 3,
    html: {
      de: `Vergleiche Aufgabe 1 und 4, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Describe the solution of the fourth worked example and compare it to the other three.`
    }
  },
  {
    id: 4,
    html: {
      de: `Vergleiche alle vier Aufgaben, welche Unterschiede und Gemeinsamkeiten fallen dir auf?`,
      en: `Compare all four solutions of these worked examples.`
    }
  },
];

export const selfRadio = [
  {
    id: 0,
    html: {de: `Bitte anklicken:<br /> Die Anzahl möglicher Ergebnisse ...?`},
    options: [
      {label: `ändert sich.`, value: 'Ergebnisanzahl ändert sich.'},
      {label: `bleibt gleich.`, value: 'Ergebnisanzahl bleibt gleich.'},
    ]
  },
  {
    id: 1,
    html: {de: `Bitte anklicken:<br /> In diesem Beispiel ...`},
    options: [
      {label: `ist nur eine Ergebnisfolge günstig.`, value: 'eine günstig'},
      {label: `sind mehrere Ergebnisfolgen günstig.`, value: 'mehrere günstig'},
    ]
  },
  {
    id: 2, //principle 3 or 4
    html: {de: `Bitte anklicken:<br /> In diesem Beispiel <strong>wird mit 2 multipliziert</strong>, weil...`},
    options: [
      {label: `nur eine Ergebnisfolge günstig ist.`, value: 'mal 2, da nur eine Ergebnisfolge'},
      {label: `mehrere Ergebnisfolgen günstig sind.`, value: 'mal 2, da mehrere Ergebnisfolgen'},
    ]
  },
  {
    id: 3, //principle 1 or 2
    html: {de: `Bitte anklicken:<br /> In diesem Beispiel wird <strong>nicht mit 2 multipliziert</strong>, weil...`},
    options: [
      {label: `nur eine Ergebnisfolge günstig ist.`, value: 'nicht mal 2, da nur eine Ergebnisfolge'},
      {label: `mehrere Ergebnisfolgen günstig sind.`, value: 'nicht mal 2, da mehrere Ergebnisfolgen'},
    ]
  },
  {
    id: 4, //principle 1 or 3
    html: {de: `Bitte anklicken:<br /> In diesem Beispiel sind die Nenner der Brüche <strong>gleich</strong>, weil ...`},
    options: [
      {label: `die Ergebnisanzahl gleich bleibt.`, value: 'Nenner gleich, da Ergebnisanzahl gleich bleibt'},
      {label: `sich die Ergebnisanzahl ändert.`, value: 'Nenner gleich, da sich Ergebnisanzahl ändert'},
    ]
  },
  {
    id: 5, //principle 2 or 4
    html: {de: `Bitte anklicken:<br /> In diesem Beispiel sind die Nenner der Brüche <strong>verschieden</strong>, weil ...`},
    options: [
      {label: `die Ergebnisanzahl gleich bleibt.`, value: 'Nenner verschieden, da Ergebnisanzahl gleich bleibt'},
      {label: `sich die Ergebnisanzahl ändert.`, value: 'Nenner verschieden, da sich Ergebnisanzahl ändert'},
    ]
  },
];