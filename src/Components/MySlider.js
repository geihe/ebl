import React from 'react';
import styles from "../cssModules/Likert.module.css";
import {FlexZone} from "../MicroComponents/FlexZone";
import {Slider} from "@blueprintjs/core";

export function MySlider(props) {
  const {options, callback, rating} = props;

/*  const rb = options.map((op) => {
    const checked = (op === rating);
    return (
      <div className={`${styles.likertbox} ${checked ? styles.checked : ''}`}
           onClick={() => callback(op)}
           key={op}>
        <div>{op}</div>
      </div>
    );
  });*/

  const rb=
    <Slider />

  return (
    <FlexZone className={styles.likertwrapper}>
      {rb}
    </FlexZone>
  );
}

