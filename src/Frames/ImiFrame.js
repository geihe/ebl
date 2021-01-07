import React, {useContext} from 'react';
import styles from "../cssModules/Likert.module.css";
import {Zone} from "../MicroComponents/Zone";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {Likert} from "../Components/Likert";
import {getArray} from "../assets/ressourceIMI";
import {LngContext} from "../helper/i18n";
import {FlexZone} from "../MicroComponents/FlexZone";


export function ImiFrame(props) {//TODO Umbenennen in LikertFrame
  const t = useContext(LngContext);
  const {min = 1, max = 7, step = 1, minText = '', maxText = '', title = '', item} = props;
  const [rating, setRating] = useStateDelayed(-Infinity);

  function callback(index) {

    setRating(() => props.finish(index), 500);
    setRating(index);
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

