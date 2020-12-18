import React from 'react';
import {AdvancedInput} from "../MicroComponents/AdvancedInput";

export function Test1(props) {
  const {nr} = props;
  return (
    <>
      {nr}
      <AdvancedInput finish={(data) => props.finish({input: data.value, nr})}/>
    </>
  );
}
