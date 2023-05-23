import React from "react";
import {MathComponent} from "mathjax-react";

export const posFreeForm = [
  {
    id: 'postConceptNew_1',
    header: [
      <p key={1}>Fünf Leute nehmen mit ihren Meerschweinchen an einem Labyrinthwettbewerb teil. Das Meerschweinchen gewinnt,
        welches als erstes den Ausgang findet. Alle Meerschweinchen haben dieselbe Chance zu gewinnen. Die Wahrscheinlichkeit, den Gewinner und den Zweiten zu raten, ist  <MathComponent
          tex={String.raw`{1 \over 5} \cdot {1 \over 4}`} display={false}/>.</p>,
      <p key={3}>Die Wahrscheinlichkeit, die beiden Ersten zu raten, egal wer Erster und Zweiter wird, ist  <MathComponent tex={String.raw`2 \cdot ({1 \over 5} \cdot {1 \over 4})`} display={false}/>.</p>,
    ],
    question: `In der zweiten Berechnung wird mit 2 multipliziert, in der ersten jedoch nicht. Erkläre, warum dies so ist, und gehe bei deiner Antwort kurz auf die jeweiligen Überlegungen ein, die den beiden Lösungswegen zu Grunde liegen.`,
    responseType: 'textArea',
    effort: 3,
  },
  {
    id: 'postConceptNew_2',
    header: [
      <p>Fünf Leute nehmen mit ihren Meerschweinchen an einem Labyrinthwettbewerb teil. Das Meerschweinchen gewinnt, welches als Erstes den Ausgang findet. Alle Meerschweinchen haben dieselbe Chance zu gewinnen. Der Labyrinthwettbewerb wird zwei Mal durchgeführt. Die Wahrscheinlichkeit, jeweils den Gewinner aus beiden Durchgängen zu raten, ist <MathComponent tex={String.raw`{1 \over 5} \cdot {1 \over 5}`} display={false}/>.</p>,
      <p>Wenn nach dem ersten Durchgang der Gewinner ausscheidet und im zweiten Durchgang nicht mehr teilnimmt, ändert sich die Wahrscheinlichkeit auf <MathComponent tex={String.raw`{1 \over 5} \cdot {1 \over 4}`} display={false}/>.</p>,
    ],
    question: [
      <><p>In in der ersten Rechnung wird <MathComponent tex={String.raw`{1 \over 5}`} display={false}/> mit <MathComponent tex={String.raw`{1 \over 5}`} display={false}/> multipliziert;  in der zweiten Rechnung wird <MathComponent tex={String.raw`{1 \over 5}`} display={false}/> mit <MathComponent tex={String.raw`{1 \over 4}`} display={false}/> multipliziert.</p> <p>Erkläre, warum dies so ist, und gehe bei deiner Antwort kurz auf die jeweiligen Überlegungen ein, die den beiden unterschiedlichen Lösungswegen zu Grunde liegen. </p></>,
    ],
    responseType: 'textArea',
    effort: 3,
  },
  {
    id: 'postConceptNew_3',
    header: `<p>Bei einem mehrstufigen Zufallsexperiment kann man u. a. folgende zwei Fälle unterscheiden:</p> <ol><li>Es gibt nur eine günstige Ergebnisfolge.</li><li>Es gibt mehrere günstige Ergebnisfolgen.</li></ol> `,
    question: `Erkläre.`,
    responseType: 'textArea',
    effort: 3,
  },
  {
    id: 'postConceptNew_4',
    header: `<p>Bei einem mehrstufigen Zufallsexperiment kann man zwei weitere Fälle unterscheiden:</p> <ol><li>Die Anzahl möglicher Ergebnisse ist in jedem Durchgang gleich.</li><li>Die Anzahl möglicher Ergebnisse ändert sich in den Durchgängen.</li></ol>`,
    question: `Erkläre, wie sich die Wahrscheinlichkeitsberechnungen in den beiden Fällen unterscheiden.`,
    responseType: 'textArea',
    effort: 3,
  },
]