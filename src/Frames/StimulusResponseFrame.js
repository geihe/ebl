import React, {useRef} from 'react';
import styles from "../css/StimulusResponseFrame.module.css";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {FeedbackCorrect} from "../MicroComponents/FeedbackCorrect";
import {FeedbackWrong} from "../MicroComponents/FeedbackWrong";

export function StimulusResponseFrame(props) {

  const {
    id = 'stimulusResponseFrame',
    stimulus,                               //data, elementArray
    responseInput,                          //<Element callback(response, data)>
    validator = (response) => null,         //(response) -> boolean
    responseElement = {
      correct: <FeedbackCorrect key={'responseCorrect'}/>,
      wrong: <FeedbackWrong key={'responseWrong'}/>
    },
    column = true,
    showFeedback = false,
    repeatOnWrong = false,
    hideStimulusOnResponse = false
  } = props;
  const logData = useRef({});
  const [state, setState] = useStateDelayed('present');     //present, responseCorrect, responseWrong
  let elements = [];
  const classNames = [styles.container];
  const checkResponse = (response, data) => {
    const valid = validator(response);
    logData.current = {
      id,
      stimulus: stimulus.data,
      response,
      responseData: data,
      valid
    }
    if (showFeedback && typeof valid === 'boolean') {
      setState(valid ? 'feedbackCorrect' : 'feedbackWrong')
    } else {
      setState(valid ? 'fixationCrossCorrect' : 'fixationCrossWrong');
    }
  };

  if (state === 'present' || !hideStimulusOnResponse) {
    elements.push([].concat(stimulus.element));
  }

  const finish = () => props.finish(logData.current);
  switch (state) {
    case 'fixationCrossCorrect':
      setState(finish, 500);
      return <div></div>;
    case 'fixationCrossWrong':
      setState(repeatOnWrong ? 'present' : finish, 500);
      return <div></div>;
    case 'feedbackCorrect':
      elements.push([].concat(responseElement.correct));
      setState(finish, 1000);
      break;
    case 'feedbackWrong':
      elements.push([].concat(responseElement.wrong));
      setState(repeatOnWrong ? 'present' : finish, 1000);
      break;
    default:
      elements.push(React.cloneElement(responseInput, {callback: checkResponse}));
  }

  classNames.push(column ? styles.column : '');
  return <div className={classNames.join(' ')}>{elements}</div>
}