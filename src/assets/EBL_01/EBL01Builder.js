import React from 'react';
import {TimelineManager} from "../../helper/TimelineManager";
import {EBL01_ExampleManager} from "./EBL01_ExampleManager";
import {EBL01_RessourcePrePostTestManager} from "./EBL01_RessourcePrePostTestManager";
import {EblFrame} from "../../Frames/EBL/EblFrame";
import {EBL01_Introduction} from "./EBL01_Introduction";
import {config} from "./config";

//TODO Konfiguration (z. B. Feedback) hier zentral steuern
export class EBL01Builder {
  constructor(t) {
    this.t = t;
    this.tlManager = new TimelineManager();
    this.rem = new EBL01_ExampleManager();
    this.rpptm = new EBL01_RessourcePrePostTestManager();
  }

  build() {
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

  getTimeline() {
    return this.tlManager.getFlatTimeline();
  }
}

