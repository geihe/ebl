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
        this.buildSession1();
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

    const {groups: exampleGroups, ...exampleConfig} = config.examples;
    const {items: exampleItems, id} = exampleGroups[this.group];
    console.log(exampleItems);
    const exampleFrames = exampleItems.map(itemGroup =>
      itemGroup.map(s =>
        <EblFrame config={exampleConfig} content={this.rem.string2html(s)}/>)
        .concat(this.getProcessMeasures())
    )

    const {items: postTestItems, ...postTestConfig} = config.postTest;
    const postFrames = postTestItems
      .map(s => this.rpptm.getStimulusResponseElement(s, postTestConfig));

    this.tlManager.add([exampleFrames, postFrames, instructionFrames, preFrames]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }

  buildSession3() {
    this.tlManager.add(this.getProcessMeasures());
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }

  getProcessMeasures() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map(nr =>
        [wrap(fssItems[nr - 1].id,
          <ImiFrame
            minText={{de: 'Trifft nicht zu', en: 'not at all'}}
            maxText={{de: 'Trifft zu', en: 'very much'}}
            item={fssItems[nr - 1].text}
            key={nr}
          />),
          {frame: <FixationCrossFrame nocross duration={200}/>, nolog: true}
        ]
      ).concat([wrap('cognitive effort', <ImiFrame
          minText={{de: 'sehr wenig angestrengt', en: 'very little effort'}}
          maxText={{de: 'sehr stark angestrengt', en: 'very high effort'}}
          max={9}
          item={{
            de: 'Wie stark haben Sie sich bei den letzten vier Beispielen angestrengt, um sie zu verstehen?',
            en: 'How much effort did you invest to understand the last four worked examples?'
          }}
          key={'cognitive load'}
        />)]
      )
  }
}

function wrap(id, el) {
  return {
    frame: el,
    id: id
  }
}