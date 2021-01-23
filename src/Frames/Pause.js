import React from 'react';
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {TimeView} from "../MicroComponents/TimeView";

export function Pause(props) {//TODO exclude from data
  const {seconds = 100, textFunction} = props;
  const [remaining, setRemainig] = useStateDelayed(seconds);
  if (remaining > 1) {
    setRemainig(remaining - 1, 1000);
  } else {
    setRemainig(() => props.finish(seconds),1000);
  }
  return (
    <TimeView seconds={remaining} />
  );
}
//TODO zeitabhängig zusätzlich Text anzeigen textFunction(seconds) => Text