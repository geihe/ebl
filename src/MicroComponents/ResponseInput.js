import React, {useContext} from 'react';
import {phrase} from "../assets/ressourceLanguage";
import styles from "../css/shortResponse.module.css"
import {AdvancedInput} from "./AdvancedInput";
import {Context} from "../index";

export function ResponseInput(props) {
  const {callback, minLength} = props;
  const {t, config} = useContext(Context);

  return <AdvancedInput
    placeholder={t(phrase.editablePlaceholder)}
    className={styles.input}
    minLength={minLength}
    finish={(o) => callback(o.value, o)}
  />
}