import {useEffect, useRef, useState} from "react";

export function useStateDelayed(initState) {
  const timeout = useRef(0);
  const [state, regularSetState] = useState(initState);
  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    }
  }, []);


  function setStateDelayed(newState, delay = 0) {
    const actor = typeof newState === 'function' ?
      newState : (() => regularSetState(newState));
    if (delay > 0) {
    clearTimeout(timeout.current);
      timeout.current = setTimeout(actor, delay);
    } else {
      actor();
    }
  }

  return [state, setStateDelayed];
}