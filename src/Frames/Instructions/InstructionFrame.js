import React from 'react';
import {DelayedFrame} from "../DelayedFrame";
import {Html} from "../../MicroComponents/Html";
import {UniBielefeld} from "../../MicroComponents/UniBielefeld";
import {config} from "../../config";
import {EBL01Video} from "../EBL/EBL01Video";
import {LikertFrame} from "../LikertFrame";
import {DelayedRadioFrame} from "../DelayedRadioFrame";
import {Form} from "../../Forms/Form";
import {MyTextArea} from "../../Forms/MyTextArea";
import * as Yup from "yup";
import {FeedbackManager} from "../../helper/FeedbackManager";


export function InstructionFrame(props) {
  const {html, header=false, ...restProps} = props;
  return (<>
      {header ? <UniBielefeld/> : null}
      <DelayedFrame
        {...restProps}
        delay={config.instructions.delay}
        animation={config.instructions.animation}
      >
        <Html html={html}/>
      </DelayedFrame>
    </>
  );
}


export function InstructionFrame01(props) {
  const html = `
  <h1>Herzlich willkommen zur Studie </h1><h2>„Mit Beispielen Wahrscheinlichkeitsrechnung lernen: Ein Lernprogramm“</h2>
  <p><strong>Hinweis:</strong></p>
  <p>Es folgt nach „Weiter mit der Leertaste“ eine Videoinstruktion.<br/>Schalte bitte deinen Ton an.<br/>Wenn das Video nicht von selbst startet, kannst du es mit der Maus starten.</p>
  `;

  return <InstructionFrame header html={html} space finish={props.finish}/>;
}

export function InstructionFrame02(props) {
  return <EBL01Video videoID={'introduction'} finish={props.finish}/>
}

export function InstructionFrame03(props) {
  const html = `
<p><strong>Schön, dass du dabei bist!</strong></p>
<p>Durch deine Teilnahme erwirbst du nicht nur neues Wissen, sondern erhältst auch einen Einblick in die aktuelle Forschung, wie man Lehren und Lernen verbessern kann. Zudem erhältst du für deine Teilnahme bei Bedarf ${config.vph} Versuchspersonenstunden für dein Psychologiestudium.</p>
  <p><strong>Navigiere während des Experiments bitte nicht mit den Vor- oder Zurückbuttons deines Browsers.</strong> Du wirst durch das Experiment geleitet. An einigen Stellen kann es einen kurzen Moment dauern, bis die nächste Ansicht zu sehen ist.</p>
  <p>Manchmal kann es vorkommen, dass das Laden von neuen Seiten einige Sekunden dauert. Warte bitte immer ab, bis du die nächste Seite siehst und klicke währenddessen nicht mit der Maus!</p>
  `;
  return <InstructionFrame header html={html} space finish={props.finish}/>;
}

export function InstructionFrame04(props) {
  const html = `
  <p>Du bekommst nun zunächst weitere Informationen über den Ablauf des Lernprogramms:</p>
<p>Heute wirst du deine Kenntnisse zur Wahrscheinlichkeitsrechnung auffrischen. </p>
<p>Auf der nächsten Seite erfährst du, aus welchen Phasen das Lernprogramm besteht.</p>
  <p><strong>Es ist wichtig, dass du die einzelnen Phasen gut kennst.</strong></p>
  <p>Nach der folgenden Seite sollst du deshalb eine kleine Verständnisaufgabe lösen.</p>
  `;

  return <InstructionFrame header html={html} space finish={props.finish}/>;
}

export function InstructionFrame06(props) {
  const html = `
<h1>Ablauf des Lernprogramms</h1>
<p><i><b>Vortest:</b></i> In <strong>12 Aufgaben</strong> wird herausgefunden, wie gut du Rechenaufgaben lösen und Wahrscheinlichkeiten bereits bestimmen kannst. </p>
<p><i><b>Lernphase:</b></i>
<ul>
<li>Du erhältst eine <strong>allgemeine Erklärung über Urnenmodelle und Stochastik</strong>. </li>
<li>Anschließend lernst du vier Prinzipien der Wahrscheinlichkeitsrechnung anhand von <strong>16 Lösungsbeispielen</strong>. </li>
<li>Nach jeweils vier Lösungsbeispielen werden dir verschiedene <strong>Fragen zu deiner kognitiven Beanspruchung und deinem Flow-Erleben</strong> gestellt. </li>
<li>Zum Abschluss der Lernphase sollst du einschätzen, wie gut du Testaufgaben zu diesen Prinzipien lösen kannst.</li>
</ul>
</p>
<p><i><b>Pause: </b></i>Der <strong>erste Teil des Experiments</strong> ist nun abgeschlossen. Nach einer Woche erhältst du eine Mail mit dem Link für den <strong>zweiten Teil</strong>.</p>
<p><i><b>Anwendungsphase:</b></i>
Zum Abschluss sollst du die Prinzipien anhand von <strong>26 Testaufgaben</strong> und <strong>16 Verifikationsaufgaben</strong> anwenden. Hierfür ist keinerlei Vorwissen von deiner Seite notwendig – alle Informationen erhältst du in dieser Studie.  
</p>
  `;

  return <InstructionFrame header html={html} space finish={props.finish}/>;
}

