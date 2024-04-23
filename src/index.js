import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {Session} from "./Manager/Session";
import {EBL_Builder} from "./Manager/EBL_Builder";
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
//const server = new Server();
let t;
const returnUrlHelper = new ReturnUrlHelper();
function finished(data) {
  const {tag, age = 0, male = 0, session} = data[0];
  const {version, userId, groupId, returnId, parameter} = getDataFromTag(tag)
  const qualtrics = 'https://bielefeldpsych.eu.qualtrics.com/jfe/form/SV_9vuvZ1pjdlCzYZU?tag=' + tag;
  const server = new Server(version);
  server.postData(userId, groupId, age, male, session, tag, data)
    .then(() => {
      const href = +session === 1 ? qualtrics : returnUrlHelper.getReturnUrl();
      if (href.startsWith('https')) {
        window.location.href = href;
      }
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
      const builder = new EBL_Builder(t);
      // console.log(initData);
      builder.setSession(initData.test ? 99 : initData.session)
        .setVersion(initData.version)
        .setGroupManager(info.groupManager)
        .setShowStudyCode(returnUrlHelper.showStudyCode())
        .build();
      element =
        <Session timeline={builder.getTimeline()} initialData={info.initialData} finished={(data) => finished(data)}/>
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
  const packageJson = require('../package.json');
  const initialData = {
    version: packageJson.version,
    finished: false,
    language: config.language,
  }
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const URLparams = {
    timeFactor: params.get('timefactor'),
    tic: params.get('tic'), //Unipark
    external_id: params.get('external_id'), //Sonas
    tag: params.get('tag'),
    test: params.get('test'),
    group_id: params.get('group_id'),
    version: params.get('ver'),
  }
  console.log(URLparams);
  returnUrlHelper.setFromURLParams(URLparams);
  if (!URLparams.tag) { //neues Experiment, erste Session
    const server = new Server(URLparams.version);
    const serverData = await server.getNewData();
    initialData.version = URLparams.version;
    initialData.test = URLparams.test;
    initialData.session = 1;
    initialData.timeFactor = +URLparams.timeFactor || 1;

    const groupManager = new GroupManager(+URLparams.group_id);
    groupManager.setServercount(serverData.group_count);
    initialData.userAgent = navigator.userAgent;
    initialData.tag = getTag(initialData.version, serverData.user_id, 0, returnUrlHelper, initialData.session);

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
  } else { //Folgesession
    initialData.tag = URLparams.tag;
    const tagData = getDataFromTag(URLparams.tag);
    initialData.version = tagData.version;
    initialData.userId = tagData.userId;
    initialData.groupId = tagData.groupId;
    initialData.session = tagData.session + 1;
    const server = new Server(tagData.version);
    const serverData = await server.getCheckData(initialData.userId);
    if (serverData.end2) {
      return {type: 'finished', language: initialData.language, initialData: [initialData]};
    }
    returnUrlHelper.setFromID(tagData.returnId, tagData.parameter);
    return {type: 'session', language: initialData.language, initialData: [initialData]};
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
