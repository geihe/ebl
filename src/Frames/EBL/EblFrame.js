import React, {useContext, useRef, useState} from "react";
import {LngContext} from "../../helper/i18n";
import {Html} from "../../MicroComponents/Html";
import styles from "../../cssModules/EBL/EblFrame.module.css";
import {phrase} from "../../assets/ressourceLanguage";
import {Button, EditableText} from "@blueprintjs/core";

export function EblFrame(props) {
  const {content, config} = props;
  const t = useContext(LngContext);
  const [activeExp, setActiveExp] = useState(0); // active explanation box
  const logData = useRef({string: content.string, explanations: []});

  const nextExplanation = (data) => {
    logData.current.explanations.push(data);
    if (activeExp >= content.htmlExplanations.length - 1) {
      props.finish(logData);
    } else {
      setActiveExp(activeExp + 1);
    }
  }

  const header = content.singleHeader && <Html html={t(content.htmlHeader)}/>;

  const explanations = content.htmlExplanations.map((explanation, index) =>
    <SingleExplanation
      key={index}
      explanation={explanation}
      callback={nextExplanation}
      active={activeExp === index}
      minLength={config.textAreaMinLength}
    />
  );

  const examples = content.htmlExamples.map((ex, index) =>
    <SingleExample
      key={index}
      example={ex}
      nr={index + 1}
      singleHeader={content.singleHeader}
      showCount={content.htmlExamples.length > 1}
    />
  );

  return (
    <div className={styles.eblFrame}>
      <div className={styles.exampleContainer}>
        <ExHeader header={header}/>
        <Examples examples={examples}/>
      </div>
      <div className={styles.explanations}>
        {explanations}
      </div>

    </div>
  );
}

function ExHeader(props) {
  const {header} = props;
  return header ?
    <div className={styles.exampleHeader}>
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
  const {example, nr, singleHeader, showCount} = props;
  return (
    <div className={styles.singleExample}>
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

  return (
    <div className={styles.singleExplanation}>
      <Html className={styles.explanationHeader} html={t(explanation)}/>
      <EditableText
        className={styles.editable}
        multiline={true}
        placeholder={t(phrase.editablePlaceholder)}
        minLines={active? 5: 2}
        maxLines={active? 8: 2}
        isEditing={active}
        disabled={!active}
        onChange={setText}
      />
      <Button intent={active ? 'primary' : 'none'}
              disabled={!active || text.length<minLength}
              onClick={(text)=>callback(text)}>
        {t(phrase.continue)}
      </Button>
    </div>
  );
}