import React, {useContext} from 'react';
import {LngContext} from "../helper/i18n";
import {phrase} from "../assets/ressourceLanguage";

export function Pending(props) {
  const {d=0, h=0, min=0} = props;
  const t = useContext(LngContext);
  return (
    <>
      <p> {t(phrase.pending)} </p>
      <p> {t(phrase.pendingTime)} {d}d {h}h {min} min </p>
    </>
  );
}