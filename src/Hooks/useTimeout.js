import {useEffect, useRef} from "react";

export function useTimeout(...paramArray) {
  const timeoutArray = useRef([]);
  useEffect(() => {
    buildTimeouts();
    return () => {
      timeoutArray.current.forEach(to => clearTimeout(to));
    }
  }, []);

  function buildTimeouts() {
    const promiseTimeout = time => () => new Promise(resolve => {
      time <= 0 ? resolve() : timeoutArray.current.push(setTimeout(resolve, time));
    });

    paramArray.map(a => isNaN(a) ? a : promiseTimeout(a))
      .reduce(
        (acc, cur) => {
          return acc.then(cur)
        }, startPromise
      );
  }

  let startFunction;

  const startPromise = new Promise((resolve) => startFunction = resolve);

  return startFunction;
}