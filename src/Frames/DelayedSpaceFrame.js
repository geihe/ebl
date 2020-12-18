import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import styles from "../cssModules/TextFrame.module.css";
import {Zone} from "../MicroComponents/Zone";
import {Html} from "../MicroComponents/Html";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {useKeyListenerOnce} from "../Hooks/useKeyListenerOnce";
import {phrase} from "../assets/ressourceLanguage";

export function DelayedSpaceFrame(props) {
  const t = useContext(LngContext);
  const {
    children,
    continueText=phrase.continueText,
    delay=3000,
    contentClass=styles.zone + ' ' + styles.text+ ' ' + styles.elements,
    continueClass=styles.zone + ' ' + styles.continue,
  } = props;
  const [responseActive, setResponseActive] = useStateDelayed(!(delay > 0));
  useKeyListenerOnce(' ', () => props.finish(), responseActive);
  if (!responseActive) {
    setResponseActive(true, delay);
  }
  //TODO eigene styles (hier von TextFrame übernommen
  return (
    <React.Fragment>
      <Zone className={contentClass}>
        {children}
      </Zone>

      <Zone animate={'0.1s'}
            className={continueClass}
            show={responseActive}>
        <Html html={t(continueText)}/>
      </Zone>
    </React.Fragment>
  );
}
