import React, {useState} from 'react';
import {MathDistractor} from "./MathDistractor";


export function MathDistractorContinous(props) {
  const {feedbackTime=1500, manager} = props;
  const [state, setState] = useState(1);
  console.log(props.finish);
  if (manager.hasNext()) {
    return (
      <MathDistractor
        key={state}
        feedbackTime={feedbackTime}
        testTask={manager.nextTask()}
        finish={() => setState(state + 1)}/>
    );
  } else {
    props.finish();
    return null;
  }
}
