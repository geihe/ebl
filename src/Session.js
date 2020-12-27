import React, {useRef, useState} from "react";
import {Zone} from "./MicroComponents/Zone";


export function Session(props) {
  const {timeline} = props;
  const packageJson = require('../package.json');
  const [index, setIndex] = useState(0);
  const data = useRef([{version: packageJson.version}]);
  const storageIndex = +localStorage.getItem('index');

  if (index >= timeline.length) {
    return finish();
  }

  if (storageIndex > index) {
    setIndex(storageIndex);
    data.current = JSON.parse(localStorage.getItem('data'));
  }

  let el = timeline[index];
  let tempIndex = index;

  while (el.type !== 'frame') { //TODO Ist das sicher, wenn die Timeline nicht mit einem Frame endet?
    switch (el.type) {
      case 'jump':
        tempIndex += el.jumpRel;
        break;
      case 'jumpif':
        const last = data.current[data.current.length-1];
        if (el.jumpif(last.log, data.current)) {
          tempIndex += el.jumpRel;
        } else {
          tempIndex++;
        }
        break;
      case 'milestone':
        tempIndex++;
        localStorage.setItem('data', JSON.stringify(data.current));
        localStorage.setItem('index', '' + tempIndex);
        break;
      default:
        console.log('Error in App.js, Element.type not found.');
    }
    el = timeline[tempIndex];
  }

  const startTime = new Date().toLocaleString('de');

  el = timeline[tempIndex];
  const content = React.cloneElement(
    el.frame,
    {
      finish: (logData) => next(tempIndex + 1, logData),
      key: el.key
    }
  );
  const progressBar = el.noProgress ? <div/> :
    <progress id="progress-bar" value={el.cumEffort} max="100" style={{width: '90%'}}/>;

  return <>
    <header/>
    <main>
      <aside id="left-aside"/>
      <article>{content}</article>
      <aside id="right-aside"/>
    </main>
    <footer>
      <Zone style={{width: '50%'}}>
        {progressBar}
      </Zone>
    </footer>
  </>;

  function next(newIndex, logData) {
    data.current.push(
      {
        index: index,
        component: el.frame.type.name,
        id: el.id,
        startTime: startTime,
        endTime: new Date().toLocaleString('de'),
        log: logData,
      });

    setIndex(newIndex);
  }

  function finish() {
    console.log("data:", data.current);
    return <div>Ende</div> //Ende der Timeline
  }
}

