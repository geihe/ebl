import React, {useContext} from 'react';
import {LngContext} from "../../helper/i18n";
import styles from "../../cssModules/TextFrame.module.css";
import {Zone} from "../../MicroComponents/Zone";
import {Html} from "../../MicroComponents/Html";
import {useStateDelayed} from "../../Hooks/useStateDelayed";
import {useKeyListenerOnce} from "../../Hooks/useKeyListenerOnce";


//props:
// text (html, continue), delay)
export function ElementsKeyFrame(props) {
  const t = useContext(LngContext);
  const {elements, continueText, delay} = props;
  const [responseActive, setResponseActive] = useStateDelayed(!(delay > 0));
  useKeyListenerOnce(' ', () => props.finish(), responseActive);
  if (!responseActive) {
    setResponseActive(true, delay);
  }
  //TODO eigene styles (hier von TextFrame übernommen
  return (
    <React.Fragment>
      <Zone className={styles.zone + ' ' + styles.text+ ' ' + styles.elements}>
        {flatArrayWithComponents(elements)}
      </Zone>

      <Zone style={{bottom: '100px'}}
            className={styles.zone + ' ' + styles.continue}
            show={responseActive}>
        <Html html={t(continueText)}/>
      </Zone>
    </React.Fragment>
  );
}

//TODO kommt zweimal vor
// TODO hier Problem mit Mehrsprachigkeit: Wo rufe ich t() in Komponenten auf?
function flatArrayWithComponents(...params) {
  const flatArray = [].concat(...params);

  return flatArray
    .map(el =>
      React.isValidElement(el) ? el : <Html html={el}/>
    );
}