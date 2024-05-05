import React from 'react';
import {Html} from "../../MicroComponents/Html";
import {FeedbackManager} from "../../helper/FeedbackManager";

export function EBLFeedbackFramePre(props) { //gesamtes Pretest-Ergebnis
  const fbm=new FeedbackManager(props.data);
  const counts=fbm.countPre();
  const text = `
  <h2>Liebe*r Studienteilnehmer*in</h2>
  <p>Im ersten Teil des Experiments vor einer Woche hattest du zu Beginn einige Aufgaben zur Bruchrechnung und zu Wahrscheinlichkeiten gerechnet. Die automatische Auswertung ergab:</p>
   <ul>
   <li><strong>Aufgaben insgesamt: ${counts.total}</strong></li>
   <li><strong>richtige Lösungen: ${counts.trueCount} (${counts.truePercent}%)</strong></li>
   <li><strong>falsche Lösungen: ${counts.falseCount} (${counts.falsePercent}%)</strong></li>
   </ul>
   
   <p>Beachte, dass diese Auswertung möglicherweise korrekte Antworten als falsch wertet, z.B., wenn zusätzlich zur Lösung noch textliche Erläuterungen gegeben wurden. Dein Ergebnis kann darum besser sein, als hier angegeben. Bei der Auswertung der Studie werden die Ergebnisse noch einmal überprüft.</p>`

  return <Html
    html={text}
    style={{
      width: '600px',
      backgroundColor: '#EEEEEE',
      padding: '10px',
      fontSize: '14px',
      lineHeight: '120%',
    }}
  />;

}


//TODO zeitabhängig zusätzlich Text anzeigen textFunction(seconds) => Text