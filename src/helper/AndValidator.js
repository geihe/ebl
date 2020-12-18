export class AndValidator {
  constructor(callback) {
    this.callbackMap= new Map();
    this.callback=callback;
  }

  createCallback( ){
    const callback = (param) => {
      this.receiveCallback(callback, param);
    };
    this.callbackMap.set(callback, false);
    return callback;
  }

  receiveCallback(callback, param = true) {
    this.callbackMap.set(callback, param);
    if (this.callback && this.isValid() ) {
      this.callback(true);
    }
  }

  isValid() {
    const valuesArray=[...this.callbackMap.values()];
    return valuesArray.every(Boolean); //prüft, ob alle registrierten Callbacks true ergeben
  }
}
