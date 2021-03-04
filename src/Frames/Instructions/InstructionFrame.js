import React from 'react';
import {DelayedFrame} from "../DelayedFrame";
import {Html} from "../../MicroComponents/Html";
import {UniBielefeld} from "../../MicroComponents/UniBielefeld";
import {config} from "../../assets/EBL_01/config";
import {EBL01Video} from "../EBL/EBL01Video";
import {LikertFrame} from "../LikertFrame";
import {DelayedRadioFrame} from "../DelayedRadioFrame";
import {Form} from "../../Forms/Form";
import {MyTextArea} from "../../Forms/MyTextArea";
import * as Yup from "yup";

export function InstructionFrame(props) {
  const {html, ...restProps} = props;
  return (<> //TODO bei kleiner Höhe des Bildschirms Höhen anpassen
      <UniBielefeld/>
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
  <h1>Herzlich willkommen zur Studie „Gleichzeitiges Lernen von mehreren stochastischen Konzepten“</h1>
  <p><strong>Hinweis:</strong></p>
  <p>Es folgt nach „Weiter mit der Leertaste“ eine Videoinstruktion.<br/>Schalte bitte deinen Ton an.<br/>Wenn das Video nicht von selbst startet, kannst du es mit der Maus steuern.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame02(props) {
  return <EBL01Video videoID={'introduction'} finish={props.finish}/>
}

export function InstructionFrame03(props) {
  const html = `
  <p>Navigiere während des Experiments bitte nicht im Browser mit den Vor- oder Zurückbuttons Deines Browsers.</p>
  <p> Du wirst durch das Experiment geleitet. An einigen Stellen kann es einen kurzen Moment dauern, bis die nächste Ansicht zu sehen ist.</p>
  <p>Zuweilen kann es vorkommen, dass das Laden von neuen Seiten einige Sekunden dauert. Warte bitte immer ab, bis du die nächste Seite siehst und klicke währenddessen nicht mit der Maus!</p>
  `;
  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame04(props) {
  const html = `
<h1>Datenschutz</h1>
  <p>Der Schutz deiner Daten ist für uns besonders wichtig! </p>
  <ul>
      <li>Die erhobenen, studienbezogenen Daten werden ausschließlich zu wissenschaftlichen Zwecken verwendet. </li>
      <li>Bei der Erhebung werden keine Daten gespeichert, die Rückschlüsse auf deine Person zulassen. </li>
      <li>Die erhobenen, studienbezogenen Daten werden im Rahmen wissenschaftlicher Publikationen anonymisiert gespeichert, ausgewertet und weiterverarbeitet – ein Rückschluss auf deine Person ist dabei unter keinen Umständen möglich. </li>
      <li>Du kannst diese Studie jederzeit ohne eine Angabe von Gründen abbrechen. Dir entstehen daraus keine Nachteile.</li>
  </ul>
  <p> Für die sachgemäße Datenverarbeitung verantwortlich ist <a href="mailto: veit.kubik@uni-bielefeld.de">veit.kubik@uni-bielefeld.de</a></p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame05(props) {
  const html = `
<h1>Wichtiger Hinweis</h1>
  <p>Diese Studie ist Teil eines wissenschaftlichen Projekts, das in Fachzeitschriften der Psychologie veröffentlicht wird. Wir möchten dich bitten, den Test - <strong>ohne Unterbrechung</strong> - bis zum Ende durchzuführen. Bitte stelle sicher, dass du während der Bearbeitung der Aufgaben nicht gestört wirst. Es ist wichtig, dass du die folgenden Vorkehrungen getroffen hast und dein Einverständnis mit einem Klick auf "Einverstanden" bestätigst: </p>
<ul>
    <li>Ich befinde mich in einem ruhigen Raum. </li>
    <li>Ich habe die nötigen Vorkehrungen getroffen, sodass ich im Verlauf der Studie nicht bei der Aufgabenbearbeitung unterbrochen werde. </li>
    <li>Mein Mobiltelefon liegt außerhalb meiner Reich- und Sichtweite und ist auf stumm gestellt oder ausgeschaltet. </li>
</ul>
<p>Mit der konzentrierten Bearbeitung der Aufgaben trägst du dazu bei, die Qualität der Studie und der Ergebnisse zu sichern. Vielen Dank! </p>
  `;

  return <InstructionFrame html={html} cancelButton finish={props.finish}/>;
}

export function InstructionFrame06(props) {
  const html = `
  <h1>Rückfragen</h1>
  <p>Bei Rückfragen oder Hinweisen zu diesem Forschungsprojekt wende dich bitte an: <p><a href="mailto:onlinestudienforschung@gmail.com"> onlinestudienforschung@gmail.com </a></p></p>
  <p><strong>Vielen Dank für deine Unterstützung! </strong></p>
  <p>Mit herzlichen Grüßen <br/>Dr. Veit Kubik </p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame07(props) {
  const html = `
  <h1>Teilnahme</h1>
  <p>Wenn du an der Studie teilnehmen möchtest, klicke bitte auf <strong>"Jetzt teilnehmen"</strong>. </p>
  <p>Falls du im Moment keine störungsfreien Bedingungen vorfindest, so kannst du gerne zu einem anderen, günstigeren Zeitpunkt an dieser Studie teilnehmen. Klicke dafür bitte auf <strong>"Später teilnehmen"</strong>. </p>
  `;

  return <InstructionFrame html={html} cancelButton finish={props.finish}/>;
}

export function InstructionFrame08_I(props) {
  const html = `
  <h1>Einverständniserklärung I</h1>
  <p>Bestätige bitte dein Einverständnis, indem du auf "Einverstanden" klickst.  </p>
<ul>
    <li>Ich habe die Informationen über die Ziele und den Ablauf der Online-Studie gelesen und fühle mich ausreichend informiert. Ich weiß um die Möglichkeit, bei Fragen den Studienleiter zu kontaktieren. </li>
    <li>Ich habe verstanden, dass ich die Studie jederzeit ohne eine Angabe von Gründen abbrechen kann, ohne dass mir persönliche Nachteile hieraus entstehen. </li>
    <li>Ich habe verstanden, dass nach Abschluss der Datenerhebung prinzipiell keine Zuordnung zwischen den Daten im Datensatz und meinen personenbezogenen Daten (Name, Mailadresse) möglich ist und somit der von mir produzierte Datensatz nicht gezielt gelöscht werden kann. </li>
    <li>Ich bin mit der angegebenen Art der sachgemäßen Verarbeitung, Speicherung und Weitergabe meiner vollständig anonymisiert erhobenen Daten in dieser Onlinestudie einverstanden. </li>
    <li>Für die vollständige Teilnahme an dieser Studie erhalten ich 2,5 Versuchspersonenstunden.</li>
</ul>
  `;

  return <InstructionFrame html={html} cancelButton finish={props.finish}/>;
}

export function InstructionFrame08_II(props) {
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

  return <InstructionFrame html={html} cancelButton finish={props.finish}/>;
}

export function InstructionFrame09_I(props) {
  const html = `
  <h1>Vorabinformation I</h1>
  <p>Schön, dass du zugestimmt hast. Dann kann es gleich losgehen.</p>
  <p>Zunächst bekommst du weitere Informationen über den Ablauf des Experiments. Es ist wichtig, dass du die einzelnen Phasen gut kennst.</p>
  <p>Deshalb folgt nach den nächsten drei Seiten eine kleine Aufgabe für dich.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame09_II(props) {
  const html = `
  <h1>Vorabinformation II</h1>
  <p>Durch deine Teilnahme erwirbst du nicht nur neues Wissen, sondern erhältst auch einen Einblick in die aktuelle Forschung. Außerdem erhältst du für deine Teilnahme bei Bedarf 2,5 Versuchspersonenstunden für dein Psychologiestudium.</p>
  <p>Durch deine Teilnahme unterstützt du den Informationsgewinn zu Prozessen beim Lernen und somit die Erweiterung des bisherigen Kenntnisstands der Forschung. Deine Teilnahme ist mit keinerlei Risiken für dich verbunden. Sie erfolgt anonym. Ein Rückschluss von den erhobenen Daten auf deine Person ist nicht möglich. Die Daten werden selbstverständlich vertraulich behandelt und ausschließlich für den angegebenen Forschungszweck verwendet. Durch Beenden der Teilnahme hast du bis zum Ende der Sitzung die Möglichkeit, der Speicherung der Daten nicht zuzustimmen. </p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame09_III(props) {
  const html = `
  <h1>Vorabinformation III</h1>
  <p>In der ersten, heutigen Sitzung absolvierst du zuerst einen <strong>Vortest mit 12 Aufgaben</strong>, in dem deine Fähigkeiten im Umgang mit Wahrscheinlichkeiten geprüft werden. Daraufhin erhältst du <strong>allgemeine Erklärungen über Urnenmodelle und Stochastik</strong>. <br/>
  Im Anschluss daran lernst du vier Prinzipien der Wahrscheinlichkeitsrechnung <strong>anhand von 16 Lösungsbeispielen</strong> kennen. Zu jedem Lösungsbeispiel erhältst du Fragen im Multiple Choice-Format. Nach vier bearbeiteten Aufgaben wirst du gebeten, <strong>Fragen zu deiner kognitiven Beanspruchung und zu deinem Flow-Erleben</strong> zu beantworten.<br/>
   Nach Beendigung der Lernphase erfolgt eine <strong>10-minütige Pause</strong>. Zum Abschluss der ersten Session sollst du die Prinzipien in einer Testphase anhand von <strong>22 Testaufgaben</strong> und <strong>16 Verifikationsaufgaben</strong> anwenden. <br/>
   Es ist keinerlei Vorwissen von deiner Seite notwendig – alle Informationen erhältst du ausschließlich in dieser Studie.  </p></>

  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}


export function InstructionFrame09_IV(props) {
  const html = `
  <h1>Vorabinformation IV</h1>
  <p>Nach einer Woche erfolgt in einer zweiten Sitzung zuerst eine weitere Testphase, in der du die heute gelernten Prinzipien erneut anwenden sollst. Abschließend erfolgt ein Test zum schlussfolgernden Denken. </p>
  <p>Die Studie erfolgt also in zwei Sitzungen. Die erste absolvierst du jetzt. Die zweite Sitzung solltest du möglichst in genau sieben Tagen zur gleichen Uhrzeit absolvieren. An diese zweite Sitzung wirst du automatisch per Mail erinnert. Du wirst am Ende der ersten Sitzung aufgefordert deine E-Mail-Adresse anzugeben. Beide Sitzungen nehmen erfahrungsgemäß ca. 2,5 Stunden in Anspruch.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}


export function InstructionFrame11(props) {
  const html = `
  <h1>Vortest</h1>
<p>Nun wirst du einen Vortest mit 12 Aufgaben zur Einschätzung deiner bisherigen stochastischen Kenntnisse und mathematischen Fähigkeiten durchlaufen. </p>
<p>Bitte nutze [/] um Brüche auszudrücken. Beispiel: Schreibe ein Drittel als <strong>1/3</strong></p>
<p>Bitte lies die Aufgaben aufmerksam durch, bevor du deine Antwort abgibst und bestätige deine Antwort erst dann mit [Enter].</p>
<p>Der Vortest beginnt, wenn du die Leertaste betätigst.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame12(props) {
  const html = `
  <h1>Du hast den Vortest abgeschlossen - vielen Dank! </h1>
<p>Mit der Leertaste wirst du automatisch zum Lernprogramm weitergeleitet. </p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame16a_I_simultan_group23(props) {
  const html = `
  <h1>Aufbau des Lernprogramms I</h1>
  <p>Auf jeder Seite des Lernprogramms werden dir vier Beispielaufgaben präsentiert, wovon zunächst nur eine sichtbar sein wird. Du sollst diese Aufgabe aufmerksam lesen und versuchen, die Lösung nachzuvollziehen. Anschließend kannst du auf den „Weiter“-Button klicken und es erscheinen eine weitere Beispielaufgabe, sowie eine Multiple Choice-Frage auf der rechten Seite. </p>
  <p>Nachdem du auch die zweite Aufgabe aufmerksam gelesen hast, sollst du erneut eine Multiple Choice-Frage beantworten. Anschließend kannst du erneut auf den „Weiter“-Button klicken und es erscheint eine weitere Beispielaufgabe, sowie eine erneute Multiple Choice-Frage. Insgesamt werden dir also auf jeder Seite vier Beispielaufgaben präsentiert und du sollst zu jeder Aufgabe eine Multiple Choice-Frage beantworten. Du durchläufst vier Durchgänge mit jeweils vier Beispielaufgaben und vier Multiple Choice-Fragen, sodass dir insgesamt 16 Beispielaufgaben präsentiert werden und du 16 Multiple Choice-Fragen beantwortest.</p>
  <p>Für die Bearbeitung von je vier Beispielaufgaben hast du insgesamt sechs Minuten Zeit. Die Einteilung dieser Zeit obliegt dir. Du solltest aber alle Lösungen nachvollzogen und alle Multiple Choice-Fragen beantwortet haben, denn nach Ablauf dieser Zeit wirst du automatisch zur Befragung deines Flow-Erlebens und deiner kognitiven Beanspruchung weitergeleitet und kannst nicht mehr zurückgehen. Ein Timer wird eingeblendet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame16a_II_simultan_group23(props) {
  const html = `
  <h1>Aufbau des Lernprogramms II</h1>
  <p>Zum Abschluss jeder der vier Durchgänge erfolgt eine Befragung zu deinem Flow-Erleben und deiner kognitiven Beanspruchung. Dir werden 11 verschiedene Aussagen präsentiert. Du sollst dann auf einer Skala entscheiden, inwiefern jede dieser Aussagen auf dich zutrifft. Es ist wichtig, dass du die Fragen wahrheitsgemäß beantwortest. </p>
  <p>Mit Betätigung der Leertaste wirst du zu Verständnisfragen weitergeleitet, bevor die Lernphase beginnt.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame16b_I_sequenziell_group01(props) {
  const html = `
  <h1>Aufbau des Lernprogramms I</h1>
  <p>Auf jeder Seite des Lernprogramms wird dir nur eine Beispielaufgabe präsentiert. Du sollst jede Aufgabe aufmerksam lesen und versuchen, die Lösung nachzuvollziehen. </p>
  <p>Zudem befindet sich rechts auf jeder Seite des Lernprogramms eine Multiple-Choice Frage. Hier sollst du das deiner Meinung nach zutreffendste auswählen. </p>
  <p>Erst danach sollst du auf den „nächste Seite“-Button klicken, um auf die nächste Seite des Lernprogramms zu gelangen. Dann kannst du nicht mehr zurückgehen. Du durchläufst vier Durchgänge mit jeweils vier Beispielaufgaben, sodass dir insgesamt 16 Beispielaufgaben präsentiert werden und du 16 Multiple Choice-Fragen beantwortest.</p>
  <p>Für die Bearbeitung von je vier Beispielaufgaben hast du sechs Minuten Zeit. Die Einteilung dieser Zeit obliegt dir. Du solltest aber alle Lösungen nachvollzogen und alle Multiple Choice-Fragen beantwortet haben. Nach Ablauf der sechs Minuten wirst du automatisch zur Befragung deines Flow-Erlebens und deiner kognitiven Beanspruchung weitergeleitet und kannst nicht mehr zurückgehen. Ein Timer wird eingeblendet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame16b_II_sequenziell_group01(props) {
  const html = `
  <h1>Aufbau des Lernprogramms II</h1>
  <p>Nach vier bearbeiteten Aufgaben erfolgt eine kurze Befragung zu deinem Flow-Erleben und deiner kognitiven Beanspruchung. Dir werden 11 verschiedene Aussagen präsentiert. Du sollst dann auf einer Skala entscheiden, inwiefern jede dieser Aussagen auf dich zutrifft. Es ist wichtig, dass du die Fragen wahrheitsgemäß beantwortest.</p>
  <p>Mit Betätigung der Leertaste wirst du zu Verständnisfragen weitergeleitet, bevor die Lernphase beginnt.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

//TODO 17


export function InstructionFrame18(props) {
  const html = `
  <p>Die Lernphase ist nun abgeschlossen – vielen Dank!</p>
  <p>Bitte mach nun eine Pause von 10 Minuten. Gerne kannst du dir die Beine vertreten, durchlüften oder dir etwas zu trinken holen. Du siehst sogleich einen Timer. Bitte sei vor Ablauf der Zeit zurück und schalte alle Störungsquellen aus. Du wirst nach Ablauf der Zeit automatisch zum Test weitergeleitet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame19(props) {
  const html = `
<h1>Post-Test</h1>
  <p>Im letzten Abschnitt der Studie werden dir verschiedene Aufgaben präsentiert, die deinen Lernerfolg messen. Es ist deshalb wichtig, dass du bitte keine Hilfsmittel (z.B. Taschenrechner oder Internetseiten) benutzt.</p>
  <p>Es gibt kein Zeitlimit. Es ist aber wichtig, dass du konzentriert und kontinuierlich arbeitest.</p>
  <p>Viel Spaß!</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame20a(props) {
  const html = `
  <p>Dir werden nun 12 Aufgaben präsentiert, deren Lösungen du berechnen und in das dir zur Verfügung stehende Notizfeld eintippen sollst. </p>
  <p>Bitte nutze [/] um Brüche auszudrücken. Bestätige deine Eingabe mit [Enter]. Du wirst dann automatisch zur nächsten Aufgabe weitergeleitet.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame20b(props) {
  const html = `
  <p>Vielen Dank für die Berechnung der Aufgaben!</p>
  <p>Dir werden nun zehn weitere Aufgaben präsentiert. Vier Aufgaben erfordern, dass du aus vier Antwortmöglichkeiten eine Antwort auswählst. Du wirst nach deiner Antwortwahl automatisch zur nächsten Antwort weitergeleitet.</p>
  <p>Sechs weitere Aufgaben fordern sind offene Fragen, die von dir eine Eingabe per Tastatur erfordern. Nutze dafür das dir zur Verfügung stehende Notizfeld, um deine Antwort zu notieren und bestätige deine Eingabe mit [Enter].</p>
  <p>Lies die Aufgaben aufmerksam durch, überlege genau und entscheide dich dann für eine Antwort. Es ist wichtig, dass du die offenen Fragen in ganzen Sätzen und so genau wie möglich beantwortest. Du kannst nicht mehr zurückgehen</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame20c(props) {
  const html = `
  <p>Vielen Dank für die Berechnung der Aufgaben!</p>
  <p>Dir werden nun 16 Textaufgaben präsentiert. Achtmal erhältst du zur Textaufgabe eine rechnerische Lösung. Bei acht weiteren Textaufgaben erhältst du eine Beschreibung eines der vier Prinzipien. </p>
  <p>Deine Aufgabe besteht nun darin, zu entscheiden, ob die rechnerische Lösung respektive die Beschreibung des Prinzips zur Aufgabe passt. </p>
  <p>Wähle deine Antwort durch Klicken auf den Kreis vor der entsprechenden Antwortalternative.</p>
  <p>Lies die Aufgaben aufmerksam durch, überlege gut und entscheide dich dann für eine Antwort. Du wirst nach deiner Antwortwahl automatisch zur nächsten Antwort weitergeleitet. Du kannst nicht mehr zurückgehen.</p>
  `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}

export function InstructionFrame21(props) {
  return <EBL01Video videoID={'outro'} finish={props.finish}/>
}

export function InstructionFrame22(props) {
  const html = `
  <h1>Abschließende Fragen</h1>
<p>Diese Fragen sind zur Beurteilung der wissenschaftlichen Datenqualität unserer Studie besonders wichtig. Für die Berücksichtigung deiner anonymen Daten ist es beispielsweise wichtig, dass du dich hinreichend konzentrieren und dass du die Instruktionen lesen und die präsentierten Aufgaben verstehen konntest. </p>
<p>Die Beantwortung der Fragen trägt wesentlich zur Datenqualität unserer Studie bei. Deine Antworten sind anonym und können somit nicht auf deine Person zurückgeführt werden. </p>
<p>Es ist wichtig, dass du wahrheitsgetreu antwortest.</p>
 `;

  return <InstructionFrame html={html} space finish={props.finish}/>;
}


export function InstructionFrame22bIa(props) {
  return (
    <>
      <UniBielefeld/>
      <LikertFrame
        max={9}
        minText={'sehr wenig'} maxText={'sehr viel'}
        item={'In welchem Umfang wurdest du während dieser Studie von deiner Umgebung gestört?'}
        finish={props.finish}/>
    </>)
}

export function InstructionFrame22bIb(props) {
  return (
    <>
      <UniBielefeld/>
      <LikertFrame
        max={9}
        minText={'sehr schlecht'} maxText={'sehr gut'}
        item={'In welchem Umfang konntest du dich auf die vorgegebenen Lernaufgaben konzentrieren?'}
        finish={props.finish}/>
    </>)
}

export function InstructionFrame22bIIb(props) {
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
    <UniBielefeld/>
    <DelayedRadioFrame
    large
    options={options}
    label={'Wähle die Antwort, die auf dich zutrifft:'}
    name={'teilgenommen?'}
    finish={props.finish}
  />
  </>
}

export function InstructionFrame22bIIc(props) {
  const options = [
    {
      label: 'Nein',
      value: 'Nein'
    },
    {
      label: 'Eine Prüfung',
      value: '1 Prüfung'
    },
    {
      label: 'Zwei oder mehr Prüfungen',
      value: '2 oder mehr Prüfungen'
    },
  ]

  return <>
    <UniBielefeld/>
    <DelayedRadioFrame
      large
      options={options}
      label={'Hast du in den letzten sieben Tagen eine schriftliche und/oder mündliche Prüfung absolviert?'}
      name={'teilgenommen?'}
      finish={props.finish}
    />
  </>
}

export function InstructionFrame22bIId(props) {
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
    <UniBielefeld/>
    <DelayedRadioFrame
    large
    options={options}
    label={'Hast du externe Hilfsmittel verwendet (bspw. Taschenrechner oder dir Notizen auf einem Blatt notiert)?'}
    name={'Hilsmittel?'}
    finish={props.finish}
  />
  </>
}
export function InstructionFrame22bIIe(props) {
  const options = [
    {
      label: 'Nein',
      value: 'Nein'
    },
    {
      label: 'Ja',
      value: 'JA'
    },
  ]

  return <>
    <UniBielefeld/>
    <DelayedRadioFrame
    large
    options={options}
    label={{de: 'Hattest du besondere Schwierigkeiten bei der Bearbeitung der Aufgaben?'}}
    name={'Schwierigkeiten?'}
    finish={props.finish}
  />
  </>
}
export function InstructionFrame23(props) {
  const initial = {feedback: ''};
  let data=initial;
  const validationSchema = Yup.object();

  return <>
    <UniBielefeld/>
    <Form initial={initial}  finish={props.finish} validationSchema={validationSchema}>
    <MyTextArea
      large
      name={'feedback'}
      label={'Gibt es noch etwas, das du zum Ablauf des Experiments bemerken möchtest (z.B. Schwierigkeiten oder besondere Vorkommnisse)?'}
    />
    </Form>
  </>
}

