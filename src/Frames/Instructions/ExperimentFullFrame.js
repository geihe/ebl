import React from 'react';
import {DelayedFrame} from "../DelayedFrame";


export function ExperimentFullFrame(props) {
  return (
    <DelayedFrame noResponse>
      <h1>Das Experiment ist beendet.</h1>
      <h2>Die maximale Anzahl an Teilnehmer_innen ist erreicht.</h2>
      <h2>Du kannst das Browserfenster jetzt schließen.</h2>
    </DelayedFrame>
  );
}

