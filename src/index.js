import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {Session} from "./Session.js";
import {EBL01Builder} from "./assets/EBL_01/EBL01Builder";
import {LngContext, translate} from "./helper/i18n";
import {FocusStyleManager} from "@blueprintjs/core";
import {config} from "./assets/EBL_01/config";
import {SessionFinished} from "./MicroComponents/SessionFinished";
/*const lngChooser = (
  <>
    <button onClick={()=>start('de')}>Deutsch</button>
    <button onClick={()=>start('en')}>Englisch</button>
  </>
)
ReactDOM.render(lngChooser, document.getElementById('root'));*/
// test();

FocusStyleManager.onlyShowFocusOnTabs();

const info = getElementInfo();
const t = (ressource, param) =>
  translate(info.language, ressource, param);

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
    const tb = new EBL01Builder(t);
    tb.setSession(initData.session);
    tb.setGroup(initData.groupId);
    tb.build();
    element = <Session timeline={tb.getTimeline()} initialData={info.initialData} finished={(data) => finished(data)}/>
}

render(element);

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
  //TODO Daten auf Server laden
  render(<SessionFinished nextSessionStart={data[0].nextSessionStart}/>);
  console.log(data);
}

async function testNew() {
  const response = await fetch("https://psychologie.geihe.net/rest/EBL/new01.php");
  console.log(await response.json());
  /* {
      finished: false
      groupId: 2
      language: "de"
      userId: "EBL015fe8888a81f018.75435398"
      session: 1
  }
  */
}

function getElementInfo() {
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
  const URLParams = {
    language: params.get('language'),
    userID: params.get('user_id'),
    groupId: params.get('group_id'),
    session: params.get('session'),
  }

  const dataItemsJSON = localStorage.getItem('data');

  if (!dataItemsJSON) { //neues Experiment
    //TODO hole user_id und group_id vom Server
    console.log("keine lokalen Daten, neues Experiment?");
    return {type: 'session', initialData: [initialData]};
  }

  const dataItems = JSON.parse(dataItemsJSON);
  const localData = dataItems[0];

  if (!localData.finished) { //milestone
    console.log("milestone");
    return {type: 'session', initialData: dataItems};
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
    return {type: 'session', initialData: [initialData]};
  }
  console.log("pending");

  // warte auf Beginn der nächsten Session
  return {type: 'pending', nextSessionStart, language: localData.language}
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
