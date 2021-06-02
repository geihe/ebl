import React, {useContext} from 'react';
import {FormGroup, HTMLSelect} from "@blueprintjs/core";
import {Context} from "../index";


export function MySelect(props) {
  const {t, config} = useContext(Context);
  const {
    name, onChange, label, error,
    options, ...otherProps
  } = props;

  return (
    <FormGroup
      label={t(label)}
      labelFor={name}
      className={error ? 'error' : ''}
      labelInfo={t(error)}>
      <HTMLSelect
        onChange={onChange}
        name={name}
        {...otherProps}>


      {options.map(({label, value}) =>
          <option value={value} key={value}>{t(label)}</option>
        )}

      </HTMLSelect>
    </FormGroup>
  );

}