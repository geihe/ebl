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


export function InstructionFrameTest(props) {
  const html = `
<h1>Wichtiger Hinweis</h1>
  <p>Diese Studie ist Teil eines wissenschaftlichen Projekts, das in Fachzeitschriften der Psychologie veröffentlicht wird. Wir möchten dich bitten, den Test - <strong>ohne Unterbrechung</strong> - bis zum Ende durchzuführen. Bitte stelle sicher, dass du während der Bearbeitung der Aufgaben nicht gestört wirst. Es ist wichtig, dass du die folgenden Vorkehrungen getroffen hast und dein Einverständnis mit einem Klick auf "Einverstanden" bestätigst: </p>
    <li>Ich befinde mich in einem ruhigen Raum. </li>
    <li>Ich habe die nötigen Vorkehrungen getroffen, sodass ich im Verlauf der Studie nicht bei der Aufgabenbearbeitung unterbrochen werde. </li>
    <li>Mein Mobiltelefon liegt außerhalb meiner Reich- und Sichtweite und ist auf stumm gestellt oder ausgeschaltet. </li>
</ul>
<p>Mit der konzentrierten Bearbeitung der Aufgaben trägst du dazu bei, die Qualität der Studie und der Ergebnisse zu sichern. Vielen Dank! </p>
  `;

  return <InstructionFrame html={html} cancelButton continueButtonText="Einverstanden" cancelButtonText="Abbrechen" finish={props.finish}/>;
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
<p><i><b>Vortest:</b></i> in <strong>12 Aufgaben</strong> wird herausgefunden, wie gut du Rechenaufgaben lösen und Wahrscheinlichkeiten bereits bestimmen kannst. </p>
<p><i><b>Lernphase:</b></i>
<ul>
<li>Du erhältst eine <strong>allgemeine Erklärung über Urnenmodelle und Stochastik</strong>. </li>
<li>Anschließend lernst du vier Prinzipien der Wahrscheinlichkeitsrechnung anhand von <strong>16 Lösungsbeispielen</strong>. Zu jedem Lösungsbeispiel erhältst du Fragen im Multiple Choice-Format. </li>
<li>Nach jeweils vier Lösungsbeispielen werden dir verschiedene <strong>Fragen zu deiner kognitiven Beanspruchung und deinem Flow-Erleben</strong> gestellt. </li>
<li>Zum Abschluss der Lernphase sollst du einschätzen, wie gut du Testaufgaben zu diesen Prinzipien lösen kannst.</li>
</ul>
</p>
<p><i><b>Pause: </b></i>Du hast 10 Minuten Zeit dich zu entspannen.</p>
<p><i><b>Anwendungsphase:</b></i>
Zum Abschluss sollst du die Prinzipien anhand von <strong>26 Testaufgaben</strong> und <strong>16 Verifikationsaufgaben</strong> anwenden. Hierfür ist keinerlei Vorwissen von deiner Seite notwendig – alle Informationen erhältst du ausschließlich in dieser Studie.  
</p>
  `;

  return <InstructionFrame header html={html} space finish={props.finish}/>;
}

export function InstructionFrame07(props) {
  const html = `
  <p>Die zweite Studiensitzung erfolgt nach 7 Tagen. </p>
  <p>Du sollst dann erneut die Prinzipien der Wahrscheinlichkeitsrechnung anhand der Testaufgaben anwenden.</p>
  <p> Abschließend erfolgt eine Aufgabe zum schlussfolgernden Denken. </p>

  `;

  return <InstructionFrame header html={html} space finish={props.finish}/>;
}

export function InstructionFrame09(props) {
  const html = `<h3>Freiwilligkeit</h3> <p>Die Teilnahme an der Studie ist freiwillig. Du kannst jederzeit und ohne Angabe von Gründen die Teilnahme an dieser Studie beenden, ohne dass dir daraus Nachteile entstehen. Auch wenn du die Studie vorzeitig abbrichst hast du Anspruch auf entsprechende Versuchspersonenstunden für den bis dahin erbrachten Zeitaufwand.</p> <h3>Datennutzung</h3> <p>Die Erhebung der Forschungsdaten erfolgt aus Sicht der Forschenden anonym. Durch die Größe der Stichprobe sowie die Abfragekategorien/Auswahlmöglichkeiten/Kohortenbildung der oben genannten Daten, lassen sich die Daten zu keinem Zeitpunkt einer konkreten Person zuordnen. Die im Rahmen dieser Studie erhobenen Daten werden vertraulich behandelt. Deine Vp-ID wird getrennt von den Forschungsdaten aufbewahrt. Bitte beachte die Datenschutzhinweise der für die Verwaltung der Vp-Stunden genutzten Software. Die Verwaltung der Vp-ID und der Vp-Stunden erfolgt durch die Prüfungsverwaltung in der Fakultät Psychologie und Sportwissenschaften. Die erhobenen Forschungsdaten in aggregierter Form werden z.B. in wissenschaftlichen Zeitschriften, Vorträgen oder Lehrveranstaltungen veröffentlicht. Nach Abschluss der Studie werden die Daten ggf. in einem gesicherten Datenarchiv, wie z.B. dem „Open Science Framework“ öffentlich zugänglich gemacht. Zweck, Art und Umfang der potentiellen Nachnutzung im Rahmen von Open-Data stehen noch nicht fest, aber die Daten werden nur anonymisiert im Rahmen von Open-Science veröffentlicht. Eine Forderung auf Löschung der Daten aus einem anonymisierten Datensatz ist nicht möglich. Mit diesem Vorgehen folgt das Forschungsprojekt den Empfehlungen der Deutschen Forschungsgemeinschaft zur Qualitätssicherung der Forschung.<p>
<h3>Verantwortliche Stelle für diese Studie</h3>
<p>Das Forschungsprojekt „Lernerfolg und Metakognition beim Lernen von Studienmaterialien“ wird durchgeführt von der Fakultät für Psychologie und Sportwissenschaft, Abteilung für Psychologie, Arbeitseinheit 13 – Bildungspsychologie, unter der Projektleitung von Dr. Veit Kubik. Kooperationspartner*innen in diesem Projekt ist die Arbeitsgruppe von Prof. Dr. Alexander Renkl von der Albert-Ludwigs-Universität Freiburg. Die Studie wird eigenverantwortlich im Rahmen meiner Habilitation durchgeführt. </p><h3>Kontaktdaten</h3><p>Bei Fragen zur Teilnahme, Freiwilligkeit und Datennutzung melden Sie sich gerne bei dem Projektverantwortlichen:  Dr. Veit Kubik</p>
<p>
E-Mail: <a href= "mailto:veit.kubik@uni-bielefeld.de">veit.kubik@uni-bielefeld.de</a><br/>
Tel.: 0521-106-3100<br/>
Web.: <a href="https://www.uni-bielefeld.de/psychologie/abteilung/arbeitseinheiten/13/personen//kubik.xml">https://www.uni-bielefeld.de/psychologie/abteilung/arbeitseinheiten/13/personen//kubik.xml</a>
</p>
<h3>Einwilligung</h3>
<p>Ich habe die Teilnehmerinformation zum Forschungsprojekt „Lernerfolg und Metakognition beim Lernen  von Studienmaterialien“ zur Kenntnis genommen. Ich bin ausreichend informiert worden und hatte die Möglichkeit vor Weiterführung der Studie per Mail oder telefonisch Fragen zu stellen. Mir ist bewusst, dass meine Teilnahme an der Studie freiwillig ist und ich bei einer Verweigerung meiner Einwilligung für mich keinerlei Nachteile entstehen. Eine Kopie der Informationsschrift und dieser Einwilligungserklärung habe ich heruntergeladen und somit erhalten.</p><p>Wenn du mit unserem Vorhaben einverstanden bist, so klicke bitte auf <i>Einverstanden</i>. Falls nicht, so klicke bitte auf <i>Nicht einverstanden</i>.</p><p>Wir danken dir für deine Mitwirkung und dein Vertrauen.</p>`;

  return <InstructionFrame header html={html}  cancelButton continueButtonText="Einverstanden" cancelButtonText="Nicht einverstanden" finish={props.finish}/>;
}

export function InstructionFrame10(props) {
  const html = `
<h1>Wichtiger Hinweis</h1>
  <p>Diese Studie ist Teil eines wissenschaftlichen Projekts, das in Fachzeitschriften der Psychologie veröffentlicht wird. Wir möchten dich bitten, den Test - <strong>ohne Unterbrechung</strong> - bis zum Ende durchzuführen. Bitte stelle sicher, dass du während der Bearbeitung der Aufgaben nicht gestört wirst. Es ist wichtig, dass du die folgenden Vorkehrungen getroffen hast und dein Einverständnis mit einem Klick auf "Einverstanden" bestätigst: </p>
<ul>
    <li>Ich befinde mich in einem ruhigen Raum. </li>
    <li>Ich mache mir während des Experiments keine schriftlichen Notizen.</li>
    <li>Ich habe die nötigen Vorkehrungen getroffen, sodass ich im Verlauf der Studie nicht bei der Aufgabenbearbeitung unterbrochen werde. </li>
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
<h1>Bitte drücke auf die Leertaste, dann geht es direkt mit dem Vortest los.</h1>
  `;
  return <InstructionFrame html={html} space finish={props.finish}/>;
}
export function InstructionFrame16b(props) {
  const html = `
  <h1>Vortest</h1>
<p>Dir werden nun 12 Aufgaben präsentiert. Du sollst die Aufgaben berechnen und die Lösungen in das Notizfeld eintippen. </p>
<p>Bitte nutze [/] um Brüche auszudrücken. Beispiel: Schreibe ein Drittel als <strong>1/3</strong></p>
<p>Bestätige deine Eingabe mit [Enter]. Du wirst dann automatisch zur nächsten Aufgabe weitergeleitet.</p>
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

export function InstructionFrame100_sequenziell_12(props) {
  const html = `
  <h1>Aufbau des Lernprogramms I</h1>
  <p>Auf jeder Seite des Lernprogramms wird dir eine Beispielaufgabe präsentiert. Du sollst jede Aufgabe aufmerksam lesen und versuchen, die Lösung nachzuvollziehen. </p>
  <p>Zudem befinden sich rechts auf jeder Seite des Lernprogramms Multiple-Choice-Fragen. Hier sollst du die deiner Meinung nach zutreffendste Antwort auswählen. Du kannst deine Wahl nicht mehr ändern. </p>
  <p>Du durchläufst vier Durchgänge mit jeweils vier Beispielaufgaben, sodass dir insgesamt 16 Beispielaufgaben präsentiert werden und du 16 Multiple Choice-Fragen beantwortest.</p>
  <p>Für die Bearbeitung von je vier Beispielaufgaben hast du fünf Minuten Zeit. Die Zeit kannst du frei einteilen, du solltest aber alle Texte sorgfältig gelesen und alle Lösungen genau nachvollzogen haben, bevor du die Multiple-Choice Fragen beantwortest. Nach Ablauf der fünf Minuten wirst du automatisch zur Befragung deines Flow-Erlebens und deiner kognitiven Beanspruchung weitergeleitet und kannst nicht mehr zurückgehen. Ein Timer wird eingeblendet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame100_simultan_34(props) {
  const html = `
  <h1>Aufbau des Lernprogramms I</h1>
  <p>Auf jeder Seite des Lernprogramms werden dir vier Beispielaufgaben präsentiert. Du sollst diese Aufgaben aufmerksam lesen und versuchen, die Lösung nachzuvollziehen. </p>
  <p>Zu jeder Aufgabe sollst du zwei Multiple Choice-Fragen beantworten. Auf einer Seite also insgesamt acht Multiple-Choice-Fragen.</p>
  <p>Du durchläufst vier Durchgänge mit jeweils vier Beispielaufgaben und acht Multiple Choice-Fragen, sodass dir insgesamt 16 Beispielaufgaben präsentiert werden und du 32 Multiple Choice-Fragen beantwortest.</p>
  <p>Für die Bearbeitung von je vier Beispielaufgaben hast du insgesamt fünf Minuten Zeit. Die Zeit kannst du frei einteilen, du solltest aber alle Lösungen nachvollzogen und alle Multiple Choice-Fragen beantwortet haben, denn nach Ablauf dieser Zeit wirst du automatisch zur Befragung deines Flow-Erlebens und deiner kognitiven Beanspruchung weitergeleitet und kannst nicht mehr zurückgehen. Ein Timer wird eingeblendet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame101_sequenziell_12(props) {
  const html = `
  <h1>Aufbau des Lernprogramms II</h1>
  <p>Nach vier bearbeiteten Aufgaben erfolgt eine kurze Befragung zu deinem Flow-Erleben und deiner kognitiven Beanspruchung. Dir werden 11 verschiedene Aussagen präsentiert. Du sollst dann auf einer Skala entscheiden, inwiefern jede dieser Aussagen auf dich zutrifft. Es ist wichtig, dass du die Fragen wahrheitsgemäß beantwortest.</p>
  <p>Mit Betätigung der Leertaste wirst du zu Verständnisfragen weitergeleitet, bevor die Lernphase beginnt.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame101_simultan_34(props) {
  const html = `
  <h1>Aufbau des Lernprogramms II</h1>
  <p>Zum Abschluss jeder der vier Durchgänge erfolgt eine Befragung zu deinem Flow-Erleben und deiner kognitiven Beanspruchung. Dir werden 11 verschiedene Aussagen präsentiert. Du sollst dann auf einer Skala entscheiden, inwiefern jede dieser Aussagen auf dich zutrifft. Es ist wichtig, dass du die Fragen wahrheitsgemäß beantwortest. </p>
  <p>Mit Betätigung der Leertaste wirst du zu Verständnisfragen weitergeleitet, bevor die Lernphase beginnt.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame102(props) {
  const html = `
<p>Nun wirst du erneut 4 Beispielaufgabe erhalten.</p> 
<p>Drück auf die Leertaste, wenn du bereit bist</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame103(props) {
  const html = `
<p>Auf den folgenden vier Seiten sollst du einschätzen, wie gut du nun verschiedene Typen von Aufgaben bearbeiten kannst.</p> 
<p>Drück auf die Leertaste, wenn du bereit bist</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}



export function InstructionFrame200(props) {
  const html = `
  <p>Im letzten Abschnitt der Studie werden dir verschiedene Aufgaben präsentiert, die deinen Lernerfolg messen. Es ist deshalb wichtig, dass du bitte keine Hilfsmittel (z.B. Taschenrechner oder Internetseiten) benutzt und konzentriert arbeitest.</p>
  <p>Es gibt kein Zeitlimit, arbeite die Aufgaben aber bitte kontinuierlich durch.</p>
  <p>Viel Erfolg!</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame201(props) {
  const html = `
  <p>Dir werden nun 16 Aufgaben präsentiert. Du sollst die Aufgaben berechnen und die Lösungen in das Notizfeld eintippen. </p>
  <p>Bitte nutze [/] um Brüche auszudrücken. Bestätige deine Eingabe mit [Enter]. Du wirst dann automatisch zur nächsten Aufgabe weitergeleitet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame202(props) {
  const html = `
  <p>Vielen Dank für die Berechnung der Aufgaben!</p>
  <p>Dir werden nun zehn weitere Aufgaben präsentiert. Vier Aufgaben erfordern, dass du eine Antwort aus vier Antwortmöglichkeiten auswählst. Treffe deine Entscheidung überlegt, du kannst dich nicht umentscheiden.</p>
  <p>Sechs weitere Aufgaben sind offene Fragen. Bitte tippe die Antworten mithilfe der Tastatur in das Notizfeld und bestätige deine Eingabe mit [Enter].</p>
  <p>Lies die Aufgaben aufmerksam durch, überlege genau und entscheide dich dann für eine Antwort. Es ist wichtig, dass du die offenen Fragen <strong>in ganzen Sätzen und so genau wie möglich</strong> beantwortest. Du kannst nicht mehr zurückgehen.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame203(props) {
  const html = `
  <p>Vielen Dank für die Berechnung der Aufgaben!</p>
  <p>Dir werden nun 16 Textaufgaben präsentiert. Achtmal erhältst du zur Textaufgabe eine rechnerische Lösung. Bei acht weiteren Textaufgaben erhältst du eine Beschreibung eines der vier Prinzipien. </p>
  <p>Deine Aufgabe besteht nun darin, zu entscheiden, ob die rechnerische Lösung bzw. die Beschreibung des Prinzips zur Aufgabe passt. </p>
  <p>Lies die Aufgaben aufmerksam durch, überlege gut und entscheide dich dann für eine Antwort. Du wirst nach deiner Antwortwahl automatisch zur nächsten Antwort weitergeleitet. Du kannst nicht mehr zurückgehen.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame21alt(props) {
  return <EBL01Video videoID={'outro'} finish={props.finish}/>
}

export function InstructionFrame204(props) {
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
        max={9}
        minText={'sehr wenig'} maxText={'sehr viel'}
        titel={'In welchem Umfang wurdest du während dieser Studie von deiner Umgebung gestört?'}
        finish={props.finish}/>
    </>)
}

export function InstructionFrame207(props) {
  return (
    <>
      <LikertFrame
        max={9}
        minText={'sehr schlecht'} maxText={'sehr gut'}
        titel={'In welchem Umfang konntest du dich auf die vorgegebenen Lernaufgaben konzentrieren?'}
        finish={props.finish}/>
    </>)
}

export function InstructionFrame208(props) {
  const options = [
    {
      label: 'Ich habe schon einmal an DERSELBEN Studie teilgenommen.',
      value: 'selbe Studie teilgenommen'
    },
    {
      label: 'Ich habe schon einmal an einer ÄHNLICHEN Studie teilgenommen.',
      value: 'ähnliche Studie teilgenommen'
    },
    {
      label: 'Ich habe noch NICHT an dieser oder einer ähnlichen Studie teilgenommen.',
      value: 'keine ähnliche Studie teilgenommen'
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
      value: 'ernsthaft'
    },
    {
      label: 'Ich habe nicht ernsthaft teilgenommen und mich (teilweise) unaufmerksam durchgeklickt. ',
      value: 'nicht'
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
      value: 'Nein'
    },
    {
      label: 'Keine Angabe',
      value: 'Keine Angabe'
    },
    {
      label: 'Ja',
      value: 'JA'
    },
  ]

  return <>
    <DelayedRadioFrame
    large
    options={options}
    label={'Hast du externe Hilfsmittel verwendet (bspw. Taschenrechner oder dir Notizen auf einem Blatt notiert)?'}
    name={'Hilsmittel?'}
    finish={props.finish}
  />
  </>
}
export function InstructionFrame211a(props) {
  const options = [
    {
      label: 'Nein',
      value: 'Nein'
    },
    {
      label: 'Ja',
      value: 'Ja'
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
  const initial = {feedback: ''};
  let data=initial;
  const validationSchema = Yup.object();


  return <>
    <Form initial={initial}  finish={props.finish} validationSchema={validationSchema}>
    <MyTextArea style={{width: '100%'}}
      large
      name={'feedbackAllgmein'}
      label={'Möchtest du uns zu dem Experiment noch etwas miteilen? Dann trage es hier ins Textfeld ein:'}
    />
    </Form>
  </>
}
