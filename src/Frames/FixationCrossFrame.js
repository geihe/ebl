import React from 'react';
import {useTimeout} from "../Hooks/useTimeout";

export function FixationCrossFrame(props) {
  const {duration=500} = props;
  useTimeout(duration, () => props.finish({duration: duration}))();
  return (
    <div>X</div>
  );
}

