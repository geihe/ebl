import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";
import styles from "../cssModules/shortResponse.module.css"

export function FeedbackWrong(props) {
  const t = useContext(LngContext);
  return <div className={styles.wrong}>{t(phrase.wrong)}</div>
}