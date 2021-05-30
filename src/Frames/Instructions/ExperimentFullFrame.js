import React from 'react';
import {DelayedFrame} from "../DelayedFrame";


export function ExperimentFullFrame(props) {
  return (
    <DelayedFrame noResponse>
      <h1>Das Experiment ist beendet.</h1>
      <h2>Vielen Dank für dein Interesse an dieser Studie. Die maximale Anzahl an Teilnehmer_innen ist allerdings bereits und die Datenerfassung wurde beendet.</h2>
      <h2>Du kannst das Browserfenster jetzt schließen.</h2>
    </DelayedFrame>
  );
}

