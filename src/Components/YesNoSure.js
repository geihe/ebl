import React, {useContext} from 'react';
import {FlexZone} from "../MicroComponents/FlexZone";
import {LngContext} from "../helper/i18n";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {Likert} from "./Likert";
import styles from "../cssModules/shortResponse.module.css"
import {Radio, RadioGroup} from "@blueprintjs/core";
import {Zone} from "../MicroComponents/Zone";

export function YesNoSure(props) {
  const {callback, config, delay = 500} = props;
  const t = useContext(LngContext);
  const [values, setValues] = useStateDelayed({answer: null, rating: null})
  const options = [{value: 'richtig', label: 'Richtig'}, {value: 'falsch', label: 'Falsch'}];

  if (values.answer && values.rating) {
    setValues(() => callback(values), delay)
  }

  return (
    <FlexZone column>
      <div className={styles.radioWrapper}>
        <RadioGroup
          className={styles.radioGroup}
          inline={true}
          selectedValue={values.answer}
          onChange={(event) => setValues({...values, answer: event.currentTarget.value})}
        >
          {options.map(o =>
            <Radio label={o.label} value={String(o.value)} key={o.value}/>)}
        </RadioGroup>
      </div>
        <Zone show={!!values.answer} animate={'0.1s'}>
          <h3>Wie sicher bist du bei deiner Antwort?</h3>
          <Likert //TODO sehr unsicher/sicher  -  Rahmen
            callback={(rating) => setValues({...values, rating: rating})}
            options={[1, 2, 3, 4, 5]}
            rating={values.rating}
          />
        </Zone>
    </FlexZone>
  );
}

