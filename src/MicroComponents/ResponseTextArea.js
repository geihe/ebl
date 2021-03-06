import React, {useContext, useState} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";
import styles from "../css/shortResponse.module.css"
import {Button, TextArea} from "@blueprintjs/core";

export function ResponseTextArea(props) {
  const {
    minLength = 10,
    callback,
    active = true
  } = props;
  const [text, setText] = useState('')
  const t = useContext(LngContext);
  const buttonActive=text.length >= minLength;
  return [
    <div className={styles.textAreaWrapper}>
      <TextArea
        disabled={!active}
        growVertically={true}
        placeholder={t(phrase.editablePlaceholder)}
        className={styles.textArea}
        onChange={(event) => setText(event.target.value)}
        onPaste={e => e.preventDefault()}
        value={text}
        isEditing={true} // focus on textarea
      />
      <Button
        intent={buttonActive ? 'primary' : 'none'}
        disabled={!buttonActive || !active}
        onClick={() => callback(text)}>{t(phrase.continue)}</Button>
    </div>
  ]
}