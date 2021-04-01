import React from "react";
import {MathComponent} from "mathjax-react";

export const posFreeForm = [
  {
    id: 'postConceptNew_1',
    header: [
      <p>Fünf Leute nehmen mit ihren Meerschweinchen an einem Labyrinthwettbewerb teil. Das Meerscheinchen gewinnt,
        welches als erstes den Ausgang findet. Alle Meerschweinchen haben dieselbe Chance zu gewinnen. Wenn du den
        Gewinner und den Zweiten vorhersagen willst, ist die Chance, dass du richtig liegst, <MathComponent
          tex={String.raw`{1 \over 5} \cdot {1 \over 4}`} display={false}/>.</p>,
      <p>Wenn du die beiden Ersten vorhersagen willst, ohne zu sagen, wer Erster und wer Zweiter wird, ist die Chance,
        dass du richtig liegst  <MathComponent tex={String.raw`2 \cdot ({1 \over 5} \cdot {1 \over 4})`} display={false}/>.</p>,
    ],
    question: `Warum wird in der zweiten Berechnung mit 2 multipliziert, in der ersten Berechnung jedoch nicht?`,
    responseType: 'textArea'
  },
  {
    id: 'postConceptNew_2',
    header: [
      <p>Fünf Leute nehmen mit ihren Meerschweinchen an einem Labyrinthwettbewerb teil. Das Meerschweinchen gewinnt, welches als erstes den Ausgang findet. Alle Meerschweinchen haben dieselbe Chance zu gewinnen. Der Labyrinthwettbewerb wird zwei Mal durchgeführt. Wenn du den Gewinner aus beiden Durchgängen vorhersagen willst, ist die Chance, dass du richtig liegst, <MathComponent tex={String.raw`{1 \over 5} \cdot {1 \over 5}`} display={false}/>.</p>,
      <p>Wenn nach dem ersten Durchgang der Gewinner ausscheidet und im zweiten Durchgang nicht mehr teilnimmt, ist die Chance, dass du richtig liegst, <MathComponent tex={String.raw`{1 \over 5} \cdot {1 \over 4}`} display={false}/>.</p>,
    ],
    question: [
      <p>Warum wird in der ersten Berechnung <MathComponent tex={String.raw`{1 \over 5}`} display={false}/> mit <MathComponent tex={String.raw`{1 \over 5}`} display={false}/> multipliziert und in der zweiten Berechnung <MathComponent tex={String.raw`{1 \over 5}`} display={false}/> mit <MathComponent tex={String.raw`{1 \over 4}`} display={false}/>?</p>,
    ],
    responseType: 'textArea'
  },
  {
    id: 'postConceptNew_3',
    header: `Wie unterscheidet sich die Berechnung der Wahrscheinlichkeit einer Ereignisfolge bei mehrstufigen Zufallsexperimenten, in denen mehr nur eine Ereignisfolge günstig ist, von der Berechnung der Wahrscheinlichkeit bei Zufallsexperimenten, in denen mehrere Ereignisfolgen günstig sind? `,
    question: `Erkläre.`,
    responseType: 'textArea'
  },
  {
    id: 'postConceptNew_4',
    header: `Wie unterscheidet sich die Berechnung der Wahrscheinlichkeit einer Ereignisfolge bei mehrstufigen Zufallsexperimenten, in denen die Anzahl möglicher Ergebnisse sich ändert von der Berechnung der Wahrscheinlichkeit bei Zufallsexperimenten, in denen die Anzahl möglicher Ergebnisse gleich bleibt? `,
    question: `Erkläre.`,
    responseType: 'textArea'
  },
]