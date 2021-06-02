import React, {useContext, useRef} from 'react';
import {Zone} from "../MicroComponents/Zone";
import {AdvancedInput} from "../MicroComponents/AdvancedInput";
import styles from "../css/MathDistractor.module.css"
import {phrase} from "../assets/ressourceLanguage";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {Context} from "../index";


export function MathDistractor(props) {
  const {feedbackTime, testTask} = props;
  console.log(testTask);
  const [state, setState] = useStateDelayed('present');
  const {t, config} = useContext(Context);
  const correct = t(phrase.correct);
  const wrong = t(phrase.wrong);
  const logData = useRef({testTask});

  const presentFrame = (
    <Zone className={styles.problem}>
      {testTask.stimulus}
      <AdvancedInput placeholder={'result'} finish={checkAnswer}
                     allowKeys={['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}/>
    </Zone>
  );

  function checkAnswer(input) {
    const answer = input.value;
    logData.current.answer = answer;
    const validatorResult = testTask.validate(answer) ? 'correct' : 'wrong';
    logData.current.status = validatorResult;
    if (feedbackTime > 0) {
      setState(validatorResult);
    } else {
      props.finish(logData.current);
    }
  }

  const rightFrame = (
    <Zone>
      <div className={styles.right}>
        {testTask.correctAnswer}
      </div>
    </Zone>
  );

  const wrongFrame = (
      <div className={styles.wrong}>
        {testTask.correctAnswer}
      </div>
  );

  switch (state) {
    case 'correct':
      setState(() => props.finish(logData.current), feedbackTime);
      return rightFrame;
    case 'wrong':
      setState(() => props.finish(logData.current), feedbackTime);
      return wrongFrame;
    default:
      return presentFrame;
  }
}
