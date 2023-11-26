import React from "react";
import {config} from "../../config";
import {EblFrame} from "./EblFrame";
import {LikertFrame} from "../LikertFrame";
import {DelayedFrame} from "../DelayedFrame";
import {phrase} from "../../assets/ressourceLanguage";
import {FixationCrossFrame} from "../FixationCrossFrame";
import {fssItems} from "../../assets/EBL01/fssItems";
import {EBL01_ExampleManager} from "../../Manager/EBL01_ExampleManager";
import {EblWaitFrame} from "./EblWaitFrame";
import {InstructionFrame102} from "../Instructions/InstructionFrame";
import {cognitiveLoadItems} from "../../assets/EBL01/cognitiveLoadItems";


const processMeasuresIntroduction = { //TODO in eigene Datei
  frame: (<DelayedFrame
    continueText={phrase.continueText}
    delay={1000}
  >
    <p style={{textAlign: 'center', fontSize: '150%'}}>Wie hast du dich beim Lesen der Beispiele gefühlt?</p>
    <p style={{textAlign: 'center', fontSize: '150%'}}>Bitte beurteile die folgenden Aussagen auf einer Skala
      von</p>
    <p style={{textAlign: 'center', fontSize: '150%', color: 'darkred'}}>1 (Trifft nicht zu) bis 7 (Trifft
      zu)...</p>
  </DelayedFrame>),
  nolog: true,
  noProgres: true,
  id: 'process-instruction'
};
export const paasItem =
  {
    frame: <LikertFrame
      minText={{de: 'Sehr wenig angestrengt', en: 'very little effort'}}
      maxText={{de: 'Sehr stark angestrengt', en: 'very high effort'}}
      max={7}
      title={{
        de: 'Wie stark hast du dich bei den letzten vier Beispielen angestrengt, um sie zu verstehen?',
        en: 'How much effort did you invest to understand the last four worked examples?'
      }}
      key={'cognitive load'}
    />,
    id: 'cognitive effort'
  };

// Zufällige Reihenfolge: const cognitiveLoadFrames = Shuffler.shuffleArray([1, 2, 3, 4, 5, 6, 7]).map(nr =>
const cognitiveLoadFrames = [1, 2, 3, 4, 5, 6, 7].map(nr =>
  [
    {
      frame: <FixationCrossFrame nocross duration={200}/>,
      nolog: true
    },
    {
      frame: <LikertFrame
        title={'Wie hast du dich beim Lesen der Beispiele gefühlt?<br/><br/>'+cognitiveLoadItems[nr - 1].text.de}
        minText={{de: 'Trifft nicht zu', en: 'not at all'}}
        maxText={{de: 'Trifft zu', en: 'very much'}}
        key={nr}
      />,
      id: fssItems[nr - 1].id
    },
  ]
);

const processMeasureFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(nr =>
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

export function exampleFrames(groupManager) {
  const {groups: exampleGroups, ...exampleConfig} = config.examples;
  const {items: exampleItems} = exampleGroups[groupManager.getGroupId()];
  const rem = new EBL01_ExampleManager();
  // console.log(exampleItems);
  return exampleItems.map((itemGroup, index) => {
      return itemGroup.map(s =>
        [{id: 'Examples_'+s,
          frame: <EblWaitFrame
          config={exampleConfig}
          content={rem.string2html(s)}
          seconds={config.timeForExamples / itemGroup.length}
          explanationTime={config.timeForExamples} // zeige Erklärungsbox direkt
          hurry={config.timeForExamples / itemGroup.length /5}
        />
    },
          <FixationCrossFrame nocross/>]
      )
        .concat([paasItem, cognitiveLoadFrames, processMeasureFrames])
        .concat(index<exampleItems.length-1 ? [<InstructionFrame102/>] : []);
    }
  )
}

export function exampleFramesTest(group) {
  const {groups: exampleGroups, ...exampleConfig} = config.examples;
  const {items: exampleItems} = exampleGroups[group];
  const rem = new EBL01_ExampleManager();
  return exampleItems.map(itemGroup => {
      return itemGroup.map(s =>
        <EblFrame config={exampleConfig} content={rem.string2html(s)}/>)
        .concat([cognitiveLoadFrames, processMeasureFrames]);
    }
  )
}
