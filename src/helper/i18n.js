import React from "react";

export const LngContext = React.createContext(null);

export function translate(language, ressource, param) {
  if (!ressource)  {
    return '';
  }

  if (typeof ressource === 'string') {
    return ressource;
  }

  if (param && ressource.hasOwnProperty(language + '_' + param)) {
    return ressource[language+ '_' + param];
  }
  if (ressource.hasOwnProperty(language)) {
    return ressource[language];
  }

  const props = Object.getOwnPropertyNames(ressource).filter(s=>s.includes(language+'_'));
  if (props.length > 0) {
    return ressource[props[0]];
  }

  return Object.values(ressource)[0];
}