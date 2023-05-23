import {DelayedFrame} from "../../Frames/DelayedFrame";
import React from "react";
import {MathComponent} from "mathjax-react";
import {config} from "../../config";


const items=[
  {frame: <MathCourse02/>, id:'MathCourse02'},
  {frame: <MathCourse03/>, id:'MathCourse03'},
  {frame: <MathCourse04a/>, id:'MathCourse04a'},
  {frame: <MathCourse04b/>, id:'MathCourse04b'},
  {frame: <MathCourse05/>, id:'MathCourse05'},
  {frame: <MathCourse06a/>, id:'MathCourse06a'},
  {frame: <MathCourse06b/>, id:'MathCourse06b'},
  {frame: <MathCourse07a/>, id:'MathCourse07a'},
  {frame: <MathCourse07b/>, id:'MathCourse07b'},
  {frame: <MathCourse07c/>, id:'MathCourse07c'},
  {frame: <MathCourse08/>, id:'MathCourse08'},
];

export const ebl01_MathCourse = items.map(content =>( {
  id: content.id,
  frame:    <DelayedFrame space delay={config.mathCourse.delay}> {content.frame} </DelayedFrame>
  })
);

export function MathCourse02(props) {
  return (
    <div>
      <h1>Mit Beispielen Wahrscheinlichkeitsrechnung lernen</h1>
      <h2>Übersicht über das Lernprogramm</h2>
      Das Lernprogramm besteht aus folgenden Abschnitten:
      <ol>
        <li>Lehrtext</li>
        <li>Ziele des Lernprogramms</li>
        <li>Sechzehn Beispielaufgaben zur Wahrscheinlichkeitsrechnung</li>
      </ol>
    </div>
  );
}

export function MathCourse03(props) {
  return (
    <div>
      <h1>Kleine Einführung in die Wahrscheinlichkeitsrechnung</h1>
      <p>In dem folgenden Lernprogramm sollst du aus Beispielen etwas über Wahrscheinlichkeitsrechnung lernen. Um die
        Beispiele zu verstehen, lies den folgenden Lehrtext zur Wahrscheinlichkeitsrechnung bitte aufmerksam durch. </p>
      <h2>1. Experiment und Ergebnis</h2>
      <p>Wird beispielsweise ein Würfel oder eine Münze geworfen oder wird aus einer Urne eine Kugel gezogen, so nennt
        man das ein <strong>Experiment</strong>.
        Bei einem Experiment können sich verschiedene <strong>Ergebnisse</strong> ergeben, das heißt, eine bestimmte
        Kugel wird gezogen oder eine bestimmte Zahl erscheint.
        Bei einem Münzwurf beispielsweise sind die möglichen Ergebnisse „Kopf“ und „Zahl“. </p>
    </div>
  );
}

export function MathCourse04a(props) {
  return (
    <div>
      <h2>2. Wahrscheinlichkeit eines Ergebnisses bei einem einstufigen Experiment</h2>
      <p>Nehmen wir an, dass in einem Experiment die einzelnen Ergebnisse alle gleich „wahrscheinlich“ sind, also die
        gleiche Chance haben einzutreten.</p>
      <p>Für die <strong>Wahrscheinlichkeit p eines Ergebnisses gilt:</strong></p>
      <MathComponent tex={String.raw`p(Ergebnis) = {1 \over Anzahl\ aller\ Ergebnisse}`} display={true}/>
      Beispielsweise ist die Wahrscheinlichkeit, mit einem Würfel eine „3“ zu würfeln, &nbsp;
      <MathComponent inline tex={String.raw` p = {1 \over 6}`} display={false}/>.
    </div>
  );
}

export function MathCourse04b(props) {
  return (
    <div>
      Oftmals interessiert man sich jedoch nicht für die Wahrscheinlichkeit eines einzelnen Ergebnisses,
      sondern für die Wahrscheinlichkeit eines <strong>zusammengesetzten Ereignisses </strong>
      (z.B. für die Wahrscheinlichkeit, eine gerade Zahl zu würfeln). Man definiert
      <MathComponent
        tex={String.raw`p(zusammengesetztes Ereignis) = {Anzahl\ g\ddot{u}nstiger\ Ergebnisse \over Anzahl\ aller\ Ergebnisse}`}
        display={true}/>
      Die Wahrscheinlichkeit, eine gerade Zahl zu würfeln, ist &nbsp;
      <MathComponent inline tex={String.raw` p = {3 \over 6}`} display={false}/> &nbsp;
      <p>(denn von den 6 Zahlen eines Würfels sind 3 gerade – das heißt, es gibt 3 günstige Ergebnisse bei 6 möglichen
        Ergebnissen).</p>
      Die Wahrscheinlichkeit p eines Ereignisses kann zwischen 0 und 1 liegen. <br/>
      Ist p = 1, so tritt das Ereignis sicher ein, ist p = 0, so tritt das Ereignis keinesfalls ein.
    </div>
  );
}

