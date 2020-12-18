import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";

export function Html(props) {
  const t = useContext(LngContext);
  const {html, children, ...rest} = props;
  return (
    <div {...rest}
         dangerouslySetInnerHTML={{__html: t(html)}} />
  );
}

