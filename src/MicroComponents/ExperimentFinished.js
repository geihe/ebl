import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";

export function ExperimentFinished() {
  const t = useContext(LngContext);
  return (
    <div> {t(phrase.experimentFinished)} </div>
  );
}

