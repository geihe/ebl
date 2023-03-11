import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {Session} from "./Manager/Session";
import {EBL01Builder} from "./Manager/EBL01Builder";
import {LngContext, translate} from "./helper/i18n";
import {FocusStyleManager} from "@blueprintjs/core";
import {config} from "./config";
import {SessionFinished} from "./MicroComponents/SessionFinished";
import {Server} from "./helper/Server";
import {ExperimentFullFrame} from "./Frames/Instructions/ExperimentFullFrame";
import fscreen from "fscreen";
import {GroupManager} from "./helper/GroupManager";
import {ReturnUrlHelper} from "./helper/returnURLHelper";
import {getDataFromTag, getTag} from "./helper/tagHelper";

FocusStyleManager.onlyShowFocusOnTabs();
const server = new Server();
let t;
const returnUrlHelper=new ReturnUrlHelper();

function finished(data) {
  const {tag, age, male, session}=data[0];
  console.log(tag, age, male, session);
  const {userId, groupId, returnId, parameter} =getDataFromTag(tag)
  console.log(userId, groupId, returnId, parameter);
  const qualtrics = 'https://bielefeldpsych.eu.qualtrics.com/jfe/form/SV_djc7TF2eOFaMhyC?tag=' + tag;

  console.log(returnUrlHelper.getReturnUrl());

  server.postData(userId, groupId, age, male, session, tag, data)
    .then(() => {
      window.location.href = +session === 1 ? qualtrics : returnUrlHelper.getReturnUrl();
    }); //zurück zu Unipark etc.
}

getElementInfo().then((info) => {
  t = (ressource, param) =>
    translate(info.language, ressource, param);
  let element;
  switch (info.type) {
    case "full":
      element = <ExperimentFullFrame/>;
      fscreen.exitFullscreen();
      break;
    case "finished":
      element = <SessionFinished/>;
      fscreen.exitFullscreen();
      break;
    case "pending":
      element = <SessionFinished nextSessionStart={info.nextSessionStart}/>;
      fscreen.exitFullscreen();
      break;
    default: //Session
      const initData = info.initialData[0];
      const tb = new EBL01Builder(t);
      console.log(initData);
      tb.setSession(initData.session)
        .setGroupManager(info.groupManager)
        .build();
      element =
        <Session timeline={tb.getTimeline()} initialData={info.initialData} finished={(data) => finished(data)}/>
  }

  render(element);
});

function render(element) {
  ReactDOM.render(
    (
      <LngContext.Provider value={t}>
        {element}
      </LngContext.Provider>
    ),
    document.getElementById('root')
  )
}

async function getElementInfo() {
//TODO URLParams und localData vergleichen
  const packageJson = require('../package.json');
  const initialData = {
    version: packageJson.version,
    finished: false,
    language: config.language,
  }
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const URLparams = {
//    language: params.get('language'),
//    user_id: params.get('user_id'),
//    group_id: params.get('group_id'),
//    session: params.get('session'),
    timeFactor: params.get('timefactor'),
    tic: params.get('tic'), //Unipark
    external_id: params.get('external_id'), //Sonas
    tag: params.get('tag'),
    test: params.get('test'),
  }

  returnUrlHelper.setFromURLParams(URLparams);

  const dataItemsJSON = localStorage.getItem('data');

  if (!dataItemsJSON) { //neues Experiment
    const serverData = await server.getNewData();
    console.log(serverData);
    initialData.test = URLparams.test;
    initialData.tag = URLparams.tag;//TODO für 2. Session
    initialData.session = URLparams.session ? +URLparams.session : 1;//TODO für 2. Session
    initialData.timeFactor = +URLparams.timeFactor || 1;
    // initialData.language = URLparams.language ? URLparams.language : initialData.language;
    // initialData.userId = serverData.user_id;
    const groupManager = new GroupManager(initialData.groupId);
    groupManager.setServercount(serverData.group_count);

    // initialData.showStudyCode = returnUrlHelper.showStudyCode();
    // initialData.returnUrl = returnUrlHelper.getReturnURL();
    initialData.userAgent = navigator.userAgent;

    initialData.tag = getTag(serverData.user_id, 0, returnUrlHelper, initialData.session);

    config.timeBetweenSessionsInSeconds = config.timeBetweenSessionsInSeconds / initialData.timeFactor;
    config.pauseSeconds = config.pauseSeconds / initialData.timeFactor;
    config.timeForExamples = config.timeForExamples / initialData.timeFactor;
    config.likertFrameDelay = config.likertFrameDelay / initialData.timeFactor;
    config.instructions.delay = config.instructions.delay / initialData.timeFactor;
    config.mathCourse.delay = config.mathCourse.delay / initialData.timeFactor;
    config.preTest.radioDelay = config.preTest.radioDelay / initialData.timeFactor;
    config.postTest.radioDelay = config.postTest.radioDelay / initialData.timeFactor;

    if (groupManager.isFull()) {
      return {type: 'full', language: initialData.language}
    }
    return {type: 'session', language: initialData.language, initialData: [initialData], groupManager};
  }

  const dataItems = JSON.parse(dataItemsJSON);
  const localData = dataItems[0];

  if (!localData.finished) { //milestone
    console.log("milestone");
    return {type: 'session', language: initialData.language, initialData: dataItems};
  }

  if (!localData.nextSessionStart) { //Experiment beendet
    console.log("Experiment beendet");
    return {type: 'finished', language: localData.language}
  }

  const nextSessionStart = new Date(localData.nextSessionStart);
  let remainingTimeInSeconds = (nextSessionStart - Date.now()) / 1000;
  console.log(nextSessionStart, remainingTimeInSeconds, localData);

  if (remainingTimeInSeconds < 0) { //starte nächste Session
    console.log("Nächste Session starten");
    initialData.session = localData.session + 1;
    initialData.userId = localData.userId;
    initialData.groupId = localData.groupId;
    initialData.nextSessionStart = null;
    initialData.finished = false;

    localStorage.setItem('index', '0');
    return {type: 'session', language: initialData.language, initialData: [initialData]};
  }
  console.log("pending");

  // warte auf Beginn der nächsten Session
  return {type: 'pending', nextSessionStart, language: localData.language}
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
