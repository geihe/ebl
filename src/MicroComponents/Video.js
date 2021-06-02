import React, {useContext, useState} from 'react';
import {Button} from "@blueprintjs/core";
import {phrase} from "../assets/ressourceLanguage";
import {Context} from "../index";

export function Video(props) {
  const {url, callback} = props;
  const {t, config} = useContext(Context);

  const [ready, setReady] = useState(false);
  return (
    <>
      <video autoPlay controls
             src={url}
             onEnded={()=>setReady(true)}
             style={{width: '80%', marginBottom: '10px'}}
      />
      <Button
        intent={'primary'}
        disabled={!ready}
        onClick={callback}>
        {t(phrase.continue)}
      </Button>
    </>
  );
}


