import React from 'react';
import {DelayedFrame} from "./DelayedFrame";


export function CancelFrame(props) {

  return (
    <DelayedFrame noResponse>
      <h1>Das Experiment wurde abgebrochen.</h1>
      <h2>Es wurden keine Daten an den Server übertragen.</h2>
      <h2>Du kannst das Browserfenster jetzt schließen..</h2>
    </DelayedFrame>
  );
}

