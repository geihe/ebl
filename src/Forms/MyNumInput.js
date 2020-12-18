import React, {useContext} from 'react';
import {FormGroup, NumericInput} from "@blueprintjs/core";
import {LngContext} from "../helper/i18n";

export function MyNumInput(props) {
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
      <NumericInput
        onValueChange={onChange}
        value={value}
        name={name}
        placeholder={t(placeholder)}
        {...otherProps}/>
    </FormGroup>
  );
}