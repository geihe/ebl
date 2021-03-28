import React from 'react';
import "../css/Slider.css";
import {FlexZone} from "../MicroComponents/FlexZone";
import {Slider} from "@blueprintjs/core";

export function MySlider(props) {
  const {min, max, stepSize, labelStepSize, value, callback} = props;
  console.log(props);
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
  console.log(value);
  const rb =
    <Slider
      value={value}
      min={min}
      max={max}
      stepSize={stepSize}
      labelStepSize={value===undefined ? max-min : labelStepSize}
      onChange={callback}
      className={value===undefined  ? 'slider-no-handle' : ''}
      />
      // labelRenderer={(val) => value === undefined ? '' : val}/>

  return (
    <FlexZone>
      {rb}
    </FlexZone>
  );
}

