import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";
import styles from "../css/shortResponse.module.css"

export function FeedbackCorrect(props) {
  const t = useContext(LngContext);
  return <div className={styles.correct}>{t(phrase.correct)}</div>
}