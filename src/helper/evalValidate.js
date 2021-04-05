function evalValidate(expr, value, precision = 1e-5) {
  const expr2 = expr.replace(',', '.');
  let valid = false;
  try {
    const exprValue = Function('"use strict";return (' + expr2 + ')')();
    valid = Math.abs(exprValue - value) < precision;
  } catch (err) {
    valid = false;
  }
  return valid;
}

export function evalValidator(value) {
  return (expr) => evalValidate(expr, value);
}