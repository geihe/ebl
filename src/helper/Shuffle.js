export class Shuffler {

  static shuffledArray(length) {
    const a = [...Array(length).keys()];
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  static shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  static shuffleArrayImmute(a) {
    return Shuffler.shuffleArray(a.slice());
  }

  static shuffleAttribute(objArray, attr) {
    const attrArray = Shuffler.shuffleArray(objArray.map(o => o[attr]));
    return objArray.map((o, index) =>
      Object.assign({}, o, {[attr]: attrArray[index]}));
  }

}