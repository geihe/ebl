import React from "react";
import {LikertFrame} from "../LikertFrame";
import {Shuffler} from "../../helper/Shuffle";
import {FixationCrossFrame} from "../FixationCrossFrame";
import {fssItems} from "../../assets/EBL01/fssItems";
import {EBL01_ExampleManager} from "../../Manager/EBL01_ExampleManager";
import {EblWaitFrame} from "./EblWaitFrame";
import {InstructionFrame102} from "../Instructions/InstructionFrame";

export const cognitiveEffortFrame =
  {
    frame: <LikertFrame
      minText={{de: 'sehr wenig angestrengt', en: 'very little effort'}}
      maxText={{de: 'sehr stark angestrengt', en: 'very high effort'}}
      max={7}
      title={{
        de: 'Wie stark hast du dich bei den letzten vier Beispielen angestrengt, um sie zu verstehen?',
        en: 'How much effort did you invest to understand the last four worked examples?'
      }}
      key={'cognitive load'}
    />,
    id: 'cognitive effort'
  };
const processMeasureFrames = Shuffler.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map(nr =>
  [
    {
      frame: <FixationCrossFrame nocross duration={200}/>,
      nolog: true
    },
    {
      frame: <LikertFrame
        title={'Wie hast du dich beim Lesen der Beispiele gefühlt?<br/><br/>'+fssItems[nr - 1].text.de}
        minText={{de: 'Trifft nicht zu', en: 'not at all'}}
        maxText={{de: 'Trifft zu', en: 'very much'}}
        key={nr}
      />,
      id: fssItems[nr - 1].id
    },
  ]
);

export function exampleFrames(group, config) {
  const {groups: exampleGroups, ...exampleConfig} = config.examples;
  const {items: exampleItems, id} = exampleGroups[group];
  const rem = new EBL01_ExampleManager();
  console.log(exampleItems);
  return exampleItems.map((itemGroup, index) => {
      return itemGroup.map(s =>
        [{id: 'Examples_'+s,
          frame: <EblWaitFrame
          config={exampleConfig}
          content={rem.string2html(s)}
          seconds={config.timeForExamples / itemGroup.length}
          explanationTime={config.timeForExamples / itemGroup.length /2}
          hurry={config.timeForExamples / itemGroup.length /5}
        />
    },
          <FixationCrossFrame nocross/>]
      )
        .concat([cognitiveEffortFrame, processMeasureFrames])
        .concat(index<exampleItems.length-1 ? [<InstructionFrame102/>] : []);
    }
  )
}

