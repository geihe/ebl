import React from 'react';
import image from "../../assets/CodeBeispiel.jpg"
import {StimulusResponseFrame} from "../StimulusResponseFrame";
import {ResponseInput} from "../../MicroComponents/ResponseInput";

export function UserCode(props) {
  return <StimulusResponseFrame
      key={'userCode'}
      id={'userCode'}
      validator={(response)=> response.length==6}
      stimulus={{
        data: 'code',
        element:       <img src={image} alt={'Bitte eigenen Code erstellen.'} style={{margin: 20}}/>
      }}
      responseInput={<ResponseInput placeholder={'_ _ _ _ _ _'} minLength={6} key={'codeInput'}/>}
      finish={props.finish}
    />
}
