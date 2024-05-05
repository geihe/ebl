const idsPZ=['Test_pz-rvt1','Test_pz-rvt2','Test_pz-rvt3','Test_pz-rvt4','Test_pz-rvt5','Test_pz-rvt6','Test_pz-rvt7','Test_pz-rvt8'];
const idsLW=['Test_lw-rvt1','Test_lw-rvt2','Test_lw-rvt3','Test_lw-rvt4','Test_lw-rvt5','Test_lw-rvt6','Test_lw-rvt7','Test_lw-rvt8'];
const idsPostConcept=['Test_postConcept_1','Test_postConcept_2','Test_postConcept_3','Test_postConcept_4',];
const idsAlleGebunden = [idsPZ, idsLW, idsPostConcept].flat();

const idsPrePost = ['Test_postMC_1','Test_postMC_3','Test_postMC_6','Test_postMC_7',];
const idsPre=['Test_pre1step_1','Test_pre1step_2','Test_pre1step_3','Test_pre1step_4','Test_preMulti_1','Test_preMulti_2','Test_preMulti_3','Test_preMulti_4',]
const idsPost = ['Test_postNT2step_1','Test_postNT2step_2','Test_postNT2step_3','Test_postNT2step_4','Test_postFT2step_1','Test_postFT2step_2','Test_postFT2step_3','Test_postFT2step_4','Test_postMC_1_draw3','Test_postMC_3_draw3','Test_postMC_6_draw3','Test_postMC_7_draw3'];



function firstHalf(arr) {
  const half = Math.floor(arr.length / 2);
  return arr.slice(0, half);
}
function secondHalf(arr) {
  const half = Math.floor(arr.length / 2);
  return arr.slice(half);
}

export class FeedbackManager {
  constructor(dataRef) {
    this.dataRef=dataRef;
  }
  myFilter = ids => (d => ids.includes(d.id));
  alleGebunden = () => this.dataRef.current.filter(this.myFilter(idsAlleGebunden));
  pre = () => this.dataRef.current.filter(this.myFilter(idsPre));
  post = () => this.dataRef.current.filter(this.myFilter(idsPost));
  prePost = () => this.dataRef.current.filter(this.myFilter(idsPrePost));

  countAlleGebunden() {
    return countValid(this.alleGebunden());
  }
  countPrePost1() {
    const data = firstHalf(this.prePost());
    return countValid(data);
  }
  countPrePost2() {
    const data = secondHalf(this.prePost());
    return countValid(data);
  }
  countPrePost() {
    const data = this.prePost();
    return countValid(data);
  }
  countPre() { //aufpassen, ob die Pre-Post-Fragen einmal oder zweimal vorliegen, bei getrennten Sessions nur einmal
    const data = this.prePost().concat(this.pre());
    return countValid(data);
  }
  countPost() { //aufpassen, ob die Pre-Post-Fragen einmal oder zweimal vorliegen, bei getrennten Sessions nur einmal
    const data = this.prePost().concat(this.post());
    return countValid(data);
  }
}
function countValid(data) {
  const validArray = data.map(d => d.log.valid);
  const total = validArray.length;
  const trueCount=validArray.filter(d => d).length;
  const falseCount=total-trueCount;
  const truePercent = (100*trueCount / total).toFixed(1);
  const falsePercent = (100*falseCount / total).toFixed(1);
  return {
    total, trueCount, falseCount, truePercent, falsePercent
  }
}