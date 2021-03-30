import {fahrradhelm} from "../assets/EBL01/examples/fahrradhelm";
import {edelgase} from "../assets/EBL01/examples/edelgase";
import {kekse} from "../assets/EBL01/examples/kekse";
import {skispringen} from "../assets/EBL01/examples/skispringen";
import {selfExplanations, selfRadioFunction} from "../assets/EBL01/examples/explanations";

export class EBL01_ExampleManager {
  constructor() {
    this.examples = [fahrradhelm, edelgase, skispringen, kekse];
    this.explanations = selfExplanations;
  }

  getItem(context, principle) {
    const example = this.getExample(context);
    if (!example) {
      return undefined;
    }
    const item = example.items.find(e => e.principle === principle);
    if (!item) {
      return undefined;
    }
    return {
      htmlHeader: example.header,
      htmlProblem: item.problem,
      solution: item.solution,
    }
  }

  getExample(context) {
    return this.examples.find(e => e.context === context);
  }

  getHeader(context) {
    const example = this.getExample(context);
    if (!example) {
      return undefined;
    }
    return example.header;
  }

  getExplanation(explanation) {
    return this.explanations.find(e => e.id === explanation);
  }
  getRadio(radio) {
    const ra = selfRadioFunction(radio);
    if (!ra) {
      return undefined;
    }
    return ra;
  }

  signature2html(signature) {
    const {context, principle, explanation, radio} = signature;
    const singleHeader = (context.length === 1);
    const htmlHeader = singleHeader ?
      this.getHeader(context[0])
      : undefined;
    const cartesianProduct = [].concat(...context.map(c =>
      principle.map(
        p => [].concat(c, p)
      )
    ));
    const htmlExamples = cartesianProduct.map(e => this.getItem(...e));
    const htmlExplanations = explanation.map(e => this.getExplanation(e));
    const htmlRadios = radio.map(e => this.getRadio(e, principle));

    return {
      singleHeader,
      htmlHeader,
      htmlExamples,
      htmlExplanations,
      htmlRadios,
      button: signature.button
    }
  }

  string2html(s) {
    const sig = EBL01_ExampleManager.string2signature(s);
    return {...this.signature2html(sig), string:s};
  }

  static string2signature(s0) { //example "c2p234e3" ->
    const process = a => a && a[1] ?
      a[1].split('-').filter(e=>e!=='').map(Number)
      :
      [];
    const s = s0.toLowerCase();
    let c = s.match(/c([\d-|\d]*)/);
    let p = s.match(/p([\d-|\d]*)/);
    let e = s.match(/e([\d-|\d]*)/);
    let r = s.match(/r([\d-|\d]*)/);
    let b = !!s.match(/b/);

    return {
      context: process(c),
      principle: process(p),
      explanation: process(e),
      radio: process(r),
      button: b
    };
  }
}