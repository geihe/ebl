import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {DelayedSpaceFrame} from "./DelayedSpaceFrame";


export function BreakFrame(props) {
  const t = useContext(LngContext);

  return (
    <DelayedSpaceFrame
      delay={86400000}
      continueText={false}
    >
      <h1>Das Experiment wurde abgebrochen.</h1>
      <h2>Es wurden keine Daten an den Server übertragen.</h2>
      <h2>Sie können das Browserfenster jetzt schließen..</h2>

    </DelayedSpaceFrame>
  );
}

