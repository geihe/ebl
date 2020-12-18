import React, {useContext} from 'react';
import {FormGroup, InputGroup} from "@blueprintjs/core";
import {LngContext} from "../helper/i18n";


export function MyInput(props) {
  const t = useContext(LngContext);
  const {
    name, onChange, value, label, error,
    placeholder, ...otherProps
  } = props;

  return (
    <FormGroup
      label={t(label)}
      labelFor={name}
      className={error ? 'error' : ''}
      labelInfo={t(error)}>

      <InputGroup
        onChange={onChange}
        value={value}
        name={name}
        placeholder={t(placeholder)}
        {...otherProps}/>
    </FormGroup>
  );
}