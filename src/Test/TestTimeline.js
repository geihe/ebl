import React from 'react';
import {Test1} from "./Test1";

export function TestTimeline() {
  return (
    [
      <Test1 nr={'G'}/>,
      <Test1 nr={'H'}/>,
      {
        repeat: [
          <Test1 nr={'A'}/>,
          <Test1 nr={'B'}/>,
        ],
        until: (lastLog, data) => !lastLog || lastLog.input === 'ende'
      },
      {
        milestone:true
      },
      <Test1 nr={'I'}/>,
      <Test1 nr={'J'}/>,
      <Test1 nr={'K'}/>,
    ]
  )
}