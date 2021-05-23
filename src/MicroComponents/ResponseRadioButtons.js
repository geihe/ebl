import React, {useContext, useState} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";
import styles from "../css/shortResponse.module.css"
import {Button, Radio, RadioGroup} from "@blueprintjs/core";
import {useStateDelayed} from "../Hooks/useStateDelayed";

export function ResponseRadioButtons(props) {
  const {callback, display = true, inline, autoContinue = false, delay = 500, options = []} = props;
  const [value, setValue] = useState(null);
  const [delayed, setDelayed] = useStateDelayed(false);
  const t = useContext(LngContext);

  if (!display) {
    return null;
  }

  if (delayed) {
    setDelayed(() => callback(options[value]), delay);
    setDelayed(false);
  }

  const onChange = (event) => {
    setValue(() => event.currentTarget.value);
    setDelayed(true); //TODO sauberer Programmieren
  };

  return (
    <div className={styles.radioWrapper}>
      <RadioGroup
        className={styles.radioGroup}
        inline={inline}
        selectedValue={value}
        onChange={onChange}
      >
        {options.map((o, index) =>
          <Radio label={o.label} value={String(index)} key={o.value}/>)}
      </RadioGroup>
      {autoContinue ? null :
        <Button
          intent={value ? 'primary' : 'none'}
          disabled={!value}
          onClick={() => callback(value)}>{t(phrase.continue)}</Button>
      }
    </div>
  );

}