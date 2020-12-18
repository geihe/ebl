import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";
import styles from "../cssModules/shortResponse.module.css"
import {Button, Radio, RadioGroup} from "@blueprintjs/core";
import {useStateDelayed} from "../Hooks/useStateDelayed";

export function ResponseRadioButtons(props) {
    const {callback, autoContinue = false, delay=500, options = []} = props;
    const [value, setValue] = useStateDelayed(null)
    const t = useContext(LngContext);
    if (value && autoContinue) {
        setValue(() => callback(value), delay);
    }
    return (
        <div className={styles.radioWrapper}>
            <RadioGroup
                className={styles.radioGroup}
                selectedValue={value}
                onChange={(event) => setValue(event.currentTarget.value)}
            >
                {options.map(o =>
                    <Radio label={o.label} value={String(o.value)} key={o.value}/>)}
            </RadioGroup>
            {autoContinue ? null :
                <Button
                    intent={value ? 'primary' : 'none'}
                    disabled={!value}
                    onClick={() => callback(value)}>{t(phrase.continue)}</Button>
            }
        </div>
    );
}