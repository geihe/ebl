import React, {useContext, useRef, useState} from 'react';
import {Button} from "@blueprintjs/core";
import {LngContext} from "../helper/i18n";

export function Form(props) {
  const validationSchema = props.validationSchema;
  const t = useContext(LngContext);
  const [state, setState] = useState({
    data: props.initial,
    errors: {}
  });
  const showErrors = useRef(false);
  const isValid = useRef(false);


  function handleChange(p1, p2, p3) {
    const target = p3 || p1.target;
    const value = target.value;
    const name = target.name;
    const newData = {...state.data, [name]: value};
    validate(newData);
  }

  function handleSubmit(event) {
    console.log(state.data);
    showErrors.current = true;
    validate(state.data, true);
    event.preventDefault();
  }

  function validate(data, submitting) {
    validationSchema.validate(data, {abortEarly: false})
      .then(valid => {
        isValid.current = valid;
        if (valid && submitting) {
          props.finish(state.data);
        } else {
          setState({data: data, errors: {}});
        }
      })
      .catch((err) => {
          const errors =
            err.inner.reduce((acc, cur) => {
              acc[cur.path] = cur.message;
              return acc;
            }, {});
          setState({data: data, errors: errors});
        }
      );
  }


  const components=React.Children.map(props.children,
    (c, index) => React.cloneElement(c,
    {
      'onChange': handleChange,
      'value': state.data[c.props.name],
      'error': showErrors.current && state.errors[c.props.name],
      'data': state.data,
      'key': c.props.name+'-'+index,
    }))
  return (
    <form onSubmit={handleSubmit}>
      {components}
      <Button type="submit" intent={'success'} disabled={!isValid.current && showErrors.current}>
        {t({en: 'Continue', de: 'Weiter'})}
      </Button>
    </form>
  );
}