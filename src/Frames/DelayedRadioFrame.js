import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import styles from "../css/DelayedFrame.module.css";
import {Zone} from "../MicroComponents/Zone";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {Radio, RadioGroup} from "@blueprintjs/core";

export function DelayedRadioFrame(props) {
  const t = useContext(LngContext);
  const {
    options,
    label,
    inline,
    name,
    large,
    contentClass = styles.zone + ' ' + styles.content + ' ' + styles.radio,
    delay = 500, //delay=0 -> Continue-Element erscheint sofort
  } = props;
  const [selected, setSelected] = useStateDelayed('');

  const onChange = (el) => {
    const value = el.target.value;
    setSelected(value);
    setSelected(() => props.finish(value), delay);
  }

  const radios=(
    <RadioGroup
      className={styles.radio}
      onChange={onChange}
      selectedValue={selected}
      label={t(label)}
      name={t(name)}
      inline={inline}
    >
      {options.map(({label, value}) =>
        <Radio
          large={large} label={t(label)} value={value} key={value}/>
      )}
    </RadioGroup>
  )

  return (
    <React.Fragment>
      <Zone className={contentClass}>
        {radios}
      </Zone>
    </React.Fragment>
  );
}
