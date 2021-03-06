import React, {useEffect} from 'react';
import {DelayedFrame} from "./DelayedFrame";


export function ScreenCheck(props) {
  const screenOK = window.screen.availWidth >= 1024;
  useEffect(()=> screenOK ?  props.finish() : null);
  if (screenOK) {
    return null;
  } else {
    return (
      <DelayedFrame noResponse>
        <h1>Dein Bildschirm ist für das Experiment zu klein.</h1>
        <p>Einigen Teile des Experiments erfordern ausreichend Platz auf dem Bildschirm. Bitte nutze nach Möglichkeit an
          anderes Gerät mit einem größeren Bildschirm. </p>
        <p>Möglicherweise genügt es bereits, die Bildschirmauflösung auf eine Breite von mindestens 1024 zu
          vergrößern.</p>
        <p>Es wurden keine Daten an den Server übertragen.</p>
        <p>Du kannst das Browserfenster jetzt schließen..</p>
      </DelayedFrame>
    );
  }
}

