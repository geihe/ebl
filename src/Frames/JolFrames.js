import React from 'react';
import {LikertFrame} from "./LikertFrame";

export function JolFrame1(props) {
  return (<>
      <LikertFrame
        min={0}
        max={100}
        step={10}
        unit={'%'}
        title={'<p>1. Prozedurelle Aufgaben:<br/> Du erhältst in der nächsten Einheit 12 Textaufgaben, in denen du die Wahrscheinlichkeit von bestimmten Ereignissen berechnen sollst - ähnlich wie du dies bisher kennengelernt hast.</p> ' +
        '<p><strong>Für ungefähr wieviel Prozent dieser Textaufgaben wirst du die Wahrscheinlichkeit von Ereignissen korrekt bestimmen?</strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}

export function JolFrame2(props) {
  return (<>
      <LikertFrame
        min={0}
        max={100}
        step={10}
        unit={'%'}
        title={'<p>2. Konzeptuelle Aufgaben:<br/> Du erhältst u.a. 6 offene Verständnisfragen zu den Texten und Beispielaufgaben, wie man Wahrscheinlichkeiten von Ereignissen berechnet. Du sollst diese Verständnisfragen in einem Antwortfeld schriftlich beantworten.</p> ' +
        '<p><strong>Wie gut (vollständig) wirst du diese Verständnisfragen beantworten können?</strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}

export function JolFrame3(props) {
  return (<>
      <LikertFrame
        min={0}
        max={100}
        step={10}
        unit={'%'}
        title={'<p>3. Verifikationsaufgabe Typ 1:<br/> Du erhältst u.a. weitere 8 Textaufgaben und jeweils eine rechnerische Lösung. Deine Aufgabe besteht darin, mit “Ja” oder “Nein” zu entscheiden, ob die rechnerische Lösung zur Aufgabe passt. Wenn du rätst, so ist die Zufallswahrscheinlichkeit 50% richtig zu antworten.</p> ' +
        '<p><strong> Zu ungefähr wieviel Prozent wirst du die 8 Aufgaben korrekt beantworten?</strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}

export function JolFrame4(props) {
  return (<>
      <LikertFrame
        min={0}
        max={100}
        step={10}
        unit={'%'}
        title={'<p>4. Verifikationsaufgabe Typ 2:<br/> Zuletzt erhältst du noch 8 Textaufgaben und jeweils eine Beschreibung von einem der vier Prinzipien. Deine Aufgabe besteht darin, mit “Ja” oder “Nein” zu entscheiden, ob die Beschreibung des Prinzips zur Aufgabe passt. Wenn du rätst, so ist die Zufallswahrscheinlichkeit 50% richtig zu antworten.</p> ' +
        '<p><strong> Zu ungefähr wieviel Prozent wirst du die 8 Aufgaben korrekt beantworten?</strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}

