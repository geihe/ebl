import React, {useContext, useRef, useState} from "react";
import {Context} from "../index";

//props: ignoreKeys[], allowKeys[], endKeys[], placeholder, style
export function AdvancedInput(props) {
  const {t, config} = useContext(Context);

  const {
    ignoreKeys=[],
    allowKeys=[],
    endKeys=["Enter"],
    style,
    placeholder,
    minLength=0,
  } = props;

  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }


  const timeKeys = useRef([]);
  const startTime = useRef(performance.now());

  function handle(event) {
    timeKeys.current.push({
      key: event.key,
      time: performance.now() - startTime.current
    });
    if (endKeys.includes(event.key) && value.length >= minLength) {
      event.preventDefault();
      event.currentTarget.removeEventListener(event.type, handle);
      props.finish({value: value.trim(), timeKeys: timeKeys.current});
    } else if (
      (allowKeys.length > 0 && !allowKeys.includes(event.key)) ||
      ignoreKeys.includes(event.key)
    ) {
      event.preventDefault();
    }
  }

  return <input
    autoFocus={true}
    style={style}
    onKeyDown={handle}
    onChange={handleChange}
    onPaste={e => e.preventDefault()}
    placeholder={t(placeholder)}/>
}

