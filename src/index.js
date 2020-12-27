import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {App} from "./App";
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

testGet();

function start() {
  FocusStyleManager.onlyShowFocusOnTabs();
  const t = (ressource, param) =>
    translate(config.language, ressource, param);
  const tb = new EBL01Builder(t);
  tb.build();
  ReactDOM.render(
    (
      <LngContext.Provider value={t}>
        {/*<App timeline={tb.getTimeline()}/>*/}
        <App timeline={tb.getTimeline()}/>
      </LngContext.Provider>
    ),
    document.getElementById('root')
  );
}

function testGet() {
  const url=new URL(window.location);
  const params = new URLSearchParams(url.search);
  console.log(params.get('user_id'));
  console.log(params.get('group_id'));
  console.log(params.get('session'));
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
