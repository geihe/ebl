import React from 'react';
import {AdvancedInput} from "../MicroComponents/AdvancedInput";

export function Test3(props) {


  return (
    <>
      3
      <AdvancedInput finish={(data) => props.finish(data.value)}/>
    </>
  );
}
