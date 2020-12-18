
export const pre1step = [
  {
    id: 'pre1step_1',
    header: 'In deinem Kleiderschrank befinden sich 5 Pullover, einer davon ist dein Lieblingspullover. Morgens, als es noch dunkel ist, greifst du einen Pullover aus dem Kleiderschrank heraus.',
    question: 'Wie groß ist die Wahrscheinlichkeit, dass du deinen Lieblingspullover erwischst? ',
    validate:
      (answer) => answer === '1/5',
    responseType: 'input'
  },
  {
    id: 'pre1step_2',
    header: 'Du wirfst einen Würfel (mit den Zahlen 1 bis 6). ',
    question: 'Wie groß ist die Wahrscheinlichkeit, dass du entweder eine 5 oder eine 6 würfelst?',
    validate:
      (answer) => ['2/6', '1/3'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'pre1step_3',
    header: 'In der Schule werden vier verschiedene Sportkurse angeboten. Die Sportkurse werden verlost. Drei von den Sportkursen magst du überhaupt nicht. ',
    question: 'Wie wahrscheinlich ist es, dass du den Sportkurs zugelost bekommst, der dir gefällt?',
    validate:
      (answer) => answer === '1/4',
    responseType: 'input'
  },
  {
    id: 'pre1step_4',
    header: 'Bei einem Konzert treten 9 Bands auf, darunter ist auch deine Lieblingsband. Leider kommst du zu spät und verpasst die erste Band. ',
    question: 'Wie wahrscheinlich ist es, dass als erste Band <strong>nicht</strong> deine Lieblingsband gespielt hat?',
    validate:
      (answer) => answer === '8/9',
    responseType: 'input'
  }
]