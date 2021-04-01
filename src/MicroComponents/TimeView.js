import React from 'react';

export function TimeView(props) {
  const {seconds, noDefaultStyle} = props;
  const defaultStyle = noDefaultStyle ? {} :
    {
      fontSize: '30px',
      color: 'blue',
      padding: '5px',
      minWidth: '100px',
      textAlign: 'center',
    }
  const style = {...defaultStyle, ...props.style}
  let time;
  if (seconds <= 60) {
    time = seconds + ' s';
  } else {
    time = '>' + Math.floor((seconds-0.1) / 60) + ' min';
  }

  return (
    <div style={style} className={'timeview'}>
      {time}
    </div>
  );
}
