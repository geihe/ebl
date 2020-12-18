import React, {useEffect, useRef, useState} from 'react';
import {TimeView} from "./TimeView";

export function Countdown(props) {
    const {
        style,
        seconds,
        noDefaultStyle,
        callback
    } = props;
    const [time, setTime] = useState(seconds);
    const myIntervall = useRef(null);
    useEffect(() => {
        myIntervall.current = setInterval(intervalHandler, 1000);
        return () => {
            clearTimeout(myIntervall.current);
        }
    });

    function intervalHandler() {
        if (time > 0) {
            setTime(time - 1);
        } else {
            clearTimeout(myIntervall.current);
            callback();
        }
    }

    return <TimeView seconds={time} noDefaultStyle={noDefaultStyle} style={style}/>;
}

