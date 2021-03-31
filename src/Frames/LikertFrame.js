import React, {useContext} from 'react';
import styles from "../css/Likert.module.css";
import {Zone} from "../MicroComponents/Zone";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {Likert} from "../Components/Likert";
import {getArray} from "../assets/ressourceIMI";
import {LngContext} from "../helper/i18n";
import {FlexZone} from "../MicroComponents/FlexZone";


export function LikertFrame(props) {
  const t = useContext(LngContext);
  const {min = 1, max = 7, step = 1, minText = '', maxText = '', title = '', item} = props;
  const [rating, setRating] = useStateDelayed(-Infinity);

  function callback(rating) {//TODO get delay from config
    const delay = 500;
    setRating(() => props.finish(rating), delay);
    setRating(rating);
  }

  const options = getArray(min, max, step);
  return (//TODO überall Klassen verwenden
    <FlexZone column style={{height: '500px', width: '800px'}}>
      <Zone className={styles.titel}>{t(title)}</Zone>
      <Zone column className={styles.itemtext}>{t(item)}</Zone>
      <Zone className={styles.likert}>
        <div className={styles.mintext}>{t(minText)}</div>
        <Likert options={options} callback={callback} rating={rating}/>
        <div className={styles.maxtext}>{t(maxText)}</div>
      </Zone>
    </FlexZone>
  );
}

