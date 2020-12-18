import React from 'react';
import {AdvancedInput} from "../MicroComponents/AdvancedInput";

export function Test2(props) {


  return (
    <>
      2
      <AdvancedInput finish={(data) => props.finish(data.value)}/>
    </>
  );
}
