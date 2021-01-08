import React from 'react';
import {useTimeout} from "../Hooks/useTimeout";

export function FixationCrossFrame(props) {//TODO exclude from data
  const {duration=500} = props;

  useTimeout(duration, () => props.finish({duration: duration}))();
  return (
    <div>{props.hasOwnProperty('nocross') ? '' : 'X'}</div>
  );
}

