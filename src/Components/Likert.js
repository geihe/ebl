import React from 'react';
import styles from "../css/Likert.module.css";
import {FlexZone} from "../MicroComponents/FlexZone";

export function Likert(props) {
  const {options, callback, rating, unit} = props;

  const rb = options.map((op) => {
    const checked = (op === rating);
    return (
      <div className={`${styles.likertbox} ${checked ? styles.checked : ''}`}
           onClick={() => callback(op)}
           key={op}>
        <div>{op+unit}</div>
      </div>
    );
  });

  return (
    <FlexZone className={styles.likertwrapper}>
      {rb}
    </FlexZone>
  );
}

