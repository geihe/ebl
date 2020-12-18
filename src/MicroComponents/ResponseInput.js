import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";
import styles from "../cssModules/shortResponse.module.css"
import {AdvancedInput} from "./AdvancedInput";

export function ResponseInput(props) {
  const {callback, minLength} = props;
  const t = useContext(LngContext);
  return <AdvancedInput
    placeholder={t(phrase.editablePlaceholder)}
    className={styles.input}
    minLength={minLength}
    finish={(o) => callback(o.value, o)}
  />
}