import React, {useContext, useState} from 'react';
import {LngContext} from "../helper/i18n";
import {Button} from "@blueprintjs/core";
import {phrase} from "../assets/ressourceLanguage";

export function Video(props) {
  const {url, callback} = props;
  const t = useContext(LngContext);
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


