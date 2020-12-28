import React from 'react';
import {Test1} from "./Test1";

export function testTimeline() {
  return (
    [
      <Test1 nr={'A'}/>,
      <Test1 nr={'B'}/>,
      {
        milestone:true
      },
      <Test1 nr={'C'}/>,
      <Test1 nr={'D'}/>,
      {
        milestone:true
      },
      <Test1 nr={'E'}/>,
    ]
  )
}