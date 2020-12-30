import React from 'react';
import {TimelineManager} from "../../helper/TimelineManager";
import {EBL01_ExampleManager} from "./EBL01_ExampleManager";
import {EBL01_RessourcePrePostTestManager} from "./EBL01_RessourcePrePostTestManager";
import {EblFrame} from "../../Frames/EBL/EblFrame";
import {EBL01_Introduction} from "./EBL01_Introduction";
import {config} from "./config";
import {testTimeline} from "../../Test/testTimeline";

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

  buildSession3() { //zu Testzwecken Session 1 und 2 vertauscht
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

    this.tlManager.add([postFrames, exampleFrames, instructionFrames, preFrames]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }
  buildSession1() {
    this.tlManager.add([testTimeline(1)]);
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }
}

