import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {App} from "./App";
import {EBL01Builder} from "./assets/EBL_01/EBL01Builder";
import {LngContext, translate} from "./helper/i18n";
import {FocusStyleManager} from "@blueprintjs/core";
import {config} from "./assets/EBL_01/config";
import {TestTimeline} from "./Test/TestTimeline";
import {TimelineManager} from "./helper/TimelineManager";
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
        {/*<App timeline={tb.getTimeline()}/>*/}
        <App timeline={tb.getTimeline()}/>
      </LngContext.Provider>
    ),
    document.getElementById('root')
  );
}

function test() {
  const t = (ressource, param) =>
    translate(config.language, ressource, param);
  const tlm=new TimelineManager(TestTimeline());
  ReactDOM.render(
    (
      <LngContext.Provider value={t}>
        <App timeline={tlm.getFlatTimeline()}/>
      </LngContext.Provider>
    ),
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
