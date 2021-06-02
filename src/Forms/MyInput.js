import React, {useContext} from 'react';
import {FormGroup, InputGroup} from "@blueprintjs/core";
import {Context} from "../index";


export function MyInput(props) {
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

      <InputGroup
        onChange={onChange}
        value={value}
        name={name}
        placeholder={t(placeholder)}
        {...otherProps}/>
    </FormGroup>
  );
}