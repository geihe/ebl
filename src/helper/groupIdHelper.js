export function groupId(pNeu, pSum) {
  const neu=pNeu;
  const sum=pSum.map(s=>convertAttrToNumbers(s));
  console.log(sum);
  function groupProbs(data, attr) {
    const attrData = data.map(b => b.map(c => c[attr]));
    const sig2 = attrData.map(d => arrayStat(d).sig2);
    const min = Math.min(...sig2);
    const max = Math.max(...sig2);
    const delta = max - min;
    if (delta > 0) {
      const rating2 = sig2.map(e => ((max - e) / delta) ** 2);
      const ratingSum = rating2.reduce((acc, cur) => acc + cur, 0);
      return rating2.map(r => r / ratingSum);
    } else {
      const rez = 1 / sig2.length;
      return sig2.map(r => rez);
    }
  }

  function sumArray(serverData) {
    const sum = [];
    serverData.forEach(d => sum[d.group_id - 1] = convertAttrToNumbers(d));
    for (let i = 0; i < 4; i++) {
      if (!sum[i]) {
        sum[i] = {group_id: i + 1, n: 0, male: 0, age: 0}
      }
    }
    return sum;
  }

  function convertAttrToNumbers(o) {
    Object.keys(o).forEach(key => o[key] = +o[key]);
    return o;
  }

  function addNeu(neu, groupId, old) {
    console.log(neu, groupId, old);

    return {
      group_id: +groupId,
      n: +old.n + 1,
      male: +old.male + neu.male ? 1 : 0,
      age: (+old.age * old.n + neu.age) / (+old.n + 1),
    }
  }

  function addNeuSum(neu, groupId, sum) {
    console.log(sum);
    const res = [...sum];
    res[groupId - 1] = addNeu(neu, groupId, sum[groupId - 1]);
    return res;
  }

  function arrayStat(a) {
    const sum = a.reduce((acc, cur) => acc + cur, 0);
    const mean = sum / a.length;
    const sig2 = a.reduce((acc, cur) => acc + (cur - mean) * (cur - mean), 0) / a.length;
    const sig = Math.sqrt(sig2);
    return {sum, mean, sig2, sig}
  }

  function normArray(a) {
    const sum = a.reduce((acc, cur) => acc + cur, 0);
    return a.map(v => v / sum);
  }

  function randomWeightedGroupId(a) {
    const aNorm = normArray(a);
    const rnd = Math.random();
    let sum = 0;
    let index = 0;
    while (rnd >= sum) {
      sum += aNorm[index];
      index++;
    }
    return index;
  }

  //const rest = sum.map(((s, index) => ziel[index]-s.n));
  const potentialNeu = [
    addNeuSum(neu, 1, sum),
    addNeuSum(neu, 2, sum),
    addNeuSum(neu, 3, sum),
    addNeuSum(neu, 4, sum)
  ];
  console.log(potentialNeu);
  const nProbs = groupProbs(potentialNeu, 'n');
  const ageProbs = groupProbs(potentialNeu, 'age');
  const maleProbs = groupProbs(potentialNeu, 'male');
  console.log(nProbs, ageProbs, maleProbs);
  const [nWeight, ageWeight, maleWeight] = [3, 1, 0.5];

  const probs = [];
  for (let i = 0; i <= 3; i++) {
    probs.push(nProbs[i] * nWeight + ageProbs[i] * ageWeight + maleProbs[i] * maleWeight);
  }
  // console.log(probs);
  return randomWeightedGroupId(probs);
}