import React from 'react';
import {config} from "../../config";
import {Html} from "../../MicroComponents/Html";
import {Pause} from "../Pause";

export function EBLPause(props) {//TODO exclude from data

  const pauseText = '<h2>Liebe*r Studienteilnehmer*in</h2>' +
    '<p>Du hast dir nun eine Pause von 10 Minuten verdient. ' +
    'Gerne kannst du dir die Beine vertreten, durchlüften oder dir etwas zu trinken holen. </p>' +
    '<p></p>' +
    '<p>Bitte sei pünktlich zurück und schalte alle Störquellen aus.</p>';

  const htmlElement = <Html
    html={pauseText}
    style={{
      width: '600px',
      fontSize: '20px',
      color: 'blue',
      textAlign: 'center',
      backgroundColor: '#EEEEEE',
      padding: '10px',
    }}
  />;

  const pauseFunction = (remaining => {
    if (remaining > config.pauseSeconds - 10) {
      return htmlElement
    }
    return (htmlElement);
  })
  return <Pause
    seconds={config.pauseSeconds}
    elementFunction={pauseFunction}
    finish={props.finish}
  />;
}


//TODO zeitabhängig zusätzlich Text anzeigen textFunction(seconds) => Text