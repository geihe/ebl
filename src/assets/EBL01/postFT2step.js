export const postFT = [
  {
    id: 'postFT2step_1',
    header: `Die vier Freunde Henrik, Michael, Peter und Roland interessieren sich sehr für Musik. Jede Woche bringt ihr Musiklehrer ihnen vier verschiedene CDs mit, eine CD mit Pop, eine mit Rock, eine mit Techno und eine mit Klassik und verteilt Sie zufällig unter ihnen. Diese Woche kommen Peter und Michael zu spät. So gibt der Lehrer zuerst Henrik und dann Roland eine CD. `,
    question: `Wie wahrscheinlich ist es, dass Henrik die Klassik- und Roland die Techno-CD erhält?`,
    validate:
      (answer) => ['1/12', '1/4*1/3'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postFT2step_2',
    header: `In einer Jugendzeitschrift siehst du in der Rubrik „Zu verkaufen“ eine Anzeige für ein Ticket für ein spektakuläres Konzert deiner Lieblingsband. Leider kann man die letzten zwei Ziffern der Telefonnummer, die dazu angegeben ist, nicht mehr lesen. Du möchtest das Ticket unbedingt haben und entscheidest dich, die zwei Ziffern (die Ziffern 0-9, also zehn verschiedene Ziffern) zufällig zu wählen`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass du gleich beim ersten Versuch die richtigen Ziffern wählst?`,
    validate:
      (answer) => ['1/100', '1/10*1/10', '(1/10)*(1/10)'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postFT2step_3',
    header:`In deinem Lateinkurs sind insgesamt sechs Schülerinnen und Schüler. Davon werden in jeder Stunde zwei durch die Lehrerin ausgelost, die ihre Hausaufgaben vorlesen müssen. Du hattest die Aufgaben für heute vergessen und sie deshalb von einer Freundin abgeschrieben. `,
    question:`Wie wahrscheinlich ist es, dass ausgerechnet ihr beide ausgelost werdet?`,
    validate:
      (answer) => ['2/30', '1/15', '2/6*1/5', '(2/6)*(1/5)'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postFT2step_4',
    header:`Du drehst zweimal an einem Glücksrad, auf dem es neun gleich große Abschnitte mit verschiedenen Bildern gibt, unter anderem ein Kleeblatt und ein Schwein. Du gewinnst, wenn du einmal den Abschnitt mit dem Kleeblatt und das andere Mal den Abschnitt mit dem Schwein triffst. `,
    question:`Wie groß ist die Wahrscheinlichkeit, dass du gewinnst?`,
    validate:
      (answer) => ['2/81', '2/9*1/9', '(2/9)*(1/9)'].includes(answer),
    responseType: 'input'
  },
]