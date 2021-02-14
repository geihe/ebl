import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import styles from "../cssModules/DelayedFrame.module.css";
import {Zone} from "../MicroComponents/Zone";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {useKeyListenerOnce} from "../Hooks/useKeyListenerOnce";
import {phrase} from "../assets/ressourceLanguage";
import {Button} from "@blueprintjs/core";

export function DelayedButtonFrame(props) {
  const t = useContext(LngContext);
  const {
    children,
    continueText=phrase.continueText,
    delay=3000,
    contentClass=styles.zone + ' ' + styles.content+ ' ' + styles.elements,
    continueClass=styles.zone + ' ' + styles.continue,
  } = props;
  const [responseActive, setResponseActive] = useStateDelayed(!(delay > 0));
  useKeyListenerOnce(' ', () => props.finish(), responseActive);
  if (!responseActive) {
    setResponseActive(true, delay);
  }

  return (
    <React.Fragment>
      <Zone className={contentClass}>
        {children}
      </Zone>

      <Zone animate={'0.1s'}
            className={continueClass}
            show={responseActive}>
        <Button intent={'Danger'} onClick={() =>props.finish('break')}>
          {t(phrase.cancelButton)}
        </Button>
        <Button intent={'Success'} onClick={() =>props.finish('continue')}>
          {t(phrase.continueButton)}
        </Button>
      </Zone>
    </React.Fragment>
  );
}