export function InstructionFrame07(props) {
  const html = `
  <p>Die zweite Studiensitzung erfolgt nach 7 Tagen. </p>
  <p>Du sollst dann die Prinzipien der Wahrscheinlichkeitsrechnung anhand der Testaufgaben anwenden.</p>
  <p> Abschließend erfolgt eine Aufgabe zum schlussfolgernden Denken. </p>
  `;

  return <InstructionFrame header html={html} space finish={props.finish}/>;
}

export function InstructionFrame09(props) {
  const html = `
<h1>Einverständniserklärung</h1>
<p>Allgemeine Forschungsrichtlinien sehen vor, dass sich die Teilnehmer/innen an empirischen Studien mit ihrer Unterschrift explizit und nachvollziehbar einverstanden erklären, um damit zu dokumentieren, dass du freiwillig an unserer Forschung teilnimmst.</p>

<p>Aus diesem Grund möchten wir dich bitten, zu bestätigen, dass du dich mit der Teilnahme an dieser Studie einverstanden erklären, bevor du an unserer Studie teilnehmen. Zu deiner Information sind nachfolgend einige Hinweise zu unserem Forschungsvorhaben aufgeführt.</p>

<h3>Forschungsgegenstand</h3> <p>Unsere Forschungsgruppe interessiert sich für die menschliche Informationsverarbeitung. Die vorliegende Studie beschäftigt sich mit einem wichtigen Teilaspekt dieses Themengebiets.</p>

<h3>Ablauf der Untersuchung</h3> In der vorliegenden Untersuchung wirst du eine oder mehrere der folgenden Tätigkeiten durchführen:

<p>Fragen beantworten, Urteile abgeben, Informationen aus dem Gedächtnis abrufen und / oder lernen, Denkaufgaben bearbeiten und / oder bestimmte Aufgabenstellungen am Computer ausführen. Es ist für unsere Forschung wichtig, dass du die einzelnen Aufgaben und Tätigkeiten in der vorgegebenen Reihenfolge bearbeitest.</p>

<h3>Möglicher Nutzen</h3> <p>Durch deine Teilnahme an dieser Studie hast du die Möglichkeit, nähere Einblicke in die psychologische Forschung zu erhalten sowie stochastische Kenntnisse aufzufrischen. Darüber hinaus helfen die Ergebnisse dieser Studie uns allen in unserem Verständnis wie wir Informationen lernen und verarbeiten.</p>

<h3>Vertraulichkeit und Datennutzung</h3> <p>Personenbezogene Daten (Alter, Geschlecht, etc.) werden nur so weit wie nötig aufgezeichnet. Deine Daten sind selbstverständlich vertraulich und werden nur in anonymisierter Form genutzt. Die von uns erhobenen demographischen Angaben lassen keinen eindeutigen Schluss auf deine Person zu. Wir werden dich am Ende des ersten Teiles bitten, deine E-Mail-Adresse zu hinterlegen, um einen Link für die zweite Sitzung der Studie zu erhalten. Diese Information wird separat erhoben und wird nicht mit den erhobenen Daten zusammengefügt, so dass die Anonymität der Daten gewährleistet ist. Zu keinem weiteren Zeitpunkt im Rahmen der jeweiligen Untersuchung werden wir dich bitten, deinen Namen oder andere eindeutige Informationen zu nennen.</p>

<p>Die Ergebnisse und Daten dieser Studie werden ggf. als wissenschaftliche Publikation veröffentlicht. Dies geschieht in vollständig anonymisierter Form, d.h. ohne dass die Daten einer spezifischen Person zugeordnet werden können. Nach Abschluss der Studie werden die Daten ggf. in einem gesicherten Datenarchiv, wie z.B. dem „Open Science Framework“ öffentlich zugänglich gemacht. Zweck, Art und Umfang der potentiellen Nachnutzung im Rahmen von Open-Data stehen noch nicht fest, aber die Daten werden nur anonymisiert im Rahmen von Open-Science veröffentlicht. Die Löschung der Daten aus einem anonymisierten Datensatz ist nicht möglich. Mit diesem Vorgehen folgt das Forschungsprojekt den Empfehlungen der Deutschen Forschungsgemeinschaft (DFG) und der Deutschen Gesellschaft für Psychologie (DGPs) zur Qualitätssicherung der Forschung.</p>

<h3>Mit der Teilnahme verbundene Erfahrungen</h3> <p>Durch die Teilnahme an dieser Studie entsteht kein Risiko, das über die Risiken des alltäglichen Lebens hinausgeht. Der genaue Zweck dieser Untersuchung kann Ihnen erst am Ende der Studie ausführlich und vollständig dargestellt werden, da die Gültigkeit der Ergebnisse ansonsten beeinflusst werden könnte. Durch die Bestätigung in der Online-Studie, dass du diese Einverständniserklärung gelesen hast, erklärst du dich damit einverstanden, erst am Ende der Untersuchung vollständig über den genaueren inhaltlichen Zweck der Studie informiert zu werden.</p>

<h3>Freiwilligkeit</h3> <p>Die Teilnahme an der Studie ist freiwillig. Du kannst jederzeit und ohne Angabe von Gründen die Teilnahme an dieser Studie beenden, ohne dass dir daraus Nachteile entstehen. Als Aufwandsentschädigung hast du die Möglichkeit, dir zwei Versuchspersonenstunden für die Teilnahme an dieser Studie anrechnen zu lassen. Auch wenn du die Studie vorzeitig abbrichst, hast du Anspruch auf entsprechende Versuchspersonenstunden für den bis dahin erbrachten Zeitaufwand.</p> 

<h3>Verantwortliche Stelle für diese Studie</h3>
<p>Das Forschungsprojekt „Lernerfolg und Metakognition beim Lernen von Studienmaterialien“ wird durchgeführt von der Universität Würzburg, Lehrstuhl Psychologie IV, von Dr. Veit Kubik. Kooperationspartner in diesem Projekt sind Prof. Dr. Alexander Renkl von der Albert-Ludwigs-Universität Freiburg und Prof. Dr. Robert Gaschler von der Fernuniversität Hagen. Die Studie wird eigenverantwortlich im Rahmen der Habilitation von Dr. Veit Kubik durchgeführt.</p>

<h3>Offene Fragen</h3><p>Bei offenen Fragen oder Fragen zur Teilnahme, Freiwilligkeit und Datennutzung melde dich gerne bei dem Projektverantwortlichen:  Dr. Veit Kubik</p>
<p>
E-Mail: <a href= "mailto:veit.kubik@uni-wuerzburg.de">veit.kubik@uni-wuerzburg.de</a><br/>
Tel.: +49 931 31-81532<br/>
Web.: <a href="https://www.psychologie.uni-wuerzburg.de/paepsy/mitarbeiterinnen/dr-veit-kubik/">https://www.psychologie.uni-wuerzburg.de/paepsy/mitarbeiterinnen/dr-veit-kubik/</a>
</p>
<h3>Einwilligung</h3>
<p>Ich habe die Teilnahmeinformation zum Forschungsprojekt „Lernerfolg und Metakognition beim Lernen  von Studienmaterialien“ zur Kenntnis genommen. Ich bin ausreichend informiert worden. Mir ist bewusst, dass meine Teilnahme an der Studie freiwillig ist und bei einer Verweigerung meiner Einwilligung für mich keinerlei Nachteile entstehen. Eine Kopie der Informationsschrift und dieser Einwilligungserklärung habe ich heruntergeladen und somit erhalten.</p><p>Wenn du mit unserem Vorhaben einverstanden bist, so klicke bitte auf <i>Einverstanden</i>. Falls nicht, so klicke bitte auf <i>Nicht einverstanden</i>.</p><p>Wir danken dir für deine Mitwirkung und dein Vertrauen.</p>`;

  return <InstructionFrame header html={html}  cancelButton continueButtonText="Einverstanden" cancelButtonText="Nicht einverstanden" finish={props.finish}/>;
}

