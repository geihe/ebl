import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";

export function SessionFinished(props) {
  const {nextSessionStart} = props;
  const t = useContext(LngContext);
  if (!nextSessionStart) {
    return (
      <div> {t(phrase.experimentFinished)} </div>
    );
  }

  let remainingTimeInSeconds = (nextSessionStart - Date.now())/1000;
  const days = Math.floor(remainingTimeInSeconds / 86400);
  remainingTimeInSeconds -= days * 86400;
  const hours = Math.floor(remainingTimeInSeconds / 3600);
  remainingTimeInSeconds -= hours * 3600;
  const minutes = Math.floor(remainingTimeInSeconds / 60);

  return (
    <>
      <p> {t(phrase.sessionFinished)} </p>
      <p> {t(phrase.pending)} </p>
      <p> {t(phrase.pendingTime)} {days}d {hours}h {minutes}min </p>
    </>
  );
}
