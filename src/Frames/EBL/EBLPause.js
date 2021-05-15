import React from 'react';
import {Html} from "../../MicroComponents/Html";

export function EBLPause(props) {//TODO exclude from data

  const pauseText = '<h2>Liebe*r Studienteilnehmer*in</h2>' +
    '<p>Du hast dir nun eine Pause von 10 Minuten verdient. ' +
    'Gerne kannst du dir die Beine vertreten, durchlüften oder dir etwas zu trinken holen. </p>' +
    '<p></p>' +
    '<p>Bitte sei pünktlich zurück und schalte alle Störquellen aus.</p>';

  return <Html
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

}


//TODO zeitabhängig zusätzlich Text anzeigen textFunction(seconds) => Text