/*
principle 0: Header
principle 1: order relevant, with replacement
principle 2: order relevant, without replacement
principle 3: order irrelevant, with replacement
principle 4: order irrelevant, without replacement
*/

import {MathComponent} from "mathjax-react";
import React from "react";

export const skispringen = {
  context: 3,
  header: {
    de: `Die vier Engelberger Skispringer Adam, Beat, Christoph und Daniel traten auf der alten Engelberger Schanze häufig gegeneinander an. Dabei kam jeder mit gleicher Häufigkeit auf den ersten, zweiten, dritten oder vierten Platz. Somit sind die vier Springer also gleich gut, wer am weitesten springt hängt von zufälligen Faktoren ab (z. B. den Windverhältnissen). Jetzt wurde in Engelberg eine neue Skischanze errichtet und als erste dürfen Adam, Beat, Christoph und Daniel sie ausprobieren. Es gibt zwei Durchgänge.`,
  },
  items: [
    {
      principle: 1,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass Christoph in beiden Durchgängen am weitesten springt?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 4} \cdot {1 \over 4}={1 \over 16}`} display={false}/>
    },
    {
      principle: 2,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass im ersten Durchgang Adam den ersten Platz und Beat den zweiten Platz belegt?`,
      },
      solution:
        <MathComponent tex={String.raw`{1 \over 4} \cdot {1 \over 3}={1 \over 12}`} display={false}/>
    },
    {
      principle: 3,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass Beat in den beiden Durchgängen einmal einen ersten und einmal einen zweiten Platz belegt?`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 4} \cdot {1 \over 4})={2 \over 16}`} display={false}/>
    },
    {
      principle: 4,
      problem: {
        de: `Wie groß ist die Wahrscheinlichkeit, dass Christoph und Daniel im ersten Durchgang die ersten beiden Plätze belegen (es ist egal, wer von ihnen auf Platz 1 oder 2 kommt)?`,
      },
      solution:
        <MathComponent tex={String.raw` 2 \cdot ( {1 \over 4} \cdot {1 \over 3})={2 \over 12}`} display={false}/>

    },
  ]
}
