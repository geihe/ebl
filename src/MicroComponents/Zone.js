import React from 'react';

export function Zone(props) {
  const {show, children, className, style, animate=''} = props;
  const factor = show === false ? 0 : 1;
  const trans = `scale(${factor}, ${factor})`;
  let myStyle = {
    ...style,
    transform: trans,
  };

  if (typeof myStyle.top !== 'undefined' ||
    typeof myStyle.bottom !== 'undefined' ||
    typeof myStyle.left !== 'undefined' ||
    typeof myStyle.right !== 'undefined'
  ) {
    myStyle={...myStyle, position: 'absolute'}
  }
  if (animate !== '') {
    myStyle.transition = `transform ${animate}`;
  }

  return (
    <div
      style={myStyle}
      className={className}
    >
      {children}
    </div>
  );
}

