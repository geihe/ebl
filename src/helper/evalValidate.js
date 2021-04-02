function evalValidate(expr, value, precision=1e-5) {
  const expr2=expr.replace(',','.');

  const exprValue = Function('"use strict";return (' + expr2 + ')')();;
  return Math.abs(exprValue-value)<precision;
}

export function evalValidator(value){
  return (expr) => evalValidate(expr, value);
}