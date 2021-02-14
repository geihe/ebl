import React from "react";
import {config} from "./config";
import {EblFrame} from "../../Frames/EBL/EblFrame";
import {LikertFrame} from "../../Frames/LikertFrame";
import {DelayedFrame} from "../../Frames/DelayedFrame";
import {phrase} from "../ressourceLanguage";
import {Shuffler} from "../../helper/Shuffle";
import {FixationCrossFrame} from "../../Frames/FixationCrossFrame";
import {fssItems} from "./fssItems";
import {EBL01_ExampleManager} from "./EBL01_ExampleManager";

const processMeasures = [
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
  },
  {
    frame: (<DelayedFrame
      space
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
  }
].concat(
  Shuffler.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map(nr =>
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
  )
);


export function exampleFrames(group) {
  const {groups: exampleGroups, ...exampleConfig} = config.examples;
  const {items: exampleItems, id} = exampleGroups[group];
  const rem = new EBL01_ExampleManager();

  return exampleItems.map(itemGroup => {
      return [{
        timer: config.timeForExamples,
        frames: itemGroup.map(s =>
          <EblFrame config={exampleConfig} content={rem.string2html(s)}/>)

      }].concat(processMeasures);
    }
  )
}
