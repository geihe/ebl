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
import {EBL01Video} from "../../Frames/EBL/EBL01Video";
import {ToDoFrame} from "../../Frames/ToDoFrame";
import {Demographics} from "../../Components/Demographics";
import {Shuffler} from "../../helper/Shuffle";
import {EBLPause} from "../../Frames/EBL/EBLPause";
import {DelayedSpaceFrame} from "../../Frames/DelayedSpaceFrame";
import {phrase} from "../ressourceLanguage";


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

  buildSession1() {
    const introductionFrames =
      EBL01_Introduction(config.introduction.items);

    const {items: preTestItems, ...preTestConfig} = config.preTest;
    const preFrames = preTestItems
      .map(s => this.rpptm.getStimulusResponseElement(s, preTestConfig));

    const {groups: exampleGroups, ...exampleConfig} = config.examples;
    const {items: exampleItems, id} = exampleGroups[this.group];
    const exampleFrames = exampleItems.map(itemGroup => {
        return [{
          timer: config.timeForExamples,
          frames: itemGroup.map(s =>
            <EblFrame config={exampleConfig} content={this.rem.string2html(s)}/>)

        }].concat(this.getProcessMeasures());
      }
    )
    console.log(exampleItems);

    const {items: postTestItems, ...postTestConfig} = config.postTest;
    const postFrames = postTestItems
      .map(s => this.rpptm.getStimulusResponseElement(s, postTestConfig));

    this.tlManager.add([
      <ToDoFrame text={'Begrüßungsseite'}/>,
      <ToDoFrame
        text={'Das folgende Beispielvideo durch ein Begrüßungsvideo ("Nun einige mathematische Fragen") ersetzen'}/>,
      <EBL01Video videoID={'introduction'}/>,
      preFrames,
      <ToDoFrame text={'Video "und nun eine kleiner mathematischer Lehrtext"'}/>,
      introductionFrames,
      <ToDoFrame
        text={'Video "nun kommt das eigentliche Experiment mit Beschreibung"<br/>4 mal, für jeden Fall eins<br/>auch Erläuterung der Fragen zur Anstrengung'}/>,
      <ToDoFrame text={' 2-3 Fragen, ob der Ablauf des Experiments verstanden wurde'}/>,
      exampleFrames,
      <EBLPause/>,
      <ToDoFrame text={'Video "Nun kommen einige Aufgaben, mit denen wie den Lernerfolg überprüfen"'}/>,
      postFrames,
      <Demographics/>,
      <ToDoFrame text={'Einverständnis, dass die Daten anonymisiert auf den Server geladen werden '}/>,
      <ToDoFrame text={'Video Debriefing, '}/>,
    ]);
  }

  buildSession2() {
    this.tlManager.add([testTimeline(2)]);
  }

  buildTest() {
    this.tlManager.add(this.getProcessMeasures());
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }

  getProcessMeasures() {
    return [
      {
        frame: <ImiFrame
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
        frame: (<DelayedSpaceFrame
          continueText={phrase.continueText}
          delay={1000}
        >
          <p style={{textAlign: 'center', fontSize: '150%'}}>Wie haben Sie sich beim Lesen der Beispiele gefühlt?</p>
          <p style={{textAlign: 'center', fontSize: '150%'}}>Bitte beurteilen Sie die folgenden Aussagen auf einer Skala
            von</p>
          <p style={{textAlign: 'center', fontSize: '150%', color: 'darkred'}}>1 (trifft nicht zu) bis 7 (trifft
            zu)...</p>
        </DelayedSpaceFrame>),
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
            frame: <ImiFrame
              minText={{de: 'Trifft nicht zu', en: 'not at all'}}
              maxText={{de: 'Trifft zu', en: 'very much'}}
              item={fssItems[nr - 1].text}
              key={nr}
            />,
            id: fssItems[nr - 1].id
          },
        ]
      )
    )
  }
}