export function InstructionFrame10(props) {
  const html = `
<h1>Wichtiger Hinweis</h1>
  <p>Diese Studie ist Teil eines wissenschaftlichen Projekts, das in Fachzeitschriften der Psychologie veröffentlicht wird. Wir möchten dich bitten, den Test - <strong>ohne Unterbrechung</strong> - bis zum Ende durchzuführen. Bitte stelle sicher, dass du während der Bearbeitung der Aufgaben nicht gestört wirst. Es ist wichtig, dass du die folgenden Vorkehrungen getroffen hast und dein Einverständnis mit einem Klick auf "Einverstanden" bestätigst: </p>
<ul>
    <li>Ich befinde mich in einem ruhigen Raum. </li>
    <li>Ich mache mir während des Experiments keine schriftlichen Notizen.</li>
    <li>Ich habe die nötigen Vorkehrungen getroffen, sodass ich im Verlauf der Studie in der nächsten Stunde nicht bei der Aufgabenbearbeitung unterbrochen werde. </li>
    <li>Mein Mobiltelefon liegt außerhalb meiner Reich- und Sichtweite und ist auf stumm gestellt oder ausgeschaltet. </li>
</ul>
<p>Mit der konzentrierten Bearbeitung der Aufgaben trägst du dazu bei, die Qualität der Studie und der Ergebnisse zu sichern. Vielen Dank! </p>
  `;

  return <InstructionFrame header html={html} cancelButton continueButtonText="Einverstanden" cancelButtonText="Abbrechen" finish={props.finish}/>;
}

