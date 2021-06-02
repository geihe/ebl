import React, {useContext} from 'react';
import {phrase} from "../assets/ressourceLanguage";
import styles from "../css/shortResponse.module.css"
import {Context} from "../index";

export function FeedbackCorrect(props) {
  const {t, config} = useContext(Context);

  return <div className={styles.correct}>{t(phrase.correct)}</div>
}