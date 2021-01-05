import React from 'react';
import {Test1} from "./Test1";

export function testTimeline(session) {
  if (session === 1) {
    return (
      [
        <Test1 nr={'A'}/>,
        <Test1 nr={'B'}/>,
        // {
        //   milestone: true
        // },
        // <Test1 nr={'C'}/>,
        // <Test1 nr={'D'}/>,
        // <Test1 nr={'E'}/>,
        // {
        //   nextSession: true, //beendet Session und wartet auf die nächste
        //   timeBetweenSessionsInSeconds: config.timeBetweenSessionsInSeconds,
        // },
        // <Test1 nr={'Y'}/>,
      ]
    );
  } else {
    return (
      [
        <Test1 nr={'L'}/>,
        <Test1 nr={'M'}/>,
        {
          milestone: true
        },
        <Test1 nr={'N'}/>,
        <Test1 nr={'O'}/>,
        <Test1 nr={'P'}/>,
        <Test1 nr={'Z'}/>,
      ]
    );

  }
}