export function InstructionFrame11(props) {
  const html = `
  <h1>Teilnahme</h1>
  <p>Wenn du an der Studie teilnehmen möchtest, klicke bitte auf <strong>"Jetzt teilnehmen"</strong>. </p>
  <p>Falls du im Moment keine störungsfreien Bedingungen vorfindest, so kannst du gerne zu einem anderen, günstigeren Zeitpunkt an dieser Studie teilnehmen. Klicke dafür bitte auf <strong>"Später teilnehmen"</strong>. </p>
  `;

  return <InstructionFrame header html={html}  cancelButton continueButtonText="Jetzt teilnehmen" cancelButtonText="Später teilnehmen" finish={props.finish}/>;
}

export function InstructionFrameImLabor(props) {
  const html = `
  <h1>Laborstudie</h1>
  <p>Auch der zweite Teil der Studie wird im Labor durchgeführt. Solltest du zu Hause auf den Link in der Mail geklickt haben, dann mache hier bitte nicht weiter.</p>
  <p></p>
  <p>Wenn du im Labor bist, starte die zweite Sitzung mit  <strong>"Ich bin im Labor"</strong>. </p>
  <p>Falls du den Link zu Hause geöffnet hast, klicke auf <strong>"Später teilnehmen"</strong>. </p>
  `;

  return <InstructionFrame header html={html}  cancelButton continueButtonText="Ich bin im Labor" cancelButtonText="Später teilnehmen" finish={props.finish}/>;
}

export function InstructionFrame12(props) {
  const html = `
  <h1>Einverständniserklärung I</h1>
  <p>Bestätige bitte dein Einverständnis, indem du auf "Einverstanden" klickst.  </p>
<ul>
    <li>Ich habe die Informationen über die Ziele und den Ablauf der Online-Studie gelesen und fühle mich ausreichend informiert. Ich weiß um die Möglichkeit, bei Fragen den Studienleiter zu kontaktieren. </li>
    <li>Ich habe verstanden, dass ich die Studie jederzeit ohne eine Angabe von Gründen abbrechen kann, ohne dass mir persönliche Nachteile hieraus entstehen. </li>
    <li>Ich habe verstanden, dass nach Abschluss der Datenerhebung prinzipiell keine Zuordnung zwischen den Daten im Datensatz und meinen personenbezogenen Daten (Name, Mailadresse) möglich ist und somit der von mir produzierte Datensatz nicht gezielt gelöscht werden kann. </li>
    <li>Ich bin mit der angegebenen Art der sachgemäßen Verarbeitung, Speicherung und Weitergabe meiner vollständig anonymisiert erhobenen Daten in dieser Onlinestudie einverstanden. </li>
    <li>Für die vollständige Teilnahme an dieser Studie erhalten ich ${config.vph} Versuchspersonenstunden.</li>
</ul>
  `;

  return <InstructionFrame header html={html}  cancelButton continueButtonText="Einverstanden" cancelButtonText="Abbrechen"  finish={props.finish}/>;
}

export function InstructionFrame13(props) {
  const html = `
  <h1>Einverständniserklärung II</h1>
  <p>Bestätige bitte dein Einverständnis, indem du auf "Einverstanden" klickst.  </p>
<ul>
    <li>Ich habe verstanden, dass die vollständig anonymisierten Daten dieser Studie nach Abschluss der Studie ggf. als offene Daten im Internet in einem gesicherten Datenarchiv „Open Science Framework“ zugänglich gemacht werden. Damit folgt diese Studie den Empfehlungen der Deutschen Forschungsgesellschaft (DFG) und Deutschen Gesellschaft für Psychologie (DGPs) zur Qualitätssicherung in der Forschung. </li>
    <li>Ich erkläre mich hiermit freiwillig zur Teilnahme an dieser Onlinestudie bereit und fühle mich zum aktuellen Zeitpunkt in der Lage an dieser teilzunehmen. </li>
    <li>Ich bin volljährig, d. h. mindestens 18 Jahre alt. </li>
</ul>
<p>Wir freuen uns sehr über deine Teilnahme</p>
  `;

  return <InstructionFrame html={html}  cancelButton continueButtonText="Einverstanden" cancelButtonText="Abbrechen"  finish={props.finish}/>;
}

export function InstructionFrame14(props) {
  const html = `
  <h1>Rückfragen</h1>
  <p>Bei Rückfragen oder Hinweisen zu diesem Forschungsprojekt wende dich bitte an: <p><a href="mailto: veit.kubik@uni-bielefeld.de">veit.kubik@uni-bielefeld.de</a></p></p>
  <p><strong>Vielen Dank für deine Unterstützung! </strong></p>
  <p>Mit herzlichen Grüßen <br/>Dr. Veit Kubik </p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame09_IIalt(props) {
  const html = `
  <p>Durch deine Teilnahme erwirbst du nicht nur neues Wissen, sondern erhältst auch einen Einblick in die aktuelle Forschung. Außerdem erhältst du für deine Teilnahme bei Bedarf ${config.vph} Versuchspersonenstunden für dein Psychologiestudium.</p>
  <p>Durch deine Teilnahme unterstützt du den Informationsgewinn zu Prozessen beim Lernen und somit die Erweiterung des bisherigen Kenntnisstands der Forschung. Deine Teilnahme ist mit keinerlei Risiken für dich verbunden. Sie erfolgt anonym. Ein Rückschluss von den erhobenen Daten auf deine Person ist nicht möglich. Die Daten werden selbstverständlich vertraulich behandelt und ausschließlich für den angegebenen Forschungszweck verwendet. Durch Beenden der Teilnahme hast du bis zum Ende der Sitzung die Möglichkeit, der Speicherung der Daten nicht zuzustimmen. </p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}


