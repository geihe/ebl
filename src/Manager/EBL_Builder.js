import React from 'react';
import {TimelineManager} from "../helper/TimelineManager";
import {EndLab, ShowStudyCode} from "../Frames/Instructions/InstructionFrame";
import {EBL04Session1, EBL04Session2} from "./EBL04Sessions";
import {TestSession1} from "./EBLTestSessions";
import {EBL05Session1, EBL05Session2} from "./EBL05Sessions";

export class EBL_Builder {
  constructor(t) {
    this.t = t;
    this.tlManager = new TimelineManager();
    this.session = 1;
    this.version = 0;
    this.groupManager = null; //group von 1 bis 4 , 0 -> test
    this.showStudyCode = false;
  }

  setShowStudyCode(code = true) {
    this.showStudyCode = code;
    return this;
  }

  setSession(session) {
    this.session = session;
    return this;
  }

  setVersion(version) {
    this.version = version;
    return this;
  }

  setGroupManager(groupManager) {
    this.groupManager = groupManager;
    return this;
  }

  build() {
    switch (this.session) {
      case 99:
        this.buildTestSession();
        break;
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
    if (this.version == 4) this.tlManager.add(EBL04Session1(this.groupManager));
    if (this.version == 5) this.tlManager.add(EBL05Session1(this.groupManager));

  }

  buildSession2() {
    if (this.version == 4) this.tlManager.add(EBL04Session2);
    if (this.version == 5) this.tlManager.add(EBL05Session2);

    if (this.version == 5) {
      this.tlManager.add(<EndLab/>);
    } else {
      if (this.showStudyCode) {
        this.tlManager.add(<ShowStudyCode random/>);
      }

    }
  }

  buildTestSession() {
    this.tlManager.add(TestSession1)
  }

  getTimeline(session = 1) {
    return this.tlManager.getFlatTimeline();
  }
}