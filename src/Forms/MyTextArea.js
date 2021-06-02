import React, {useContext} from 'react';
import {FormGroup, TextArea} from "@blueprintjs/core";
import {Context} from "../index";


export function MyTextArea(props) {
  const {t, config} = useContext(Context);
  const {
    name, onChange, value, label, error, ...otherProps
  } = props;

  return (
    <FormGroup
      label={t(label)}
      labelFor={name}
      className={error ? 'error' : ''}
      labelInfo={t(error)}>

      <TextArea
        onChange={onChange}
        value={value}
        name={name}
        {...otherProps}/>

    </FormGroup>
  );
}