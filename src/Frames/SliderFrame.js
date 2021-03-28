import React, {useContext, useState} from 'react';
import {LngContext} from "../helper/i18n";
import {FlexZone} from "../MicroComponents/FlexZone";
import {MySlider} from "../Components/MySlider";


export function SliderFrame(props) {//TODO Umbenennen in LikertFrame
  const t = useContext(LngContext);
  const {min = 1, max = 7, step = 1, minText = '', maxText = '', title = '', item} = props;
  const [value, setValue] = useState(undefined);

  const options = {
    min: 0,
    max: 100,
    stepSize: 1,
    labelStepSize: 20,
    callback: (value)=>setValue(value)
  }
  return (//TODO überall Klassen verwenden
    <FlexZone column style={{height: '500px', width: '800px'}}>
        <MySlider {...options} value={value}/>
    </FlexZone>
  );
}

