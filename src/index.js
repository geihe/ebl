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

FocusStyleManager.onlyShowFocusOnTabs();
const server = new Server();

let t;
getElementInfo().then((info) => {
  console.log(info);
  t = (ressource, param) =>
    translate(info.language, ressource, param);
//TODO Experiment voll
  let element;
  switch (info.type) {
    case "finished":
      element = <SessionFinished/>;
      break;
    case "pending":
      element = <SessionFinished nextSessionStart={info.nextSessionStart}/>;
      break;
    default: //Session
      const initData = info.initialData[0];
      console.log(initData);
      const tb = new EBL01Builder(t);
      tb.setSession(initData.session)
        .setGroup(initData.groupId)
        .build();
      console.log(tb.getTimeline()); //TODO ggf. entfernen
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

function finished(data) {
  const {userId, session, groupId, mailId} = data[0];
/*
  server.postData(userId, session, groupId, data, mailId )
    .then( () => render(<SessionFinished nextSessionStart={data[0].nextSessionStart}/>));*/ //TODO: Daten auf Server laden
}

async function getElementInfo() {
//TODO URLParams und localData vergleichen
  const packageJson = require('../package.json');
  const initialData = {
    version: packageJson.version,
    finished: false,
    language: config.language,
    session: 1,
    nextSessionStart: null,
    userId: null,
    groupId: null,
  }

  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const URLparams = {
    language: params.get('language'),
    user_id: params.get('user_id'),
    group_id: params.get('group_id'),
    session: params.get('session'),
    test: params.get('test')
  }

  const dataItemsJSON = localStorage.getItem('data');

  if (!dataItemsJSON) { //neues Experiment
    const serverData = await server.getNewData();
    console.log(URLparams, serverData);

    initialData.session = URLparams.session ? +URLparams.session : serverData.session;
    initialData.language = URLparams.language ? URLparams.language : serverData.language;
    initialData.userId = URLparams.user_id ? +URLparams.user_id : serverData.user_id;
    initialData.groupId = URLparams.group_id ? +URLparams.group_id : serverData.group_id;

    return {type: 'session', language: initialData.language, initialData: [initialData]};
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
