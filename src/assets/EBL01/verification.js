import React from "react";
import {MathComponent} from "mathjax-react";

export const verification = [
  {
    context: 1,
    header: {
      de: `Du und dein Freund nehmen an einem zweitägigen Mountainbike-Kurs teil. An beiden Tagen bringt der Kursleiter jeweils 6 Fahrradhelme mit, die alle unterschiedliche Farben haben (grün, orange, silber, braun, rot und gelb). Die Helme werden zufällig verteilt und am Ende des Tages an den Kursleiter zurückgegeben. An beiden Tagen erhältst Du zuerst und Dein Freund als Zweiter einen Helm.`,
      en: `You and your friend are taking part in a two-day mountain bike course. On both days, the instructor will bring 6 bike helmets, each with different colors (green, orange, silver, brown, red and yellow). The helmets are distributed randomly an returned to the instructor at the end of the day. On both days you will receive a helmet first and your friend second.`,
    },
    questions: [
      {
        id: 'pz-rvt1',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass du am ersten Kurstag den grünen Helm bekommst und dein
            Freund den blauen?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Eine günstige Ereignisfolge/Anzahl möglicher Ergebnisse ändert sich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
      {
        id: 'pz-rvt2',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass du am ersten Tag den roten Helm und am zweiten Tag den
            braunen Helm bekommst?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Eine günstige Ereignisfolge/Anzahl möglicher Ergebnisse ändert sich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
      {
        id: 'lw-rvt1',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass du und dein Freund am ersten Kurstag den roten und den
            grünen Helm bekommen (es ist egal, wer welche Farbe bekommt)?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden: </p>,
            <MathComponent tex={String.raw`2 \cdot ({1 \over 6} \cdot {1 \over 5})`} display={true}/>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
      {
        id: 'lw-rvt2',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass du im Lauf des zweitägigen Kurses sowohl einen roten als
            auch einen grünen Helm bekommst?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden:
            <MathComponent tex={String.raw`{1 \over 6} \cdot {1 \over 5}`} display={true}/>
          </p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
    ]
  },

  {
    context: 2,
    header: {
      de: `Eine Chemikerin lagert in zwei verschiedenen Sicherheitsschränken Edelgase. In beiden Schränken befinden sich dieselben 5 Edelgase (Argon, Krypton, Xenon, Helium und Neon) in einzelnen Behältern. Ihr Kollege hat jedoch vergessen, die Behälter zu beschriften und alle Behälter sehen genau gleich aus. Für ein Experiment begibt sich die Chemikerin auf die Suche nach zwei verschiedenen Edelgasen und nimmt die Behälter einzeln aus den Schränken und prüft danach welches Gas enthalten ist.`,
    },
    questions: [
      {
        id: 'pz-rvt3',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst den Behälter mit
            dem Argon herausgreift und dann den Behälter mit dem Krypton?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Mehrere günstige Ereignisfolgen/Anzahl möglicher Ergebnisse bleibt
            gleich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
      {
        id: 'pz-rvt4',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in dem einen Schrank zuerst den Behälter
            mit dem Argon herausgreift und dann in dem zweiten Schrank den Behälter mit dem Krypton?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Eine günstige Ereignisfolge/Anzahl möglicher Ergebnisse bleibt
            gleich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
      {
        id: 'lw-rvt3',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst die Behälter mit
            den Edelgasen Xenon und Argon herausgreift (es ist egal, welches Behältnis sie als Erstes entdeckt)?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden:
            <MathComponent tex={String.raw`2 \cdot ({1 \over 5} \cdot {1 \over 5})`} display={true}/>
          </p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
      {
        id: 'lw-rvt4',
        question: [
          <p>Aufgabe: Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin aus einem der Schränke Krypton und aus
            dem anderen Neon herausgreift?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden:
            <MathComponent tex={String.raw`2 \cdot ({1 \over 5} \cdot {1 \over 5})`} display={true}/>
          </p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
    ]
  },

  {
    context: 3,
    header: {
      de: `Die drei Engelberger Skispringer Adam, Urs und Beat traten auf der alten Engelberger Schanze häufig gegeneinander an. Dabei kam jeder mit gleicher Häufigkeit auf den ersten, zweiten, dritten oder vierten Platz. Somit sind die drei Springer also gleich gut, wer am weitesten springt hängt von zufälligen Faktoren ab (z. B. den Windverhältnissen). Jetzt wurde in Engelberg eine neue Skischanze errichtet und als Erste dürfen Adam, Urs und Beat sie ausprobieren. Es gibt zwei Durchgänge.`,
    },
    questions: [
      {
        id: 'pz-rvt5',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass Adam und Urs im ersten Durchgang die ersten beiden
            Plätze belegen (es ist egal, wer von ihnen auf Platz 1 oder 2 kommt)?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Mehrere günstige Ereignisfolgen/Anzahl möglicher Ergebnisse ändert
            sich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
      {
        id: 'pz-rvt6',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass Beat in den beiden Durchgängen einmal den ersten und
            einmal den zweiten Platz belegt?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Mehrere günstige Ereignisfolgen/Anzahl möglicher Ergebnisse ändert
            sich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
      {
        id: 'lw-rvt5',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass im ersten Durchgang Adam den ersten Platz und Urs den
            zweiten Platz belegen?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden:
            <MathComponent tex={String.raw`{1 \over 3} \cdot {1 \over 2}`} display={true}/>
          </p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
      {
        id: 'lw-rvt6',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass Urs in beiden Durchgängen am weitesten springt?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden:
            <MathComponent tex={String.raw`2 \cdot ({1 \over 3} \cdot {1 \over 3})`} display={true}/>
          </p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
    ]
  },

  {
    context: 4,
    header: {
      de: `Du und eine Freundin kaufen zwei Dosen, die jeweils 4 unterschiedliche Weihnachtskekse enthalten: ein Zimtstern, eine Nussecke, ein Amarettoplätzchen, ein Vanillekipferl. Ihr beide greift ohne hinzuschauen in die Dosen hinein und nehmt den zufällig ausgewählten Keks heraus. Du greifst immer zuerst in die Dose.`,
    },
    questions: [
      {
        id: 'pz-rvt7',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass du und deine Freundin aus der ersten Dose das
            Amarettoplätzchen und den Zimtstern ziehen (es ist egal, wer welchen der beiden Kekse bekommt)?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Eine günstige Ereignisfolge/Anzahl möglicher Ergebnisse bleibt
            gleich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
      {
        id: 'pz-rvt8',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass du beim Ziehen zunächst aus der einen Dose dann aus der
            anderen Dose sowohl eine Nussecke als auch ein Vanillekipferl bekommst?</p>,
          <p>Diese Aufgabe entspricht dem Typ „Mehrere günstige Ereignisfolgen/Anzahl möglicher Ergebnisse bleibt
            gleich“.</p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
      {
        id: 'lw-rvt7',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass du aus der ersten Dose die Nussecke bekommst und deine
            Freundin den Zimtstern?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden:
            <MathComponent tex={String.raw`{1 \over 4} \cdot {1 \over 4}`} display={true}/>
          </p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='false',
      },
      {
        id: 'lw-rvt8',
        question: [
          <p>Aufgabe: Wie groß ist die Wahrscheinlichkeit, dass du aus der ersten Dose den Zimtstern und aus der zweiten
            Dose das Vanillekipferl bekommst?</p>,
          <p>Zur Lösung dieser Aufgabe muss Folgendes berechnet werden:
            <MathComponent tex={String.raw`{1 \over 4} \cdot {1 \over 4}`} display={true}/>
          </p>
        ],
        responseType: 'yesNoSure',
        validate: data => data.answer==='true',
      },
    ]
  },
].map(
  ({questions, ...rest}) =>
    questions.map(q => {
      return {...q, ...rest}
    })
).reduce((acc, x)=> acc.concat(x), [])