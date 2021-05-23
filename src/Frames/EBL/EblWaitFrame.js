import React, {useContext, useEffect, useRef, useState} from "react";
import {LngContext} from "../../helper/i18n";
import {Html} from "../../MicroComponents/Html";
import styles from "../../css/EBLFrame.module.css";
import {phrase} from "../../assets/ressourceLanguage";
import {Button, Icon, Intent, Position, TextArea, Toaster} from "@blueprintjs/core";
import {ResponseRadioButtons} from "../../MicroComponents/ResponseRadioButtons";
import {useStateDelayed} from "../../Hooks/useStateDelayed";
import {TimeView} from "../../MicroComponents/TimeView";

export function EblWaitFrame(props) {
  const {content, config, seconds = 60, hurry = 15} = props;
  const t = useContext(LngContext);
  const [state, setState] = useState({activeExp: 0, waiting: false}); // active explanation box
  const logData = useRef({string: content.string, explanations: []});
  const header = content.singleHeader && <Html html={t(content.htmlHeader)}/>;
  const toast = useRef(null);
  const toastRight = useRef(null);
  const dataWithSummary = (data) => {
    const explanationMap = new Map();
    data.explanations.forEach((e) => explanationMap.set(e.id, {
      id: e.id, valid: e.valid, title: e.html, label: e.value
    }));
    const explanationArray = Array.from(explanationMap.values());
    const totalCount = explanationArray.length;
    const validCount = explanationArray.reduce((count, cur) => count + cur ? 1 : 0, 0);
    return {
      summary:
        {
          id: data.string,
          validCount,
          totalCount,
          percentage: Math.round(validCount/totalCount*100),
          explanations: explanationArray
        },
      ...data
    };
  }
  const [timer, setTimer] = useStateDelayed(Math.ceil(seconds));
  const startTime = useRef(Date.now());
  const timerTime = seconds-(Date.now()-startTime.current)/1000;
  console.log(timerTime);
  timer > 0 ? setTimer(Math.round(timerTime-1), 1000) : setTimer(() => { //TODO keine Verzögerung bei Klick auf Radiobutton
    console.log(dataWithSummary(logData.current));
    props.finish(dataWithSummary(logData.current));
  }, 1000);
  useEffect(() => {
    if (timer === Math.ceil(hurry) && !state.waiting) {
      toastRight.current.show({
        message: "Du hast nicht mehr viel Zeit. Bitte beantworte alle Fragen.",
        intent: Intent.DANGER,
        timeout: 7777
      });
    }
  })

  const nextExplanation = (data) => {
    logData.current.explanations.push(data);
    const lastExpAnswered = !state.waiting && state.activeExp >= explanations.length - 1;
    if (lastExpAnswered) {
      toast.current.show({
        message: "Du hast noch etwas Zeit! Nutze die Zeit aktiv, die Lösungen nachzuvollziehen. Du kannst deine Antworten mit einem Klick öffnen und ändern.",
        intent: Intent.PRIMARY,
        timeout: 8888
      });
    }
    const newStateFunction = (state) => (
      {
        activeExp: state.waiting ? -1 : state.activeExp + 1,
        waiting: state.waiting || lastExpAnswered
      }
    );

    setState(s => newStateFunction(s));
  }

  const onExplClick = (index, event) => {
    if (state.waiting) {
      const newStateFunction = (state) => (
        {
          activeExp: index,
          waiting: state.waiting
        }
      );

      setState(s => newStateFunction(s));
    }
  }

  const textExplanations = content.htmlExplanations.map((explanation, index) =>
    <SingleExplanation
      id={explanation.id}
      key={index}
      explanation={explanation && explanation.html}
      callback={(data) => nextExplanation(data)}
      active={state.activeExp === index}
      minLength={config.textAreaMinLength}
    />
  );
  const radios = content.htmlRadios.map((radio, index) =>
    <SingleRadios
      onClick={(event) => onExplClick(index, event)}
      finish={(data) => nextExplanation(data)}
      key={index}
      html={radio.html}
      active={state.activeExp === index}
      waiting={state.waiting}
      showIcon={state.waiting}
      options={radio.options}
      id={radio.id}
    />
  )

  const explanations = [...textExplanations, ...radios,];

  if (content.button) {
    explanations.push(<ButtonDiv key={0} callback={props.finish}/>);
  }

  const activeRadioNumbers = content.htmlRadios[state.activeExp];
  const activeExplanationNumbers = content.htmlExplanations[state.activeExp];

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
        <Toaster position={Position.TOP} maxToasts={1} ref={toast}/>
        <TimeView seconds={timer}/>
      </div>
      <div className={styles.eblFrame}>
        <div className={styles.exampleContainer}>
          <ExHeader header={header}/>
          <Examples examples={examples}/>
        </div>
        <div className={styles.explanations}>
          <Toaster position={Position.TOP} maxToasts={1} ref={toastRight}/>
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
  const {explanation, callback, active, minLength, icon} = props;
  const [text, setText] = useState('');
  const activeClass = active ? ' ' + styles.highlight : '';
  const waitingClass = true ? ' ' + styles.mousePointer : '';

  return (
    <div className={styles.singleExplanation + activeClass + waitingClass}>
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
  const {finish, options, html, active, waiting, id, showIcon, onClick} = props;//TODO id benutzen
  const activeClass = active ? ' ' + styles.highlight : '';
  const waitingClass = waiting ? ' ' + styles.mousePointer : '';
  const myCallback = (data) => finish({...data, html: t(html), id})
  const icon = active ? <Icon icon="chevron-down"/>
    : <Icon icon="chevron-right"/>;
  return (
    <div className={styles.singleExplanation + activeClass + waitingClass}>
      <div style={{display: 'flex'}}>
        {showIcon ? icon : ''}
        <Html onClick={onClick}
              className={styles.explanationHeader}
              style={{marginBottom: '8px'}}
              html={t(html)}/>
      </div>
      {<ResponseRadioButtons
        display={active}
        delay={300}
        callback={myCallback}
        options={options}
        autoContinue={true}
      />}
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
