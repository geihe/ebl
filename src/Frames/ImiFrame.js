import React, {useContext} from 'react';
import styles from "../cssModules/Likert.module.css";
import {Zone} from "../MicroComponents/Zone";
import {useStateDelayed} from "../Hooks/useStateDelayed";
import {Likert} from "../Components/Likert";
import {getArray} from "../assets/ressourceIMI";
import {LngContext} from "../helper/i18n";
import {FlexZone} from "../MicroComponents/FlexZone";

export function ImiFrame(props) {
  const t = useContext(LngContext);
  const {min = 1, max = 7, step = 1, minText = '', maxText = '', title = '', item} = props;
  const [rating, setRating] = useStateDelayed(-Infinity);

  function callback(index) {
    console.log(rating, index);
    setRating(props.finish, 500);
    setRating(index);
  }

  const options = getArray(min, max, step);
  return (
    <FlexZone column style={{height: '500px', width: '800px'}}>
      <Zone className={styles.titel}>{t(title)}</Zone>
      <Zone column className={styles.itemtext}>{item}</Zone>
      <Zone className={styles.likert}>
        <div style ={{textAlign: 'right'}}>{t(minText)}</div>
        <Likert options={options} callback={callback} rating={rating}/>
        <div style ={{textAlign: 'left'}}>{t(maxText)}</div>
      </Zone>
    </FlexZone>
  );
}

