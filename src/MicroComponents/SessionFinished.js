import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";
import styles from "../cssModules/SessionFinished.module.css";

export function SessionFinished(props) {
  const {nextSessionStart} = props;
  const t = useContext(LngContext);
  if (!nextSessionStart) {
    return (
      <div> {t(phrase.experimentFinished)} </div>
    );
  }
  return (
    <div class={styles.zone}>
      <p> {t(phrase.sessionFinished)} </p>
      <p> {t(phrase.pending)} </p>
      <p> {t(phrase.pendingTime)}
        <span class={styles.time}>
          {timeString((nextSessionStart - Date.now()) / 1000)}
        </span>
      </p>
    </div>
  );
}

function timeString(timeInSeconds) {
  let remainingTimeInSeconds = timeInSeconds;
  const days = Math.floor(remainingTimeInSeconds / 86400);
  remainingTimeInSeconds -= days * 86400;
  const hours = Math.floor(remainingTimeInSeconds / 3600);
  remainingTimeInSeconds -= hours * 3600;
  const minutes = Math.floor(remainingTimeInSeconds / 60);
  remainingTimeInSeconds -= minutes * 60;
  const seconds = Math.floor(remainingTimeInSeconds);

  if (days > 0) {
    return `${days}d ${hours}h`;
  }
  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  }
  if (minutes > 0) {
    return `${minutes}min ${seconds}s `;
  }
  return `${seconds}s `;
}