import React from 'react';
import styles from "../cssModules/Likert.module.css";
import {FlexZone} from "../MicroComponents/FlexZone";

export function Likert(props) {
  const {options, callback, rating} = props;

  const optionStyle={
    backgroundColor: '#eeeeee',
    border: '#cccccc',
    margin: '5px'
  };

  const rb = options.map((op) => {
    const checked = (op === rating);
    return (
      <div className={`${styles.likertbox} ${checked ? styles.checked : ''}`}
           onClick={() => callback(op)}
           key={op}>
        <div>{op}</div>
      </div>
    );
  });

  return (
    <FlexZone className={styles.likertwrapper}>
      {rb}
    </FlexZone>
  );
}

