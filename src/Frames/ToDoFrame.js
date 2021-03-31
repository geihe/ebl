import React from 'react';
import {DelayedFrame} from "./DelayedFrame";
import {Html} from "../MicroComponents/Html";

export function ToDoFrame(props) {
  const {text} = props;
return (
<DelayedFrame space delay={0} finish={props.finish}>
  <Html html={'<h1>TODO</h1>'+text} style={{color: 'darkred'}}/>
</DelayedFrame>
  );
}

