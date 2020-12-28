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
      {
        nextSession: true, //beendet Session und wartet auf die nächste
        start: new Date(Date.now()+1000*3600),
      },
      <Test1 nr={'Z'}/>,
    ]
  )
}