import React from 'react';
import {LikertFrame} from "./LikertFrame";

export function JolFrame(props) {//TODO exclude from data
return (
  <LikertFrame
    min={0}
    max={100}
    step={10}
    minText={'sehr unsicher'}
    maxText={'sehr sicher'}
    title={'Zu wie viel Prozent bist du dir sicher?'}
    finish={props.finish}
  />
  );
}

