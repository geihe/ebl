export const postNT = [
  {
    id: 'postNT2step_1',
    header: `Du und Dein Freund nehmen an einem zweitägigen Mountainbike-Kurs teil. An beiden Tagen bringt der Kursleiter jeweils 7 Fahrradhelme mit, die alle unterschiedliche Farben haben (grün, blau, orange, silber, braun, rot und gelb). Die Helme werden zufällig verteilt und am Ende des Tages an den Kursleiter zurückgegeben. An beiden Tagen erhältst Du zuerst und Dein Freund als Zweiter einen Helm.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass Du und Dein Freund am ersten Kurstag den blauen und den grünen Helm bekommen (es ist egal, wer welche Farbe bekommt)?`,
    validate:
      (answer) => ['2/42', '1/21', '2*1/42', '2*1/7*1/6', '2*(1/7)*(1/6)'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postNT2step_2',
    header: `Eine Chemikerin lagert in zwei verschiedenen Sicherheitsschränken Edelgase. In beiden Schränken befinden sich dieselben 4 Edelgase (Argon, Krypton, Xenon und Helium) in einzelnen Behältern. Ihr Kollege hat jedoch vergessen, die Behälter zu beschriften und alle Behälter sehen genau gleich aus. Für ein Experiment begibt sich die Chemikerin auf die Suche nach zwei verschiedenen Edelgasen und nimmt die Behälter einzeln aus den Schränken und prüft danach welches Gas enthalten ist.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst den Behälter mit dem Krypton herausgreift und dann den Behälter mit dem Xenon?`,
    validate:
      (answer) => ['1/12', '2*1/4*1/3', '2*(1/4*1/3)', '2*1/4*1/3'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postNT2step_3',
    header:`Die fünf Engelberger Skispringer Adam, Urs, Beat, Christoph und Daniel traten auf der alten Engelberger Schanze häufig gegeneinander an. Dabei kam jeder mit gleicher Häufigkeit auf den ersten, zweiten, dritten, vierten oder fünften Platz. Somit sind die fünf Springer also gleich gut, wer am weitesten springt hängt von zufälligen Faktoren ab (z. B. den Windverhältnissen). Jetzt wurde in Engelberg eine neue Skischanze errichtet und als erste dürfen Adam, Urs, Beat, Christoph und Daniel sie ausprobieren. Es gibt zwei Durchgänge.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass Beat in beiden Durchgängen am weitesten springt? `,
    validate:
      (answer) => ['1/5*1/5', '1/25'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postNT2step_4',
    header:`Du und eine Freundin kaufen zwei Dosen, die jeweils 3 unterschiedliche Weihnachtskekse enthalten: ein Zimtstern, eine Nussecke und ein Vanillekipferl. Ihr beide greift ohne hinzuschauen in die Dosen hinein und nehmt den zufällig ausgewählten Keks heraus. Du greifst immer zuerst in die Dose.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass Du beim Ziehen zunächst aus der einen Dose dann aus der anderen Dose sowohl einen Zimtstern als auch ein Vanillekipferl bekommst?`,
    validate:
      (answer) => ['2/9', '2*(1/3*1/3)', '2*1/9', '2*(1/9)'].includes(answer),
    responseType: 'input'
  },
]