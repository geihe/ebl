/*
principle 0: Header
principle 1: order relevant, with replacement
principle 2: order relevant, without replacement
principle 3: order irrelevant, with replacement
principle 4: order irrelevant, without replacement
*/

import {MathComponent} from "mathjax-react";
import React from "react";

export const edelgase = {
  context: 2,
  header: {
    de: `Eine Chemikerin lagert in zwei verschiedenen Sicherheitsschränken Edelgase. In beiden Schränken befinden sich dieselben 3 Edelgase (Argon, Krypton, Helium) in einzelnen Behältern. Ihr Kollege hat jedoch vergessen, die Behälter zu beschriften und alle Behälter sehen genau gleich aus. Für ein Experiment begibt sich die Chemikerin auf die Suche nach zwei verschiedenen Edelgasen und nimmt die Behälter einzeln aus den Schränken und prüft danach, welches Gas enthalten ist.`,
  },
  items: [

    {
      principle: 1,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in dem einen Schrank zuerst den Behälter mit dem Helium herausgreift und dann in dem zweiten Schrank den Behälter mit dem Argon?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 3} \cdot {1 \over 3}={1 \over 9}`} display={false}/>
    },
    {
      principle: 2,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst den Behälter mit dem Helium herausgreift und dann den Behälter mit dem Argon?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 3} \cdot {1 \over 2}={1 \over 6}`} display={false}/>
    },
    {
      principle: 3,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin aus einem der Schränke Helium und aus dem anderen Argon herausgreift?'`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 3} \cdot {1 \over 3})={2 \over 9}`} display={false}/>
    },
    {
      principle: 4,
      problem: {
        de: `Wie hoch ist die Wahrscheinlichkeit, dass die Chemikerin in einem Schrank zuerst die Behälter mit den Edelgasen Helium und Argon herausgreift (es ist egal, welches Behältnis sie als Erstes entdeckt)?`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 3} \cdot {1 \over 2})={2 \over 6}`} display={false}/>
    },
  ]
};

