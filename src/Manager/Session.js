import React, {useRef, useState} from "react";
import {Zone} from "../MicroComponents/Zone";
import {TimeView} from "../MicroComponents/TimeView";
import {useStateDelayed} from "../Hooks/useStateDelayed";


function Frame(props) {
  const {el} = props;
  const [remainingTime, setRemainigTime] = useStateDelayed(el.timer || 0);

  const hasTimer = typeof el.timer !== 'undefined';
  const isTicking = useRef(hasTimer && remainingTime > 0);
  const expired = hasTimer && remainingTime <= 0;
  const content = React.cloneElement(
    el.frame,
    {
      finish: props.finish,
      key: el.key
    }
  );

  const progressBar = el.noProgress ? <div/> :
    <progress id="progress-bar" value={el.cumEffort} max="100" style={{width: '90%'}}/>;

  if (isTicking.current) {
    if (expired) {
      setRemainigTime(() => {

        isTicking.current = false;
        console.log("Vorbei"); //TODO Meldung Timer abgelaufen
        props.finish('timer expired');
      }, 1000);
    } else {
      setRemainigTime(remainingTime - 1, 1000);
    }
  }
  if (expired) {
    props.finish('timer expired');
  }

  return expired ? null :
    <>
      <header>{isTicking.current ? <TimeView seconds={remainingTime}/> : null}</header>
      <main>
        <aside id="left-aside"/>
        <article>{content}</article>
        <aside id="right-aside"/>
      </main>
      <footer>
        <Zone style={{width: "50%"}}>
          {progressBar}
        </Zone>
      </footer>
    </>;
}

export function Session(props) {
  const {timeline, initialData} = props;

  const [index, setIndex] = useState(0);
  const data = useRef(initialData);

  if (index >= timeline.length || data.current[0].finished) {
    return finish();
  }

  const storageIndex = +localStorage.getItem('index');
  if (storageIndex > index) {
    setIndex(storageIndex);
    data.current = JSON.parse(localStorage.getItem('data'));
  }

  let el = timeline[index];
  let tempIndex = index;
  while (el && el.type !== 'frame') {
    switch (el.type) {
      case 'jump':
        tempIndex += el.jumpRel;
        break;
      case 'jumpif':
        const last = data.current[data.current.length - 1];
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
      case 'nextSession':
        tempIndex = Number.MAX_VALUE;
        data.current[0].finished = true;
        data.current[0].nextSessionStart = new Date(Date.now() + 1000 * el.timeBetweenSessionsInSeconds);
        console.log(data.current);
        localStorage.setItem('data', JSON.stringify(data.current));
        localStorage.setItem('index', '' + Number.MAX_VALUE);
        break;
      default:
        console.log('Error in App.js, Element.type not found.');
    }
    el = timeline[tempIndex];
  }

  const startTime = new Date().toLocaleString('de');

  el = timeline[tempIndex];
  if (!el) {
    return finish();
  }





  return <Frame
    el={el}
    finish={(logData) => next(tempIndex + 1, logData)}
    tempIndex={tempIndex}
    key={el.timer ? null : tempIndex}
  />;

  function next(newIndex, logData) {
    if (!el.noLog) {
      data.current.push(
        {
          index: index,
          component: el.frame.type.name,
          id: el.id,
          startTime: startTime,
          endTime: new Date().toLocaleString('de'),
          log: logData,
        });
    }
    setIndex(newIndex);
  }

  function finish() {//Ende der Timeline
    data.current[0].finished = true;
    props.finished(data.current);
    return null;
  }
}