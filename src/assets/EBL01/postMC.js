import {evalValidator} from "../../helper/evalValidate";

export const postMC = [
  {
    id: 'postMC_1',
    header: `Du und dein Freund nehmen an einem zweitägigen Mountainbike-Kurs teil. An beiden Tagen bringt der Kursleiter jeweils 5 Fahrradhelme mit, die alle unterschiedliche Farben haben (orange, silber, braun, rot und gelb). Die Helme werden zufällig verteilt und am Ende des Tages an den Kursleiter zurückgegeben. An beiden Tagen erhältst du zuerst und dein Freund als Zweiter einen Helm.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass du am ersten Kurstag den roten Helm bekommst und dein Freund den gelben?`,
    validate: evalValidator(1/20),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postMC_3',
    header: `Eine Chemikerin lagert in zwei verschiedenen Sicherheitsschränken Edelgase. In beiden Schränken befinden sich dieselben 3 Edelgase (Argon, Helium, Xenon) in einzelnen Behältern. Ihr Kollege hat jedoch vergessen, die Behälter zu beschriften und alle Behälter sehen genau gleich aus. Für ein Experiment begibt sich die Chemikerin auf die Suche nach zwei verschiedenen Edelgasen und nimmt die Behälter einzeln aus den Schränken und prüft danach, welches Gas enthalten ist.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst die Behälter mit den Edelgasen Helium und Argon herausgreift (es ist egal, welches Behältnis sie als Erstes entdeckt)?`,
    validate: evalValidator(2/6),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postMC_6',
    header:`Die vier Engelberger Skispringer Adam, Beat, Christoph und Daniel traten auf der alten Engelberger Schanze häufig gegeneinander an. Dabei kam jeder mit gleicher Häufigkeit auf den ersten, zweiten, dritten oder vierten Platz. Somit sind die vier Springer also gleich gut, wer am weitesten springt hängt von zufälligen Faktoren ab (z. B. den Windverhältnissen). Jetzt wurde in Engelberg eine neue Skischanze errichtet und als Erste dürfen Adam, Beat, Christoph und Daniel sie ausprobieren. Es gibt zwei Durchgänge.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass Beat in den beiden Durchgängen einmal einen ersten und einmal einen zweiten Platz belegt?`,
    validate: evalValidator(2/16),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postMC_7',
    header:`Du und eine Freundin kaufen zwei Dosen, die jeweils 6 unterschiedliche Weihnachtskekse enthalten: einen Zimtstern, eine Nussecke, ein Amarettoplätzchen, ein Vanillekipferl, ein Lebkuchenherz und ein Spekulatius. Ihr beide greift ohne hinzuschauen in die Dosen hinein und nehmt den zufällig ausgewählten Keks heraus. Du greifst immer zuerst in die Dose.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass du aus der ersten Dose das Lebkuchenherz und aus der zweiten Dose die Nussecke greifst?`,
    validate: evalValidator(1/36),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postMC_1_draw3',
    header: `Du und deine Freunde Alice und Ben nehmen an einem <strong>dreitägigen</strong> Mountainbike-Kurs teil. An allen drei Tagen bringt der Kursleiter jeweils 5 Fahrradhelme mit, die alle unterschiedliche Farben haben (orange, silber, braun, rot und gelb). Die Helme werden zufällig verteilt und am Ende des Tages an den Kursleiter zurückgegeben. An allen Tagen erhältst du zuerst, deine Freundin Alice als Zweite und dein Freund Ben als Dritter einen Helm.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass <strong>du am ersten Kurstag den roten Helm bekommst, Alice den gelben und Ben den braunen?</strong>`,
    validate: evalValidator(1/60),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postMC_3_draw3',
    header: `Eine Chemikerin lagert in zwei verschiedenen Sicherheitsschränken Edelgase. In beiden Schränken befinden sich dieselben 4 Edelgase (Argon, Neon, Helium, Xenon) in einzelnen Behältern. Ihr Kollege hat jedoch vergessen, die Behälter zu beschriften und alle Behälter sehen genau gleich aus. Für ein Experiment begibt sich die Chemikerin auf die Suche nach <strong>drei</strong> verschiedenen Edelgasen und nimmt die Behälter einzeln aus den Schränken und prüft danach, welches Gas enthalten ist.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst die Behälter mit den Edelgasen Helium, Neon und Argon herausgreift (egal in welcher Reihenfolge)?`,
    validate: evalValidator(1/4),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postMC_6_draw3',
    header:`Die vier Engelberger Skispringer Adam, Beat, Christoph und Daniel traten auf der alten Engelberger Schanze häufig gegeneinander an. Dabei kam jeder mit gleicher Häufigkeit auf den ersten, zweiten, dritten oder vierten Platz. Somit sind die vier Springer also gleich gut, wer am weitesten springt hängt von zufälligen Faktoren ab (z. B. den Windverhältnissen). Jetzt wurde in Engelberg eine neue Skischanze errichtet und als Erste dürfen Adam, Beat, Christoph und Daniel sie ausprobieren. Es gibt drei Durchgänge.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass Beat in den <strong>drei</strong> Durchgängen einmal einen ersten, einmal einen zweiten und einmal einen dritten Platz belegt?`,
    validate: evalValidator(6/64),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postMC_7_draw3',
    header:`Du und eine Freundin kaufen drei Dosen, die jeweils 5 unterschiedliche Weihnachtskekse enthalten: einen Zimtstern, eine Nussecke, ein Amarettoplätzchen, ein Lebkuchenherz und ein Spekulatius. Ihr beide greift ohne hinzuschauen in die Dosen hinein und nehmt den zufällig ausgewählten Keks heraus. Du greifst immer zuerst in die Dose.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass du <strong>aus allen drei Dosen</strong> das Amarettoplätzchen greifst?`,
    validate: evalValidator(1/125),
    responseType: 'input',
    effort: 2
  },
  {
    id: 'postOpen_1',
    header:` 
          <p>Bitte stelle dir folgendes Szenario möglichst anschaulich vor:</p>
 <strong><p>In einer Vase befinden sich alle 26 Buchstaben des Alphabets.
 Du ziehst nacheinander und zufällig fünf Buchstaben aus der Vase. 
 Wenn du einen Buchstaben gezogen hast, legst du ihn vor dich auf den Tisch. </p>
 <p>Am Ende jedes Durchgangs hast du ein „Wort“ aus fünf Buchstaben vor dir liegen (z.B. GFAVB oder FUMEQ), das du notierst. 
 <p>Die Buchstaben werden danach alle wieder in die Vase geschüttet und für den nächsten Durchgang neu gemischt. </p>
   Auf diese Weise ziehst du insgesamt zehn „Wörter“.</p></strong>

        <p>Beantworte nun bitte <strong>die beiden folgenden Fragen</strong> zu Auswirkungen von hypothetischen Veränderungen an diesem Szenario.</p>
`,
    question:'1. Welche Auswirkungen hätte es auf die Wahrscheinlichkeit, in einem der zehn Durchgänge ein bestimmtes Wort zu ziehen (z.B. BOHNE), \n' +
      '        wenn du jeden gezogenen Buchstaben zwar notieren, dann aber sofort wieder in die Vase zurücklegen würdest? \n' +
      '        Bitte erkläre (eine Rechnung ist nicht notwendig).',
    responseType: 'textArea'
  },
  {
    id: 'postOpen_2',
    header:`       
          <p>Bitte stelle dir folgendes Szenario möglichst anschaulich vor:</p>
 <strong><p>In einer Vase befinden sich alle 26 Buchstaben des Alphabets.
 Du ziehst nacheinander und zufällig fünf Buchstaben aus der Vase. 
 Wenn du einen Buchstaben gezogen hast, legst du ihn vor Dich auf den Tisch. </p>
 <p>Am Ende jedes Durchgangs hast du ein „Wort“ aus fünf Buchstaben vor dir liegen (z.B. GFAVB oder FUMEQ), das du notierst. 
 <p>Die Buchstaben werden danach alle wieder in die Vase geschüttet und für den nächsten Durchgang neu gemischt. </p>
   Auf diese Weise ziehst du insgesamt zehn „Wörter“.</p></strong>
        <p>Beantworte dazu nun bitte <strong>die zweite Frage</strong>:</p>
`,
    question:'2.	Die Wahrscheinlichkeit, dass du in einem der zehn Durchgänge ein bestimmtes Wort ziehst (z.B. BOHNE), hängt davon ab, ob du die Buchstaben bereits in der richtigen Reihenfolge ziehen musst oder ob du diese nachträglich noch umsortieren darfst. ' +
      'Bitte erkläre diese Beziehung (eine Rechnung ist nicht notwendig).',
    responseType: 'textArea'
  },
]