import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {Session} from "./Session.js";
import {EBL01Builder} from "./assets/EBL_01/EBL01Builder";
import {LngContext, translate} from "./helper/i18n";
import {FocusStyleManager} from "@blueprintjs/core";
import {config} from "./assets/EBL_01/config";
/*const lngChooser = (
  <>
    <button onClick={()=>start('de')}>Deutsch</button>
    <button onClick={()=>start('en')}>Englisch</button>
  </>
)
ReactDOM.render(lngChooser, document.getElementById('root'));*/
// test();

start();

function start() {
  FocusStyleManager.onlyShowFocusOnTabs();



  const t = (ressource, param) =>
    translate(config.language, ressource, param);
  const tb = new EBL01Builder(t);
  tb.build();

  ReactDOM.render(
    (
      <LngContext.Provider value={t}>
        <Session timeline={tb.getTimeline()} initialData={getInitialData()}/>
      </LngContext.Provider>
    ),
    document.getElementById('root')
  );
}

async function testNew() {
  const response = await fetch("https://psychologie.geihe.net/rest/EBL/new01.php");
  console.log(await response.json());
  /* {
      finished: false
      group_id: 2
      language: "de"
      user_id: "EBL015fe8888a81f018.75435398"
  }
  */
}

function getInitialData() {
  const packageJson = require('../package.json');
  const initialData = {
    version: packageJson.version,
    finished: false,
    language: 'de',
    session: 1,
    user_id: null,
    group_id: null,
  }
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const URLParams = {
    language: params.get('language'),
    userID: params.get('user_id'),
    groupId: params.get('group_id'),
    session: params.get('session'),
  }
  const localData = localStorage.getItem('data');
  const localParams = localData && localData[0];
//TODO URLParams und localData vergleichen
  return initialData;
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
