import {DelayedFrame} from "../../Frames/DelayedFrame";
import React from "react";
import {MathComponent} from "mathjax-react";
import {config} from "../../config";
import {Html} from "../../MicroComponents/Html";

const title = <Html html={'1. Lehrtext'}/>
const items=[
  {frame: <MathCourse02/>, id:'MathCourse02'},
  {frame: <MathCourse03/>, id:'MathCourse03', title},
  {frame: <MathCourse04/>, id:'MathCourse04', title},
  {frame: <MathCourse05/>, id:'MathCourse05', title},
  {frame: <MathCourse06/>, id:'MathCourse06', title},
  {frame: <MathCourse07a/>, id:'MathCourse07a', title},
  {frame: <MathCourse07b/>, id:'MathCourse07b', title},
  {frame: <MathCourse08/>, id:'MathCourse08'},
];


export const ebl02_MathCourse = items.map(content =>( {
  id: content.id,
  frame:    <DelayedFrame space title={content.title} delay={config.mathCourse.delay}> {content.frame} </DelayedFrame>
  })
);

export function MathCourse02(props) {
  return (
    <div>
      <h1>Überblick über die Studie</h1>
      <p>Du erhältst du einen kurzen Überblick über die Studie:</p>
      <ol>
        <li><strong>Lehrtext:</strong> <br/>Auf den nächsten Folien erhältst du einen Text über die Wahrscheinlichkeitsrechnung, um dein Wissen hierzu aufzufrischen. </li>
        <li><strong>Lernaufgabe:</strong> <br/>Im Anschluss erhältst du 16 Beispielaufgaben zur Wahrscheinlichkeitsrechnung.</li>
      </ol>
    </div>
  );
}

export function MathCourse03(props) {
  return (
    <div>
      <h1>Überblick:  Wahrscheinlichkeitsrechnung</h1>
      <p>Der folgende Überblick zur Wahrscheinlichkeitsrechnung wird mit Hilfe eines klassischen Beispiels erklärt: <strong>Aus
        einer Urne mit 10 durchnummerierten Kugeln werden eine oder zwei Kugeln gezogen.</strong></p>
      <p>
        Bitte lies das Folgende aufmerksam durch:
      </p>
    </div>
  );
}

export function MathCourse04(props) {
  return (
    <div>
      <p>Grundsätzlich lässt sich bei Experimenten, bei denen es nur eine Durchführung gibt (=Einzelexperimente), die Wahrscheinlichkeit p wie folgt berechnen:</p>

      <MathComponent tex={String.raw`p(\text{bestimmtes Ereignis}) = {\text{Anzahl gü  nstiger Ergebnisse} \over \text{Anzahl aller Ergebnisse}}`} display={true}/>
      Manchmal ist nur <strong>ein Ergebnis</strong> für die Fragestellung „günstig“. Z.B., wenn man bei <strong>einmaligem</strong> Ziehen aus der Urne mit 10 Kugeln die Kugel mit der Zahl 3 erhalten möchte. <p>Dann
      ist die Wahrscheinlichkeit dafür &nbsp;
      <MathComponent inline tex={String.raw` p = {1 \over 10}`} display={false}/>.</p>
    </div>
  );
}

export function MathCourse05(props) {
  return (
    <div>
      <p>Werden zwei oder mehr solcher Einzelexperimente (Ziehungen) hintereinander durchgeführt, spricht man von einem <strong>mehrstufigen
        Experiment</strong>. Dabei ist die Wahrscheinlichkeit einer bestimmten Ergebnis<strong>folge</strong> interessant. Dafür werden die <strong>Einzelwahrscheinlichkeiten
        multipliziert</strong>.</p>
        <p>Wie wahrscheinlich ist es beispielsweise, die Kugel mit der Zahl 3 (A) zu ziehen, <strong>zurückzulegen</strong>  und anschließend die Kugel mit der Zahl 7 (B) zu ziehen?
      </p>
      <p>Antwort:</p>
      <p><MathComponent inline tex={String.raw` p(A\ und\ danach\ B) = p(A) \cdot p(B) = {1 \over 10} \cdot {1 \over 10 }= {1 \over 100}`} display={true}/></p>
    </div>
  );
}


