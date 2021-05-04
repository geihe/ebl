import React, {useContext, useRef, useState} from "react";
import {LngContext} from "../../helper/i18n";
import {Html} from "../../MicroComponents/Html";
import styles from "../../css/EBLFrame.module.css";
import {phrase} from "../../assets/ressourceLanguage";
import {Button, Intent, TextArea} from "@blueprintjs/core";
import {ResponseRadioButtons} from "../../MicroComponents/ResponseRadioButtons";
import {useStateDelayed} from "../../Hooks/useStateDelayed";
import {TimeView} from "../../MicroComponents/TimeView";

export function EblWaitFrame(props) {
  const {content, config, seconds=60} = props;
  const t = useContext(LngContext);
  const [activeExp, setActiveExp] = useState(0); // active explanation box
  const logData = useRef({string: content.string, explanations: []});
  const header = content.singleHeader && <Html html={t(content.htmlHeader)}/>;
  const [timer, setTimer] = useStateDelayed(Math.ceil(seconds));
  const timeText = useRef('');

  timer >0 ? setTimer(timer - 1, 1000) : setTimer(()=>props.finish(logData.current), 1000);

  const nextExplanation = (data) => {
    logData.current.explanations.push(data);
    if (activeExp >= explanations.length - 1) {

      timeText.current = 'Bitte warte, bis die Zeit abglaufen ist.';
    } else {
      setActiveExp(activeExp + 1);
    }
  }

  const textExplanations = content.htmlExplanations.map((explanation, index) =>
    <SingleExplanation
      id={explanation.id}
      key={index}
      explanation={explanation && explanation.html}
      callback={nextExplanation}
      active={activeExp === index}
      minLength={config.textAreaMinLength}
    />
  );
  const radios = content.htmlRadios.map((radio, index) =>
    <SingleRadios
      key={index}
      html={radio.html}
      callback={nextExplanation}
      active={activeExp === index}
      options={radio.options}
      id={radio.id}
    />
  )

  const explanations = [...textExplanations, ...radios,];
  if (content.button) {
    explanations.push(<ButtonDiv key={0} callback={props.finish}/>);
  }


  const activeRadioNumbers=content.htmlRadios[activeExp];
  const activeExplanationNumbers=content.htmlExplanations[activeExp];

  const activeNrs = [];
  if (activeRadioNumbers && activeRadioNumbers.exampleNrs) {
    activeNrs.push(...activeRadioNumbers.exampleNrs);
  }
  if (activeExplanationNumbers && activeExplanationNumbers.exampleNrs) {
    activeNrs.push(...activeExplanationNumbers.exampleNrs);
  } //TODO eleganter

  const examples = content.htmlExamples.map((ex, index) => {
      return <SingleExample
        key={index}
        example={ex}
        nr={index + 1}
        active={activeNrs.includes(index)}
        singleHeader={content.singleHeader}
        showCount={content.htmlExamples.length > 1}
      />;
    }
  );

  return (<>
      <div className={styles.header}>
        <TimeView seconds={timer}/>
      </div>
    <div className={styles.eblFrame}>
      <div className={styles.exampleContainer}>
        {timeText.current}
        <ExHeader header={header}/>
        <Examples examples={examples}/>
      </div>
      <div className={styles.explanations}>
        {explanations}
      </div>

    </div>
    </>
  )
    ;
}

function ExHeader(props) {
  const
    {header} = props;
  return header ?
    <div
      className={styles.exampleHeader}>
      {header}
    </div> : null;
}

function Examples(props) {
  const {examples} = props;
  return (
    <div className={styles.examples}>
      {examples}
    </div>
  );
}

function SingleExample(props) {
  const t = useContext(LngContext);
  const {example, nr, singleHeader, showCount, active} = props;

  const activeClass = active ? ' ' + styles.highlight : '';
  return (
    <div className={styles.singleExample + activeClass}>
      <div>
        <div className={styles.exampleCount}>
          {t(phrase.eblQuestion)} {showCount ? nr : ''}:
        </div>
        {singleHeader ? '' : <Html html={t(example.htmlHeader)}/>}
        <Html className={styles.question} html={t(example.htmlProblem)}/>
      </div>
      <div className={styles.solution}>
        <Html html={t(phrase.solution) + ':&nbsp;&nbsp;'}/>
        {example.solution}</div>
    </div>
  );
}

function SingleExplanation(props) {
  const t = useContext(LngContext);
  const {explanation, callback, active, minLength} = props;
  const [text, setText] = useState('');

  const activeClass = active ? ' ' + styles.highlight : '';
  return (
    <div className={styles.singleExplanation + activeClass}>
      <Html className={styles.explanationHeader} html={t(explanation)}/>
      {active ? <TextArea
        className={styles.editable}
        placeholder={t(phrase.editablePlaceholder)}
        disabled={!active}
        onChange={(ev) => setText(ev.target.value)}
        intent={Intent.PRIMARY}
        rows={9}
        cols={25}
      /> : null}
      {active ? <Button intent={active ? 'primary' : 'none'}
                        disabled={!active || text.length < minLength}
                        onClick={() => callback(text)}>
        {t(phrase.continue)}
      </Button> : null}
    </div>
  );
}

function SingleRadios(props) {
  const t = useContext(LngContext);
  const {callback, options, html, active, id} = props;//TODO id benutzen
  const activeClass = active ? ' ' + styles.highlight : '';
  return (
    <div className={styles.singleExplanation + activeClass}>
      <Html
        className={styles.explanationHeader}
        style={{marginBottom: '8px'}}
        html={t(html)}/>
      {active ? <ResponseRadioButtons
        delay={300}
        callback={callback}
        options={options}
        autoContinue={true}
      /> : null}
    </div>
  )
}

function ButtonDiv(props) {
  const t = useContext(LngContext);
  return (
    <div className={styles.buttonDiv}>
      <Button fill intent={'primary'} onClick={props.callback}>
        {t(phrase.continue)}
      </Button>
    </div>
  );
}
