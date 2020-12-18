import {MathComponent} from "mathjax-react";
import React from "react";

export const preMulti = [
  {
    id: 'preMulti_1',
    header: 'Berechne! Der Bruchstrich kann mit &quot;/&quot; eingegeben werden (z.B. 1/2).',
    question:
      <MathComponent tex={String.raw`{1 \over 4} \cdot {3 \over 7}`} display={true}/>,
    validate:
      (answer) => answer === '3/28',
    responseType: 'input'
  },
  {
    id: 'preMulti_2',
    header: 'Berechne! Der Bruchstrich kann mit &quot;/&quot; eingegeben werden (z.B. 1/2).',
    question:
        <MathComponent tex={String.raw`{2 \over 5} \cdot {1 \over 3}`} display={true}/>,
    validate:
      (answer) => answer === '2/15',
    responseType: 'input'
  },
  {
    id: 'preMulti_3',
    header: 'Berechne! Der Bruchstrich kann mit &quot;/&quot; eingegeben werden (z.B. 1/2).',
    question:
      <MathComponent tex={String.raw`{5 \over 6} \cdot {3 \over 4}`} display={true}/>,
    validate:
      (answer) => ['15/24', '5/8'].includes(answer),
    responseType: 'input'
  },
  {
    id: 'preMulti_4',
    header: 'Berechne! Der Bruchstrich kann mit &quot;/&quot; eingegeben werden (z.B. 1/2).',
    question:
      <MathComponent tex={String.raw`{1 \over 2} \cdot {4 \over 9}`} display={true}/>,
    validate:
      (answer) => ['4/18', '2/9'].includes(answer),
    responseType: 'input'
  }
]