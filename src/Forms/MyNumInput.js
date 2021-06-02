import React, {useContext} from 'react';
import {FormGroup, NumericInput} from "@blueprintjs/core";
import {Context} from "../index";

export function MyNumInput(props) {
  const {t, config} = useContext(Context);
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