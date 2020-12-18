import React from 'react';
import {Zone} from "../MicroComponents/Zone";
import {MathTestManager} from "../helper/MathTestManager";
import {MathDistractorContinous} from "../Components/MathDistractorContinous";
import {Countdown} from "../MicroComponents/Countdown";
import {FlexZone} from "../MicroComponents/FlexZone";

export function MathDistractorFrame(props) {

  const {seconds, feedbackTime, interval1, interval2, operators} = props;
  const mm = new MathTestManager();
  mm.setInterval1(interval1).setInterval2(interval2).setOperators(operators);

  return (
    <>
      <Zone style={{top: '10px', right: '10px'}}>
        <Countdown seconds={seconds} callback={props.finish} style={{color: '#007700'}}/>
      </Zone>
      <FlexZone style={
        {width: '600px', height: '200px', backgroundColor: '#dddddd'}
      }>
        <MathDistractorContinous feedbackTime={feedbackTime} manager={mm}/>
      </FlexZone>
    </>
  );
}