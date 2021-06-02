import React, {useContext} from 'react';
import {FormGroup, Radio, RadioGroup} from "@blueprintjs/core";
import {Context} from "../index";


export function MyRadioGroup(props) {
  const {t, config} = useContext(Context);
  const {
    name, onChange, value, label, error,
    options, inline = false, ...otherProps
  } = props;
  return (
    <FormGroup
      label={t(label)}
      labelFor={name}
      className={error ? 'error' : ''}
      labelInfo={t(error)}>
      <RadioGroup
        onChange={onChange}
        selectedValue={value}
        name={name}
        inline={inline}
        {...otherProps}>

        {options.map(({label, value}) =>
          <Radio label={t(label)} value={value} key={value}/>
        )}

      </RadioGroup>
    </FormGroup>
  );
}