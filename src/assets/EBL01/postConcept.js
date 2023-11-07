export const postConcept = [
  {
    id: 'postConcept_1',
    header: `Für die Verteilung der Rollen für eine Schultheateraufführung wird eine schwarze Box mit Zetteln gefüllt, auf denen die Rollen beschrieben sind. Die Hauptrollen sind die der Prinzessin und des Prinzen. Nacheinander zieht jedes Kind einen Zettel und behält diesen. Bis jetzt hat die Hälfte der Kinder einen Zettel gezogen, aber die Zettel mit den Hauptrollen sind noch in der Box. `,
    question: `Was kannst du über die Chance des nächsten Kindes sagen, eine der Hauptrollen zu ziehen?`,
    options: [
      {value: '1',
      label: `1. Die Chance dieses Kindes, eine Hauptrolle zu ziehen, ist größer als die Chance des ersten Kindes war, eine Hauptrolle zu ziehen.`},
      {value: '2',
      label: `2. Die Chance dieses Kindes, eine Hauptrolle zu ziehen, ist kleiner als die Chance des ersten Kindes war, eine Hauptrolle zu ziehen. `},
      {value: '3',
      label: `3. Die Chance dieses Kindes, eine Hauptrolle zu ziehen, ist genauso groß, wie die Chance des ersten Kindes war, eine Hauptrolle zu ziehen.`},
      {value: '4',
      label: `4. Es gibt eine Beziehung zwischen der Chance dieses Kindes, eine Hauptrolle zu ziehen und der Chance des ersten Kindes, eine Hauptrolle zu ziehen, aber das hängt davon ab, wie viele verschiedene Rollen es gibt.`},
    ],
    validate:
      (answer) => [1].includes(+answer.value),
    responseType: 'radio'
  },
  {
    id: 'postConcept_2',
    header: `Du schaust bei einem Fußballturnier deiner Schule zu. `,
    question: `Macht es einen Unterschied, ob du die zwei Teams im Finale vorhersagen sollst oder ob du vorhersagen sollst, welches Team Erster und welches Zweiter wird?`,
    options: [
      {value: '1',
      label: `1. Ja, die Chance, den Ersten und den Zweiten korrekt vorherzusagen, ist kleiner als die Chance die zwei Teams im Finale korrekt vorherzusagen. `},
      {value: '2',
      label: `2. Ja, die Chance, die zwei Teams im Finale korrekt vorherzusagen, ist kleiner als die Chance den Ersten und den Zweiten korrekt vorherzusagen. `},
      {value: '3',
      label: `3. Nein, in beiden Fällen muss man zwei Teams vorhersagen, und das ist gleich schwierig. `},
      {value: '4',
      label: `4. Das hängt von der Anzahl der Teams ab.`},
    ],
    validate:
      (answer) => [1].includes(+answer.value),
    responseType: 'radio'
  },
  {
    id: 'postConcept_3',
    header: `Du spielst ein Spiel, bei dem du zweimal mit einem Würfel würfeln musst. Du bist an der Reihe und gewinnst, wenn du eine Drei und eine Vier würfelst. `,
    question: `Ist es wichtig, ob diese zwei Zahlen in dieser bestimmten Reihenfolge gewürfelt werden sollen?`,
    options: [
      {value: '1',
      label: `1. Ja, wenn du die Zahlen in einer bestimmten Reihenfolge würfeln sollst, ist deine Chance größer, als wenn die Reihenfolge keine Rolle spielt.`},
      {value: '2',
      label: `2. Ja, wenn du die Zahlen in einer bestimmten Reihenfolge würfeln sollst, ist deine Chance kleiner, als wenn die Reihenfolge keine Rolle spielt.`},
      {value: '3',
      label: `3. Nein, beide Ereignisse haben die gleiche Chance einzutreten.`},
      {value: '4',
      label: `4. Das hängt von der Anzahl der Mitspielenden ab.`},
    ],
    validate:
      (answer) => [2].includes(+answer.value),
    responseType: 'radio'
  },
  {
    id: 'postConcept_4',
    header: `Du hast eine undurchsichtige Urne mit Murmeln in verschiedenen Farben. `,
    question: `Wie verändert sich die Wahrscheinlichkeit, eine Murmel in einer bestimmten Farbe zu ziehen, von einer Ziehung zur nächsten, wenn jede Murmel zurückgelegt wird, nachdem man sie gezogen hat?`,
    options: [
      {value: '1',
      label: `1. Die Wahrscheinlichkeit, eine bestimmte Murmel zu ziehen, sinkt von einer Ziehung zur nächsten.`},
      {value: '2',
      label: `2. Die Wahrscheinlichkeit, eine bestimmte Murmel zu ziehen, steigt von einer Ziehung zur nächsten.`},
      {value: '3',
      label: `3. Die Wahrscheinlichkeit, eine bestimmte Murmel zu ziehen, bleibt von einer Ziehung zur nächsten gleich.`},
      {value: '4',
      label: `4. Das hängt davon ab, ob die Reihenfolge wichtig ist oder nicht.`},
    ],
    validate:
      (answer) => [3].includes(+answer.value),
    responseType: 'radio'
  },
]