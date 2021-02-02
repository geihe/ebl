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
    html: {de: `Bitte anklicken: Die Anzahl möglicher Ergebnisse ...?`},
    options: [
      {label: `ändert sich.`, value: 'Ergebnisanzahl ändert sich.'},
      {label: `bleibt gleich.`, value: 'Ergebnisanzahl bleibt gleich.'},
    ]
  },
  {
    id: 1,
    html: {de: `Bitte anklicken: In diesem Beispiel ...`},
    options: [
      {label: `ist nur eine Ergebnisfolge günstig.`, value: 'eine günstig'},
      {label: `sind mehrere Ergebnisfolgen günstig.`, value: 'mehrere günstig'},
    ]
  },
  {
    id: 2,
    html: {de: `Bitte anklicken: In diesem Beispiel ...`},
    options: [
      {label: `ist nur eine Ergebnisfolge günstig.`, value: 'eine günstig'},
      {label: `sind mehrere Ergebnisfolgen günstig.`, value: 'mehrere günstig'},
    ]
  },
  {
    id: 3,
    html: {de: `Bitte anklicken: In diesem Beispiel ...`},
    options: [
      {label: `ist nur eine Ergebnisfolge günstig.`, value: 'eine günstig'},
      {label: `sind mehrere Ergebnisfolgen günstig.`, value: 'mehrere günstig'},
    ]
  },
];