export function InstructionFrame16a(props) {
  const html = `
<p>Noch ein Hinweis: Diese Studie schließt an frühere Studien an. Wir wollen die Ergebnisse vergleichen, darum haben wir möglichst wenig am Ablauf geändert. Deshalb haben eine feste Zeit für die Beispiele vorgesehen.</p>
<p>Am Ende der 2. Sitzung können wir dir aber eine kurze Rünckmeldung zur Richtigkeit deiner Anzworten geben.</p>
<strong>Bitte drücke auf die Leertaste, dann geht es mit dem Vortest los.</strong>
  `;
  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame16b(props) {
  const html = `
  <h1>Vortest</h1>
<p>Dir werden nun 12 Aufgaben präsentiert. Du sollst die Aufgaben berechnen und die jeweilige Lösung in das Notizfeld eintippen. </p>
  <p>Mögliche Eingaben sind zum Beispiel
  <ul>
  <li>2 * 1/4 * 1/3</li>
  <li>2/12   (Der Bruch muss nicht gekürzt werden.)</li>
  <li>1/6  (Er darf aber gekürzt werden!)</li>
</ul>
</p>
<p>Bestätige deine Eingabe mit [<strong>Enter</strong>]. Du wirst dann automatisch zur nächsten Aufgabe weitergeleitet.</p>
  `;
  return <InstructionFrame html={html} space finish={props.finish}/>;
}
export function InstructionFrame17(props) {
  const html = `
  <h1>Du hast den Vortest abgeschlossen - vielen Dank! </h1>
<p>Mit der Leertaste wirst du automatisch zum Lernprogramm weitergeleitet. </p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame100_control_12(props) {
  const html = `
  <h1>Aufbau des Lernprogramms I</h1>
  <p>Auf jeder Seite des Lernprogramms werden dir vier Beispielaufgaben präsentiert. Du sollst diese Aufgaben aufmerksam lesen und versuchen, die Lösung nachzuvollziehen. </p>
  <p>Es erscheint ein Textfeld, in dem du deine Gedanken aufschreiben kannst.</p>
  <p>Du durchläufst vier Durchgänge mit jeweils vier Beispielaufgaben, sodass dir <strong>insgesamt 16 Aufgaben präsentiert werden.</strong></p>
  <p>Für die Bearbeitung von je vier Beispielaufgaben hast du mindestens sechs Minuten Zeit. Du solltest alle Texte sorgfältig lesen, alle Lösungen genau nachvollziehen. Nach Ablauf der sechs Minuten kannst du mit der Befragung deines Flow-Erlebens und deiner kognitiven Beanspruchung weitermachen. Du kannst dann nicht mehr zurückgehen. Ein Timer wird eingeblendet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame100_experiment_34(props) {
  const html = `
  <h1>Aufbau des Lernprogramms I</h1>
  <p>Auf jeder Seite des Lernprogramms werden dir vier Beispielaufgaben präsentiert. Du sollst diese Aufgaben aufmerksam lesen und versuchen, die Lösung nachzuvollziehen. </p>
  <p>Es erscheinen vier Textfelder mit Fragen zu den Beispielen. </p>
  <p>Du durchläufst vier Durchgänge mit jeweils vier Beispielaufgaben, sodass dir <strong>insgesamt 16 Aufgaben präsentiert werden.</strong></p>
  <p>Für die Bearbeitung von je vier Beispielaufgaben hast du mindestens sechs Minuten Zeit. Du solltest alle Texte sorgfältig lesen, alle Lösungen genau nachvollziehen. Nach Ablauf der sechs Minuten kannst du mit der Befragung deines Flow-Erlebens und deiner kognitiven Beanspruchung weitermachen. Du kannst dann nicht mehr zurückgehen. Ein Timer wird eingeblendet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame101(props) {
  const html = `
  <h1>Aufbau des Lernprogramms II</h1>
  <p>Zum Abschluss jeder der vier Durchgänge erfolgt eine Befragung zu deinem Flow-Erleben und deiner kognitiven Beanspruchung. Dir werden 18 verschiedene Aussagen präsentiert. Du sollst dann auf einer Skala entscheiden, inwiefern jede dieser Aussagen auf dich zutrifft. Es ist wichtig, dass du die Fragen wahrheitsgemäß beantwortest. </p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame102(props) {
  const html = `
<p>Nun wirst du erneut 4 Beispielaufgaben erhalten.</p> 
<p>Drücke auf die Leertaste, wenn du bereit bist.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame103(props) {
  const html = `
<p>Auf den folgenden vier Seiten sollst du einschätzen, wie du beim Lösen der Aufgaben vorgegangen bist.</p> 
<p>Drücke auf die Leertaste, wenn du bereit bist.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame104(props) {
  const html = `
<p>Auf den folgenden vier Seiten sollst du einschätzen, wie gut du nun verschiedene Typen von Aufgaben bearbeiten kannst.</p> 
<p>Drücke auf die Leertaste, wenn du bereit bist.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame200(props) {
  const html = `
<h1>Willkommen zurück!</h1>
<p>Heute schauen wir, wie erfolgreich das Lernen mit Beispielen in der vorigen Woche war. In diesem letzten Abschnitt der Studie werden dir verschiedene Aufgaben präsentiert, die deinen Lernerfolg messen. Es ist deshalb wichtig, dass du bitte keine Hilfsmittel (z.B. Internetseiten) benutzt und konzentriert arbeitest.</p>
  <p>Es gibt kein Zeitlimit, arbeite die Aufgaben aber bitte kontinuierlich durch.</p>
  <p>Viel Erfolg!</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}



export function InstructionFrame201(props) {
  const html = `
  <p>Dir werden nun 16 Aufgaben präsentiert. Du sollst die Aufgaben berechnen und die jeweilige Lösung in das Notizfeld eintippen. </p>
  <p>Bitte nutze [/] um Brüche auszudrücken. Wenn du eine Multiplikation schreiben möchtest, verwende dafür das Malzeichen [*]. </p>
  <p>Mögliche Eingaben sind zum Beispiel
  <ul>
  <li>2 * 1/4 * 1/3</li>
  <li>2/12   (Der Bruch muss nicht gekürzt werden.)</li>
  <li>1/6  (Er darf aber gekürzt werden!)</li>
</ul>
</p>
  <p>
  Bestätige deine Eingabe mit [Enter]. Du wirst dann automatisch zur nächsten Aufgabe weitergeleitet.
</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame202(props) {
  const html = `
  <p>Vielen Dank für die Berechnung der Aufgaben!</p>
  <p>Dir werden nun zehn weitere Aufgaben präsentiert. Vier Aufgaben erfordern, dass du eine Antwort aus vier Antwortmöglichkeiten auswählst. Triff deine Entscheidung überlegt, du kannst dich nicht umentscheiden.</p>
  <p>Sechs weitere Aufgaben sind offene Fragen. Bitte tippe die Antworten mithilfe der Tastatur in das Notizfeld und bestätige deine Eingabe mit [Enter].</p>
  <p>Lies die Aufgaben aufmerksam durch, überlege genau und entscheide dich dann für eine Antwort. Es ist wichtig, dass du die offenen Fragen <strong>in ganzen Sätzen und so genau wie möglich</strong> beantwortest. Du kannst nicht mehr zurückgehen.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame203(props) {
  const html = `
  <p>Vielen Dank!</p>
  <p>Dir werden nun 16 Textaufgaben präsentiert. Achtmal erhältst du zur Textaufgabe eine rechnerische Lösung. Bei acht weiteren Textaufgaben erhältst du eine Beschreibung eines der vier Prinzipien. </p>
  <p>Deine Aufgabe besteht nun darin, zu entscheiden, ob die rechnerische Lösung bzw. die Beschreibung des Prinzips zur Aufgabe passt. </p>
  <p>Lies die Aufgaben aufmerksam durch, überlege gut und entscheide dich dann für eine Antwort. Du wirst nach deiner Antwortwahl automatisch zur nächsten Antwort weitergeleitet. Du kannst nicht mehr zurückgehen.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame21alt(props) {
  return <EBL01Video videoID={'outro'} finish={props.finish}/>
}

export function InstructionFrame204keinFeedback(props) {
  const html = `
  <h1>Feedback</h1>
<p>Leider können wir dir kein Feedback geben, ob deine Antworten richtig waren. Das hat zwei Gründe: </p>
<ol>
<li>In dieser Studie konnten die meisten Fragen als freier Text beantwortet werden. Eine automatische Auswertung ist deswegen nicht möglich.</li>
<li>Die Anzeige der richtigen Ergebnisse unmittelbar nach der Beantwortung würde die Ergebnisse verfälschen. Die Daten der Studie wären dann nicht mehr mit älteren ähnlichen Studien vergleichbar.</li>
</ol>
 `;


  return <InstructionFrame html={html} space finish={props.finish}/>;
}
export function InstructionFrame204a(props) {
  const html = `
  <h1>Abschließende Fragen</h1>
<p>Diese Fragen sind zur Beurteilung der wissenschaftlichen Datenqualität unserer Studie von besonderer Bedeutung. Für die Berücksichtigung deiner anonymen Daten ist es beispielsweise wichtig, dass du dich hinreichend konzentrieren und dass du die Instruktionen lesen und die präsentierten Aufgaben verstehen konntest. </p>
<p>Die Beantwortung der Fragen trägt wesentlich zur Datenqualität unserer Studie bei. Deine Antworten sind anonym und können somit nicht auf deine Person zurückgeführt werden. </p>
<p>Es ist wichtig, dass du wahrheitsgetreu antwortest.</p>
 `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame206(props) {
  return (
    <>
      <LikertFrame
        max={7}
        minText={'sehr wenig'} maxText={'sehr viel'}
        title={'In welchem Umfang wurdest du während dieser Studie von deiner Umgebung gestört?'}
        finish={props.finish}/>
    </>)
}

export function InstructionFrame207(props) {
  return (
    <>
      <LikertFrame
        max={7}
        minText={'sehr schlecht'} maxText={'sehr gut'}
        title={'In welchem Umfang konntest du dich auf die vorgegebenen Lernaufgaben konzentrieren?'}
        finish={props.finish}/>
    </>)
}

export function InstructionFrame208(props) {
  const options = [
    {
      label: 'Ich habe schon einmal an DERSELBEN Studie teilgenommen.',
      value: 'Ich habe schon einmal an DERSELBEN Studie teilgenommen.',
    },
    {
      label: 'Ich habe schon einmal an einer ÄHNLICHEN Studie teilgenommen.',
      value: 'Ich habe schon einmal an einer ÄHNLICHEN Studie teilgenommen.',
    },
    {
      label: 'Ich habe noch NICHT an dieser oder einer ähnlichen Studie teilgenommen.',
      value: 'Ich habe noch NICHT an dieser oder einer ähnlichen Studie teilgenommen.',
    },
  ]

  return <>
    <DelayedRadioFrame
    large
    options={options}
    label={'Wähle die Antwort, die auf dich zutrifft:'}
    name={'teilgenommen?'}
    finish={props.finish}
  />
  </>
}

export function InstructionFrame209(props) {
  const options = [
    {
      label: 'Ich habe ernsthaft teilgenommen und die Aufgaben entsprechend bearbeitet',
      value: 'Ich habe ernsthaft teilgenommen und die Aufgaben entsprechend bearbeitet',
    },
    {
      label: 'Ich habe nicht ernsthaft teilgenommen und mich (teilweise) unaufmerksam durchgeklickt. ',
      value: 'Ich habe nicht ernsthaft teilgenommen und mich (teilweise) unaufmerksam durchgeklickt. ',
    },
  ]

  return <>
    <DelayedRadioFrame
      large
      options={options}
      label={`
      In welcher Form hast du an der Studie teilgenommen?  
      Bitte beantworte diese Frage wahrheitsgemäß, damit wir möglichst gültige Aussagen über die Forschungsdaten dieser Studie treffen können.
      Deine Antwort hat keinerlei Auswirkungen für dich bzw. auf die Ausstellung deiner Versuchspersonenstunden. Habe vielen Dank hierfür.
      `}
      name={'ernsthaft?'}
      finish={props.finish}
    />
  </>
}

export function InstructionFrame210(props) {
  const options = [
    {
      label: 'Nein',
      value: 'Hilsmittel? Nein'
    },
    {
      label: 'Ja',
      value: 'Hilsmittel? Ja'
    },
  ]

  return <>
    <DelayedRadioFrame
    large
    options={options}
    label={'Hast du externe Hilfsmittel verwendet (z.B. im Internet recherchiert)?'}
    name={'Hilsmittel?'}
    finish={props.finish}
  />
  </>
}

export function InstructionFrame211a(props) {
  const options = [
    {
      label: 'Nein',
      value: 'Schwierigkeiten? Nein'
    },
    {
      label: 'Ja',
      value: 'Schwierigkeiten? Ja'
    },
  ]

  return <>
    <DelayedRadioFrame
    large
    options={options}
    label={{de: 'Hattest du besondere Schwierigkeiten bei der Bearbeitung der Aufgaben?'}}
    name={'Schwierigkeiten?'}
    finish={props.finish}
  />
  </>
}
export function InstructionFrame211b(props) {
  const initial = {feedback: ''};
  let data=initial;
  const validationSchema = Yup.object();

  return <>
    <Form initial={initial}  finish={props.finish} validationSchema={validationSchema}>
    <MyTextArea style={{width: '100%'}}
      large
      name={'feedbackSchwierigkeit'}
      label={'Welche Schwierigkeit ist aufgetreten?'}
    />
    </Form>
  </>
}

export function InstructionFrame212(props) {
  const initial = {feedbackAllgemein: ''};
  let data=initial;
  const validationSchema = Yup.object();


  return <>
    <Form initial={initial}  finish={props.finish} validationSchema={validationSchema}>
    <MyTextArea style={{width: '100%'}}
      large
      name={'feedbackAllgemein'}
      label={'Möchtest du uns zu dem Experiment noch etwas mitteilen? Dann trage es hier ins Textfeld ein:'}
    />
    </Form>
  </>
}

export function ShowStudyCode(props) {
  const {code, random}=props;
  const codePre = "EBL04-";
  const codeSuffix = "";
  const codeMain = random ?
    Math.floor(Math.random()*52940 + 5883)*17
    : code;
  const codeString = codePre + codeMain+codeSuffix;
  const html = `
<h2>Wenn du eine Versuchspersonenbescheinigung für das Experiment haben möchtest, dann notiere den folgenden Code:</h2>
<h2 style="text-align:center; font-size: 50px; font-family: monospace"><strong>${codeString}</strong></h2>
<p></p>
<p>Solltest du keine Bescheinigung benötigen, dann ist das Experiment abgeschlossen und du kannst das Browserfenster nun schließen. </p>
<p>Sonst drücke die Leertaste.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function EndLab(props) {
  const html = `
<h1>Du hast das Ende der Studie erreicht.</h1>
  <p>Vielen Dank für deine Teilnahme.</p>
  <p>Bitte wende dich an den/die Versuchsleiter/in.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function Feedback01Announce(props) {
  const html = `
<h1>Du hast nun fast das Ende der Studie erreicht.</h1>
  <p>Wir möchten dir nun - soweit möglich - ein kurzes Feedback zu deinen Antworten geben.</p>
  <p></p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}
export function Feedback02Gebunden(props) {
  const fbm=new FeedbackManager(props.data);
  const counts=fbm.countAlleGebunden();
  const html = `
<h1>Multiple Choice - Auswahl</h1>
  <p>Bei einigen Aufgaben im zweiten Teil solltest du die richtige Antwort anklicken.</p>
   <p>Diese können automatisch ausgewertet werden:</p>
  <p></p>
     <ul>
   <li><strong>Aufgaben insgesamt: ${counts.total}</strong></li>
   <li><strong>richtige Lösungen: ${counts.trueCount} (${counts.truePercent}%)</strong></li>
   <li><strong>falsche Lösungen: ${counts.falseCount} (${counts.falsePercent}%)</strong></li>
   </ul>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function Feedback03Halbautomatisch(props) {
  const html = `
    <h1>Halbautomatische Auswertungen</h1>
    <p>Bei den meisten Aufgaben solltest du ein Ergebnis eingeben. <strong>Beachte, dass bei der Auswertung möglicherweise korrekte Antworten als falsch gewertet</strong>, z.B., wenn zusätzlich zur Lösung noch textliche Erläuterungen gegeben wurden. <strong>Dein Ergebnis kann darum besser sein, als auf den folgenden Seiten angegeben. </strong></p>
    <p>Bei der Auswertung der Studie werden die Ergebnisse noch einmal überprüft.</p>
  `;
  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function Feedback04Pre(props) {
  const fbm=new FeedbackManager(props.data);
  const counts=fbm.countPre();
  const html = `
<h1>Vortest</h1>
  <p>Zu Anfang der ersten Sitzung solltest du als Vortest einige Fragen beantworten. Hier das Ergebnis der automatischen Auswertung:</p>
  <p></p>
     <ul>
   <li><strong>Aufgaben insgesamt: ${counts.total}</strong></li>
   <li><strong>richtige Lösungen: ${counts.trueCount} (${counts.truePercent}%)</strong></li>
   <li><strong>falsche Lösungen: ${counts.falseCount} (${counts.falsePercent}%)</strong></li>
   </ul>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}
export function Feedback05Post(props) {
  const fbm=new FeedbackManager(props.data);
  const counts=fbm.countPost();
  const html = `
<h1>Zweite Sitzung</h1>
  <p>Hier das Ergebnis der automatischen Auswertung zur zweiten Sitzung:</p>
  <p></p>
     <ul>
   <li><strong>Aufgaben insgesamt: ${counts.total}</strong></li>
   <li><strong>richtige Lösungen: ${counts.trueCount} (${counts.truePercent}%)</strong></li>
   <li><strong>falsche Lösungen: ${counts.falseCount} (${counts.falsePercent}%)</strong></li>
   </ul>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}
export function Feedback06PrePost(props) {
  const fbm=new FeedbackManager(props.data);
  const counts1=fbm.countPrePost1();
  const counts2=fbm.countPrePost2();
  const html = `
<h1>Vergleich</h1>
  <p>Vier Aufgaben wurden dir zweimal gestellt - jeweils zu Beginn der ersten und zweiten Sitzung. Beim zweiten Mal ist ein besseres Ergebnis zu erwarten. Hier ist der Vergleich der automatischen Auswertung:</p>
  <p></p>
     <ul>
   <li><strong>richtige Lösungen zu Beginn: ${counts1.trueCount} (${counts1.truePercent}%)</strong></li>
   <li><strong>richtige Lösungen beim zweiten Mal: ${counts2.falseCount} (${counts2.falsePercent}%)</strong></li>
   </ul>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}
export function Feedback07Offen(props) {
  const html = `
<h1>Offene Antworten</h1>
  <p>Bei einige Aufgaben solltest du im Text etwas erläutern.</p>
  <p> Diese Aufgaben können nicht automatisch ausgewertet werden.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}