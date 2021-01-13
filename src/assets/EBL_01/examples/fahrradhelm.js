/*
principle 0: Header
principle 1: order relevant, with replacement
principle 2: order relevant, without replacement
principle 3: order irrelevant, with replacement
principle 4: order irrelevant, without replacement
*/

import {MathComponent} from "mathjax-react";
import React from "react";

export const fahrradhelm = {
  context: 1,
  header: {
    de: `Du und Dein Freund nehmen an einem zweitägigen Mountainbike-Kurs teil. An beiden Tagen bringt der Kursleiter jeweils 5 Fahrradhelme mit, die alle unterschiedliche Farben haben (orange, silber, braun, rot und gelb). Die Helme werden zufällig verteilt und am Ende des Tages an den Kursleiter zurückgegeben. An beiden Tagen erhältst Du zuerst und Dein Freund als Zweiter einen Helm.`,
    en: `You and your friend are taking part in a two-day mountain bike course. On both days, the instructor will bring 5 bike helmets, each with different colors (orange, silver, brown, red and yellow). The helmets are distributed randomly an returned to the instructor at the end of the day. On both days you will receive a helmet first and your friend second.`,
  },
  items: [
    {
      principle: 1,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass Du am ersten Tag einen roten und am zweiten Tag einen gelben Helm bekommst?`,
        en: `What is the probability that you will get a red helmet on the first day and a yellow helmet on the second day?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 5} \cdot {1 \over 5}={1 \over 25}`} display={false}/>
    },
    {
      principle: 2,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass Du am ersten Kurstag den roten Helm bekommst und Dein Freund den gelben?`,
        en: `What is the probability that you will get the red helmet on the first day of the course and your friend the yellow one?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 5} \cdot {1 \over 4}={1 \over 20}`} display={false}/>
    },
    {
      principle: 3,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass Du im Lauf des zweitägigen Kurses sowohl einen roten als auch einen gelben Helm bekommst?`,
        en: `What is the probability that you will get both a red helmet and a yellow helmet during the two-day course?`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 5} \cdot {1 \over 5})={2 \over 25}`} display={false}/>
    },
    {
      principle: 4,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass Du und Dein Freund am ersten Kurstag den roten und den gelben Helm bekommen (es ist egal, wer welche Farbe bekommt)?`,
        en: `What is the probability that you and your friend will get the red helmet and yellow helmet on the first day of the course (it doesn't matter who gets which color)?`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 5} \cdot {1 \over 4})={2 \over 20}`} display={false}/>
    },
  ]
};
