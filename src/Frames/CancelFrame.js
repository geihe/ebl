import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {DelayedFrame} from "./DelayedFrame";


export function CancelFrame(props) {
  const t = useContext(LngContext);

  return (
    <DelayedFrame noResponse>
      <h1>Das Experiment wurde abgebrochen.</h1>
      <h2>Es wurden keine Daten an den Server übertragen.</h2>
      <h2>Sie können das Browserfenster jetzt schließen..</h2>

    </DelayedFrame>
  );
}