export function MathCourse05(props) {
  return (
    <div>
      <h1>3. Wahrscheinlichkeit einer Ergebnisfolge bei mehrstufigen Experimenten</h1>
      <p> Bei einem <strong>mehrstufigen</strong> Experiment werden zwei oder mehr „Einzelexperimente“ durchgeführt, und
        man interessiert
        sich für die Wahrscheinlichkeit einer bestimmten <strong>Ergebnisfolge</strong>.
        Ein Beispiel ist das Ziehen aus einer Urne mit Kugeln, die alle verschiedene Farben haben.
        Eine Ergebnisfolge ist beispielsweise „erst eine blaue Kugel und dann eine gelbe Kugel“.</p>
      <h2>Der Multiplikationssatz</h2>
      Will man die Wahrscheinlichkeit solcher Ergebnisfolgen berechnen, so muss man die Einzelwahrscheinlichkeiten
      miteinander multiplizieren.
      Allgemein formuliert lautet der <strong>Multiplikationssatz</strong> (Ereignis A, Ereignis B) also:
      <MathComponent inline tex={String.raw` p(A\ und\ danach\ B) = p(A) \cdot p(B)`} display={true}/>
    </div>
  );
}

export function MathCourse06a(props) {
  return (
    <div>
      <h1>4. Wahrscheinlichkeit mehrerer Ergebnisfolgen bei mehrstufigen Experimenten</h1>
      <p>Nicht immer geht es bei mehrstufigen Experimenten um eine bestimmte Reihenfolge der Ergebnisse.
        So gibt es auch mehrstufige Experimente, bei denen man sich für die Wahrscheinlichkeit interessiert,
        dass zwei oder mehr Ergebnisse überhaupt auftreten,
        <strong> unabhängig von der Reihenfolge der Ergebnisse</strong>.</p>
      <p>In diesem Fall sind <strong>mehrere Ergebnisfolgen günstig </strong>
        (z.B. „erst Ergebnis A, dann Ergebnis B“ oder „erst Ergebnis B, dann Ergebnis A“). </p>
    </div>
  );
}

export function MathCourse06b(props) {
  return (
    <div>
      <p>Zur Berechnung der Wahrscheinlichkeit, dass bei einem mehrstufigen Zufallsversuch zwei oder mehr Ergebnisse
        überhaupt auftreten,
        unabhängig von ihrer Reihenfolge, werden die Wahrscheinlichkeiten der günstigen Ergebnisfolgen addiert.
      </p>
      <p>Für den Fall, dass zwei Ergebnisfolgen günstig sind, gilt:</p>
      <MathComponent tex={String.raw` p(A\ und\ B,\ Reihenfolge\ egal) `} display={true}/>
      <MathComponent tex={String.raw`  = p(erst\ A\ dann\ B) + p(erst\ B\ dann\ A)  `}
                     display={true}/>
      <MathComponent tex={String.raw` = p(A) \cdot p(B) + p(B) \cdot p(A)`} display={true}/>
      <MathComponent tex={String.raw` = 2 \cdot p(A) \cdot p(B)`} display={true}/>
    </div>
  );
}

export function MathCourse07a(props) {
  return (
    <div>
      <h2>Vier Typen mehrstufiger Zufallsexperimente</h2>
      <p>Beachten muss man, dass es unterschiedliche Typen von mehrstufigen Experimenten gibt,
        bei denen die Anzahl der günstigen und möglichen Ergebnisse auf verschiedene Weisen bestimmt werden muss.</p>
      <p>Zwei Punkte sind dabei relevant – diese beiden Punkte werden hier an dem Beispiel „Ziehen aus einer Urne mit
        Kugeln“ erklärt:</p>
    </div>
  );
}

export function MathCourse07b(props) {
  return (
    <div>
      <h2>1. Anzahl möglicher Ergebnisse ändert sich oder bleibt gleich:</h2>
      <p>Wird eine aus einer Urne gezogene Kugel vor einer zweiten Ziehung <strong>zurückgelegt</strong>, verändert sich
        bei den
        Ziehungen
        die Anzahl der möglichen Ergebnisse <strong>nicht</strong>.</p>
      <p>Wenn eine gezogene Kugel vor einer zweiten Ziehung <strong>nicht zurückgelegt</strong> wird,
        dann gibt es bei der nächsten Ziehung ein mögliches Ergebnis weniger - die Anzahl der möglichen
        Ergebnisse <strong>wird
          also von Ziehung zu Ziehung geringer</strong>.</p>
      <div>
        <h2>2. Eine oder mehrere Ergebnisfolgen sind günstig:</h2>
        <p>Sollen zwei Kugeln in einer bestimmten Reihenfolge aus einer Urne gezogen werden (z.B. erst blau, dann
          gelb), dann gibt es <strong>nur eine günstige Ergebnisfolge</strong>. </p>
        <p>Ist die Reihenfolge der Ziehung der Kugeln hingegen irrelevant
          (egal ob erst blau oder erst gelb) dann gibt es <strong>mehrere günstige Ergebnisfolgen</strong>.</p>
      </div>
    </div>
  );
}

export function MathCourse07c(props) {
  return (
    <div><p>Aus diesen beiden Punkten leiten sich vier Typen mehrstufiger Zufallsexperimente ab.</p>
      <p>Im folgenden Lernprogramm werden dir Beispiele zu diesen vier Typen gezeigt.</p></div>
  );
}

export function MathCourse08(props) {
  return (
    <div>
      <h1>Zweck des Lernprogramms</h1>
      <p>Zweck des Lernprogramms ist es, dass du ein grundlegendes Verständnis von Zufallsexperimenten aufbaust und Aufgaben zu verschiedenen Zufallsexperimenten löst.</p>
    </div>
  );
}
