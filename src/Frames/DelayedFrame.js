import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import styles from "../css/DelayedFrame.module.css";
import {Zone} from "../MicroComponents/Zone";
import {Html} from "../MicroComponents/Html";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {useKeyListenerOnce} from "../Hooks/useKeyListenerOnce";
import {phrase} from "../assets/ressourceLanguage";
import {Button} from "@blueprintjs/core";
import {FlexZone} from "../MicroComponents/FlexZone";
import {TimefactorContext} from "../index";

export function DelayedFrame(props) {
  const t = useContext(LngContext);
  const timeFactor = useContext(TimefactorContext);
  console.log(timeFactor);
  const {
    children,
    continueText = phrase.continueText,
    cancelButton, //Button abbrechen hinzufügen
    cancelButtonText = phrase.cancelButton,
    continueButtonText = phrase.continueButton,
    delay = 3000, //delay=0 -> Continue-Element erscheint sofort
    auto,         //automatisch weiter nach Zeit
    noResponse,   //es erscheint kein Continue-Element, Frame wird endlos angezeigt
    space,        //Weiter mit Leertaste
    style,
    contentClass = styles.zone + ' ' + styles.content,
    continueClass = styles.zone + ' ' + styles.continue,
  } = props;
  const [responseActive, setResponseActive] = useStateDelayed(!(delay > 0) && !noResponse);
  useKeyListenerOnce(' ', () => props.finish(), responseActive && space);
  if (auto) {
    setResponseActive(() => props.finish(), delay/timeFactor);
  }
  if (!responseActive && !noResponse && !auto) {
    setResponseActive(true, delay/timeFactor);
  }

  let continueElement;
  if (space) {
    continueElement = <Html html={t(continueText)}/>;
  } else if (!auto) {
    continueElement =
      <>
        {cancelButton ?
          <Button intent={'Danger'} onClick={() => props.finish('break')}>
          {t(cancelButtonText)}
        </Button> : null}
        <Button intent={'Success'} onClick={() => props.finish('continue')}>
          {t(continueButtonText)}
        </Button>
      </>;
  }
  return (
    <FlexZone style={style}>
      <Zone className={contentClass}>
        {children}
      </Zone>

      <Zone animate={'0.1s'}
            className={continueClass}
            show={responseActive}>
        {continueElement}
      </Zone>
    </FlexZone>
  );
}
