export const postMC = [
  {
    id: 'postMC_1',
    header: `Du und Dein Freund nehmen an einem zweitägigen Mountainbike-Kurs teil. An beiden Tagen bringt der Kursleiter jeweils 5 Fahrradhelme mit, die alle unterschiedliche Farben haben (orange, silber, braun, rot und gelb). Die Helme werden zufällig verteilt und am Ende des Tages an den Kursleiter zurückgegeben. An beiden Tagen erhältst Du zuerst und Dein Freund als Zweiter einen Helm.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass Du am ersten Kurstag den roten Helm bekommst und Dein Freund den gelben?`,
    validate:
      (answer) => ['1/20', '1/5*1/4', '1/5*1/4=1/20'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postMC_3',
    header: `Eine Chemikerin lagert in zwei verschiedenen Sicherheitsschränken Edelgase. In beiden Schränken befinden sich dieselben 3 Edelgase (Argon, Krypton, Xenon) in einzelnen Behältern. Ihr Kollege hat jedoch vergessen, die Behälter zu beschriften und alle Behälter sehen genau gleich aus. Für ein Experiment begibt sich die Chemikerin auf die Suche nach zwei verschiedenen Edelgasen und nimmt die Behälter einzeln aus den Schränken und prüft danach welches Gas enthalten ist.`,
    question: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst die Behälter mit den Edelgasen Helium und Argon herausgreift (es ist egal, welches Behältnis sie als Erstes entdeckt)?`,
    validate:
      (answer) => ['2/6', '1/3', '2*1/3*1/2', '2*(1/3*1/2)', '2*(1/3*1/2)=2/6'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postMC_6',
    header:`Die vier Engelberger Skispringer Adam, Beat, Christoph und Daniel traten auf der alten Engelberger Schanze häufig gegeneinander an. Dabei kam jeder mit gleicher Häufigkeit auf den ersten, zweiten, dritten oder vierten Platz. Somit sind die vier Springer also gleich gut, wer am weitesten springt hängt von zufälligen Faktoren ab (z. B. den Windverhältnissen). Jetzt wurde in Engelberg eine neue Skischanze errichtet und als erste dürfen Adam, Beat, Christoph und Daniel sie ausprobieren. Es gibt zwei Durchgänge.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass Beat in den beiden Durchgängen einmal einen ersten und einmal einen zweiten Platz belegt?`,
    validate:
      (answer) => ['2/16', '1/8', '2*1/4*1/4', '2*(1/4*1/4)', '2*(1/4*1/4)=2/16'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postMC_7',
    header:`Du und eine Freundin kaufen zwei Dosen, die jeweils 6 unterschiedliche Weihnachtskekse enthalten: ein Zimtstern, eine Nussecke, ein Amarettoplätzchen, ein Vanillekipferl, ein Lebkuchenherz und ein Spekulatius. Ihr beide greift ohne hinzuschauen in die Dosen hinein und nehmt den zufällig ausgewählten Keks heraus. Du greifst immer zuerst in die Dose.`,
    question:`Wie groß ist die Wahrscheinlichkeit, dass Du aus der ersten Dose das Lebkuchenherz und aus der zweiten Dose die Nussecke?`,
    validate:
      (answer) => ['1/36', '1/6*1/6=1/36'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'postOpen_1',
    header:` 
          <p>Bitte stelle Dir folgendes Szenario möglichst anschaulich vor:</p>
 <strong><p>In einer Vase befinden sich alle 26 Buchstaben des Alphabets.
 Du ziehst nacheinander und zufällig fünf Buchstaben aus der Vase. 
 Wenn Du einen Buchstaben gezogen hast, legst Du ihn vor Dich auf den Tisch. </p>
 <p>Am Ende jedes Durchgangs hast Du ein „Wort“ aus fünf Buchstaben vor Dir liegen (z.B. GFAVB oder FUMEQ), das Du notierst. 
 <p>Die Buchstaben werden danach alle wieder in die Vase geschüttet und für den nächsten Durchgang neu gemischt. </p>
   Auf diese Weise ziehst Du insgesamt zehn „Wörter“.</p></strong>

        <p>Beantworte nun bitte die beiden folgenden Fragen zu Auswirkungen von hypothetischen Veränderungen an diesem Szenario.</p>
`,
    question:'1. Welche Auswirkungen hätte es auf die Wahrscheinlichkeit, in einem der zehn Durchgänge ein bestimmtes Wort ziehen (z.B. BOHNE), \n' +
      '        wenn Du jeden gezogenen Buchstaben zwar notieren, dann aber sofort wieder in die Vase zurücklegen würdest? \n' +
      '        Bitte erkläre (eine Rechnung ist nicht notwendig).',
    validate:
      (answer) => true,
    responseType: 'textArea'
  },
  {
    id: 'postOpen_2',
    header:`       
          <p>Bitte stelle Dir folgendes Szenario möglichst anschaulich vor:</p>
 <strong><p>In einer Vase befinden sich alle 26 Buchstaben des Alphabets.
 Du ziehst nacheinander und zufällig fünf Buchstaben aus der Vase. 
 Wenn Du einen Buchstaben gezogen hast, legst Du ihn vor Dich auf den Tisch. </p>
 <p>Am Ende jedes Durchgangs hast Du ein „Wort“ aus fünf Buchstaben vor Dir liegen (z.B. GFAVB oder FUMEQ), das Du notierst. 
 <p>Die Buchstaben werden danach alle wieder in die Vase geschüttet und für den nächsten Durchgang neu gemischt. </p>
   Auf diese Weise ziehst Du insgesamt zehn „Wörter“.</p></strong>
        <p>Beantworte dazu nun bitte die zweite Frage:</p>
`,
    question:'2.	Die Wahrscheinlichkeit, dass Du in einem der zehn Durchgänge ein bestimmtes Wort ziehst (z.B. BOHNE), hängt davon ab, ob Du die Buchstaben bereits in der richtigen Reihenfolge ziehen musst oder ob Du diese nachträglich noch umsortieren darfst. ' +
      'Bitte erkläre diese Beziehung (eine Rechnung ist nicht notwendig).',
    validate:
      (answer) => true,
    responseType: 'textArea'
  },
]