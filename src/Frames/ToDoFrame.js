import React from 'react';
import {DelayedSpaceFrame} from "./DelayedSpaceFrame";
import {Html} from "../MicroComponents/Html";

export function ToDoFrame(props) {//TODO exclude from data
  const {text} = props;
return (
<DelayedSpaceFrame delay={0} finish={props.finish}>
  <Html html={'<h1>TODO</h1>'+text} style={{color: 'darkred'}}/>
</DelayedSpaceFrame>
  );
}

