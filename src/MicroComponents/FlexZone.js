import React from 'react';
import {Zone} from "./Zone";

export function FlexZone(props) {
  const {children, style, column, ...rest} = props;
  const direction = column ? 'column' : 'row';
  let myStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: direction,
    width: '100%',
    height: '100%',
    ...style,
  };

  return (
    <Zone
      style={myStyle}
      {...rest}
    >
      {children}
    </Zone>
  );
}

