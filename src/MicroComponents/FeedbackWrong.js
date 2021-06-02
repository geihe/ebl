import React, {useContext} from 'react';
import {phrase} from "../assets/ressourceLanguage";
import styles from "../css/shortResponse.module.css"
import {Context} from "../index";

export function FeedbackWrong(props) {
  const {t, config} = useContext(Context);

  return <div className={styles.wrong}>{t(phrase.wrong)}</div>
}