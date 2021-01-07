import React from 'react';
import {TimelineManager} from "../../helper/TimelineManager";
import {EBL01_ExampleManager} from "./EBL01_ExampleManager";
import {EBL01_RessourcePrePostTestManager} from "./EBL01_RessourcePrePostTestManager";
import {EblFrame} from "../../Frames/EBL/EblFrame";
import {EBL01_Introduction} from "./EBL01_Introduction";
import {config} from "./config";
import {testTimeline} from "../../Test/testTimeline";
import {fssItems} from "./fssItems";
import {ImiFrame} from "../../Frames/ImiFrame";
import {FixationCrossFrame} from "../../Frames/FixationCrossFrame";


export class EBL01Builder {
  constructor(t) {
    this.t = t;
    this.tlManager = new TimelineManager();
    this.rem = new EBL01_ExampleManager();
    this.rpptm = new EBL01_RessourcePrePostTestManager();
    this.session = 1;
    this.group = 0;
  }

  setSession(session) {
    this.session = session;
    return this;
  }
  setGroup(group) {
    this.group = group;
    return this;
  }

  build() {
    switch (this.session) {
      case 1:
        this.buildSession3();
        break;
      case 2:
        this.buildSession2();
        break;
      default:
        console.log("Fehler in EBL01Builder: Session-Nr. nicht gefunden.");
    }
  }

  buildSession1() { //zu Testzwecken Session 1 und 2 vertauscht
    const instructionFrames =
      EBL01_Introduction(config.introduction.items);

    const {items: preTestItems, ...preTestConfig} = config.preTest;
    const preFrames = preTestItems
      .map(s => this.rpptm.getStimulusResponseElement(s, preTestConfig));

    const {items: exampleItems, ...exampleConfig} = config.examples;
    const exampleFrames = exampleItems
      .map(s => <EblFrame config={exampleConfig} content={this.rem.string2html(s)}/>);

    const {items: postTestItems, ...postTestConfig} = config.postTest;
    const postFrames = postTestItems
      .map(s => this.rpptm.getStimulusResponseElement(s, postTestConfig));

    this.tlManager.add([exampleFrames, postFrames, instructionFrames, preFrames]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }
  buildSession3() {
    this.tlManager.add(this.buildProcessMeasures());
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }

  buildRheinbergFss(numbers) {//TODO minText und maxText auch aus Datei holen
    return numbers.map(nr=>
      [<ImiFrame
        minText={{de: 'Trifft nicht zu', en: 'not at all'}}
        maxText={{de: 'Trifft zu', en: 'very much'}}
        item={fssItems[nr-1].text}
        key={nr}
      />,
        <FixationCrossFrame /> ]
    )
  }

  buildProcessMeasures() {
    return  [1,2,3,4,5,6,7,8,9,10]
      .map(nr=>
        [<ImiFrame
          minText={{de: 'Trifft nicht zu', en: 'not at all'}}
          maxText={{de: 'Trifft zu', en: 'very much'}}
          item={fssItems[nr-1].text}
          key={nr}
        />,
          <FixationCrossFrame nocross duration={200}/> ]
      ).concat([<ImiFrame
        minText={{de: 'sehr wenig angestrengt', en: 'very little effort'}}
        maxText={{de: 'sehr stark angestrengt', en: 'very high effort'}}
        max={9}
        item={{
          de: 'Wie stark haben Sie sich bei den letzten vier Beispielen angestrengt, um sie zu verstehen?',
          en: 'How much effort did you invest to understand the last four worked examples?'
        }}
        key={'cognitive load'}
      />]
    )
  }
}