export function MathCourse06(props) {
  return (
    <div>
      <p>Bei mehrstufigen Experimenten können aber auch <strong>mehrere</strong> Ereignisfolgen günstig sein, z.B., <strong>wenn
        die Reihenfolge keine Rolle spielt</strong>. </p>
      <p>Wie wahrscheinlich ist es beispielsweise, bei zweimaligem Ziehen mit Zurücklegen, die Kugel mit der Zahl 3 (A) und die Kugel mit der Zahl 7 (B) zu ziehen, unabhängig davon, welche zuerst kommt?</p>
      <p>Hierfür werden die Wahrscheinlichkeiten der günstigen Ereignisfolgen addiert:</p>
      <MathComponent tex={String.raw` p(A\ und\ B,\ Reihenfolge\ egal) `} display={true}/>
      <MathComponent tex={String.raw`  = p(erst\ A\ dann\ B) + p(erst\ B\ dann\ A)  `}
                     display={true}/>
      <MathComponent tex={String.raw` = p(A) \cdot p(B) + p(B) \cdot p(A)`} display={true}/>
      <MathComponent tex={String.raw` = 2 \cdot p(A) \cdot p(B) = 2 \cdot {1 \over 10} \cdot {1 \over 10} = {2 \over 100}`} display={true}/>
    </div>
  );
}

export function MathCourse07a(props) {
  return (
    <div>
      <p>Die Anzahl möglicher Ergebnisse kann sich in mehrstufigen Experimenten aber auch <strong>ändern</strong>:
        Wenn eine Kugel vor einer zweiten Ziehung <strong>nicht zurückgelegt</strong> wird, dann gibt es bei der nächsten Ziehung ein mögliches Ergebnis <strong>weniger</strong> – die Anzahl der möglichen Ergebnisse wird also von Ziehung zu Ziehung <strong>geringer</strong>.
      </p>
      <p>Wie wahrscheinlich ist es beispielsweise, bei <strong>zweimaligem Ziehen ohne Zurücklegen</strong>, die Kugel mit der Zahl 3 (A) und die Kugel mit der Zahl 7 (B) zu ziehen, unabhängig davon, welche zuerst kommt?</p>
      <p>Hierfür werden die Wahrscheinlichkeiten der günstigen Ereignisfolgen addiert:</p>
      <MathComponent tex={String.raw` p(\text{A und B, Reihenfolge egal, ohne Zurü  cklegen}) `} display={true}/>
      <MathComponent tex={String.raw`  = p(erst\ A\ dann\ B) + p(erst\ B\ dann\ A)  `}
                     display={true}/>
      <MathComponent tex={String.raw` = p(A) \cdot p(B) + p(B) \cdot p(A)`} display={true}/>
      <MathComponent tex={String.raw` = 2 \cdot p(A) \cdot p(B) = 2 \cdot {1 \over 10} \cdot {1 \over 9} = {2 \over 90}`} display={true}/>
    </div>
  );
}

export function MathCourse07b(props) {
  return (
    <div>
      <p>Zusammenfassend gibt es also vier Typen mehrstufiger Zufallsexperimente:</p>
      <p><strong>Zum einen</strong> spielt die <strong>Ereignisfolge</strong> eine Rolle. Ist sie relevant, also ist <strong>eine bestimmte</strong> Reihenfolge wichtig,  oder irrelevant, gibt es also <strong>mehrere</strong> günstige Reihenfolgen.</p>

        <p><strong>Zum anderen</strong> ist zu beachten, dass sich in mehrstufigen Experimenten die Anzahl möglicher Ergebnisse auch <strong>ändern</strong> kann. Wird eine aus einer Urne gezogene Kugel vor einer zweiten Ziehung <strong>zurückgelegt</strong>, verändert sich bei den Ziehungen die Anzahl der möglichen Ergebnisse nicht.</p>
      </div>
  );
}

export function MathCourse08(props) {
  return (
    <div>
      <p>Im folgenden Lernprogramm werden Beispiele zu diesen vier Typen von Zufallsexperimenten <ul><li>Ereignisfolge
        relevant / irrelevant</li><li>Anzahl möglicher Ergebnisse verändert / gleich</li></ul> und jeweils die Berechnung der Wahrscheinlichkeit gezeigt.</p>
    </div>
  );
}
