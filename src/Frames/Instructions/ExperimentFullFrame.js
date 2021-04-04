import React, {useContext} from 'react';
import {LngContext} from "../../helper/i18n";
import {DelayedFrame} from "../DelayedFrame";


export function ExperimentFullFrame(props) {
  const t = useContext(LngContext);

  return (
    <DelayedFrame noResponse>
      <h1>Das Experiment ist beendet.</h1>
      <h2>Die maximale Anzahl an Teilnehmer_innen ist erreicht.</h2>
      <h2>Du kannst das Browserfenster jetzt schließen.</h2>
    </DelayedFrame>
  );
}

