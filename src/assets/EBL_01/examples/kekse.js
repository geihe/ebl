/*
principle 0: Header
principle 1: order relevant, with replacement
principle 2: order relevant, without replacement
principle 3: order irrelevant, with replacement
principle 4: order irrelevant, without replacement
*/

import {MathComponent} from "mathjax-react";
import React from "react";

export const kekse = {
  context: 4,
  header: {
    de: `Du und eine Freundin kaufen zwei Dosen, die jeweils 6 unterschiedliche Weihnachtskekse enthalten: ein Zimtstern, eine Nussecke, ein Amarettoplätzchen, ein Vanillekipferl, ein Lebkuchenherz und ein Spekulatius. Ihr beide greift ohne hinzuschauen in die Dosen hinein und nehmt den zufällig ausgewählten Keks heraus. Du greifst immer zuerst in die Dose.`,
  },
  items: [
    {
      principle: 1,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass Du aus der ersten Dose das Lebkuchenherz und aus der zweiten Dose die Nussecke greifst?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 6} \cdot {1 \over 6}={1 \over 36}`} display={false}/>
    },
    {
      principle: 2,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass Du aus der ersten Dose den Zimtstern bekommst und Deine Freundin die Nussecke?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 6} \cdot {1 \over 5}={1 \over 30}`} display={false}/>
    },
    {
      principle: 3,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass Du beim Ziehen zunächst aus der einen Dose dann aus der anderen Dose sowohl ein Amarettoplätzchen als auch einen Zimtstern bekommst?`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 6} \cdot {1 \over 6})={2 \over 36}`} display={false}/>
    },
    {
      principle: 4,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass Du und Deine Freundin aus der ersten Dose das Vanillekipferl und die Nussecke ziehen (es ist egal, wer welchen der beiden Kekse bekommt)?`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 6} \cdot {1 \over 5})={2 \over 30}`} display={false}/>
    },
  ]
};
