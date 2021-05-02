import {useEffect} from "react";

export function useKeyListenerOnce(myKey, callback, active) {
  useEffect(() => {
    if (active) {
      document.addEventListener('keypress', handleKeyPress, {once: true});
    }
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [active]);

  function handleKeyPress(e) {
    if (active && myKey === e.key) {
      document.removeEventListener('keypress', handleKeyPress);
      callback();
    }
  }
}