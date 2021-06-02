import React, {useContext} from 'react';
import {Context} from "../index";

export function Html(props) {
  const {t, config} = useContext(Context);

  const {html, children, ...rest} = props;
  return (
    <div {...rest}
         dangerouslySetInnerHTML={{__html: t(html)}} />
  );
}

