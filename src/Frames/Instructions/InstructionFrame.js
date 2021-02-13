import React from 'react';
import {DelayedSpaceFrame} from "../DelayedSpaceFrame";
import {Html} from "../../MicroComponents/Html";
import {UniBielefeld} from "../../MicroComponents/UniBielefeld";

export function InstructionFrame(props) {
  const {html} = props;
  return (<> //TODO bei kleiner Höhe des Bildschirms Höhen anpassen
      <UniBielefeld/>
      <DelayedSpaceFrame finish={props.finish}>
        <Html html={html}/>
      </DelayedSpaceFrame>
    </>
  );
}

export function InstructionFrame01(props) {
  const html=`
  Herzlich willkommen zur Studie „Gleichzeitiges Lernen von mehreren stochastischen Konzepten“
  Hinweis: es folgt nach „Weiter mit der Leertaste“ eine Videoinstruktion. Schalte bitte deinen Ton an.
  `;

  return <InstructionFrame html={html} finish={props.finish}/>;
}

