import React from "react";
import {config} from "../../config";
import {EblFrame} from "./EblFrame";
import {LikertFrame} from "../LikertFrame";
import {DelayedFrame} from "../DelayedFrame";
import {phrase} from "../../assets/ressourceLanguage";
import {Shuffler} from "../../helper/Shuffle";
import {FixationCrossFrame} from "../FixationCrossFrame";
import {fssItems} from "../../assets/EBL01/fssItems";
import {EBL01_ExampleManager} from "../../Manager/EBL01_ExampleManager";
import {EblWaitFrame} from "./EblWaitFrame";
import {InstructionFrame102} from "../Instructions/InstructionFrame";

const processMeasuresIntroduction = { //TODO in eigene Datei
  frame: (<DelayedFrame
    continueText={phrase.continueText}
    delay={1000}
  >
    <p style={{textAlign: 'center', fontSize: '150%'}}>Wie haben Sie sich beim Lesen der Beispiele gefühlt?</p>
    <p style={{textAlign: 'center', fontSize: '150%'}}>Bitte beurteilen Sie die folgenden Aussagen auf einer Skala
      von</p>
    <p style={{textAlign: 'center', fontSize: '150%', color: 'darkred'}}>1 (trifft nicht zu) bis 7 (trifft
      zu)...</p>
  </DelayedFrame>),
  nolog: true,
  noProgres: true,
  id: 'process-instruction'
};
export const cognitiveEffortFrame =
  {
    frame: <LikertFrame
      minText={{de: 'sehr wenig angestrengt', en: 'very little effort'}}
      maxText={{de: 'sehr stark angestrengt', en: 'very high effort'}}
      max={7}
      item={{
        de: 'Wie stark haben Sie sich bei den letzten vier Beispielen angestrengt, um sie zu verstehen?',
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
        minText={{de: 'Trifft nicht zu', en: 'not at all'}}
        maxText={{de: 'Trifft zu', en: 'very much'}}
        item={fssItems[nr - 1].text}
        key={nr}
      />,
      id: fssItems[nr - 1].id
    },
  ]
);

export function exampleFrames(group) {
  const {groups: exampleGroups, ...exampleConfig} = config.examples;
  const {items: exampleItems, id} = exampleGroups[group - 1];
  const rem = new EBL01_ExampleManager();
  console.log(exampleItems);
  return exampleItems.map((itemGroup, index) => {
/*      const waitFrame = <DelayedFrame noResponse>
        <h1><Icon icon={'time'} iconSize={20}/> Bitte warten</h1>
        <p>Du hast deine Lernzeit nicht vollständig genutzt. Bitte warte </p>
      </DelayedFrame>;*/
      return itemGroup.map(s =>
        <EblWaitFrame
          config={exampleConfig}
          content={rem.string2html(s)}
          seconds={config.timeForExamples/itemGroup.length}
        />
      )
        .concat([cognitiveEffortFrame, processMeasuresIntroduction, processMeasureFrames])
        .concat(index<exampleItems.length-1 ? [<InstructionFrame102/>] : []);
    }
  )
}

export function exampleFramesTest(group) {
  const {groups: exampleGroups, ...exampleConfig} = config.examples;
  const {items: exampleItems, id} = exampleGroups[group];
  const rem = new EBL01_ExampleManager();
  return exampleItems.map(itemGroup => {
      return itemGroup.map(s =>
        <EblFrame config={exampleConfig} content={rem.string2html(s)}/>)
        .concat([cognitiveEffortFrame]);
    }
  )
}
