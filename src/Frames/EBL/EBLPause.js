import React from 'react';
import {TimeView} from "../../MicroComponents/TimeView";
import {config} from "../../assets/EBL_01/config";
import {Html} from "../../MicroComponents/Html";
import {Pause} from "../Pause";

export function EBLPause(props) {//TODO exclude from data

  const   pauseText= '<h2>Liebe*r Studienteilnehmer*in</h2>' +
    '<p>Bitte mache nun eine Pause von 10 Minuten. ' +
    'Gerne kannst du dir die Beine vertreten, durchlüften oder dir etwas zu trinken holen. </p>' +
    '<p>Du siehst sogleich einen Timer.</p>' +
    '<p>Bitte sei pünktlich zurück und schalte alle Störquellen aus.</p>';

  const pauseFunction = (remaining => {
    console.log(remaining);
    if (remaining > config.pauseSeconds - 10) {
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
      />
    };
    return (<>
      <p><strong>Pause, gleich geht's weiter.</strong></p>
      <TimeView seconds={remaining}/>
    </>);
  })
  return <Pause
    seconds={config.pauseSeconds}
    elementFunction={pauseFunction}
    finish={props.finish}
  />;
}


//TODO zeitabhängig zusätzlich Text anzeigen textFunction(seconds) => Text