import React, {useContext} from 'react';
import {FormGroup, TextArea} from "@blueprintjs/core";
import {LngContext} from "../helper/i18n";


export function MyTextArea(props) {
  const t = useContext(LngContext);
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