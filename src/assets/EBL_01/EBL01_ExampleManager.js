import {fahrradhelm} from "./examples/fahrradhelm";
import {edelgase} from "./examples/edelgase";
import {kekse} from "./examples/kekse";
import {skispringen} from "./examples/skispringen";
import {selfExplanations, selfRadio} from "./examples/explanations";

export class EBL01_ExampleManager {
  constructor() {
    this.examples = [fahrradhelm, edelgase, skispringen, kekse];
    this.explanations = selfExplanations;
    this.radio = selfRadio;
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
    const ex = this.explanations.find(e => e.id === explanation);
    if (!ex) {
      return undefined;
    }
    return ex.html;
  }
  getRadio(radio) {
    const ra = this.radio.find(e => e.id === radio); //TODO radios
    if (!ra) {
      return undefined;
    }
    return ra;
  }

  test() {
    const sig = EBL01_ExampleManager.string2signature("c1 p1234 e3");
    console.log(this.signature2html(sig));
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
    ))
    const htmlExamples = cartesianProduct.map(e => this.getItem(...e));
    const htmlExplanations = explanation.map(e => this.getExplanation(e));
    const htmlRadios = radio.map(e => this.getRadio(e));

    return {
      singleHeader,
      htmlHeader,
      htmlExamples,
      htmlExplanations,
      htmlRadios
    }
  }

  string2html(s) {
    const sig = EBL01_ExampleManager.string2signature(s);
    return {...this.signature2html(sig), string:s};
  }

  static string2signature(s0) { //example "c2p234e3" ->
    const s = s0.toLowerCase() + 'cper';
    let c = s.match(/c(\d*)/)[1].split('');
    let p = s.match(/p(\d*)/)[1].split('');
    let e = s.match(/e(\d*)/)[1].split('');
    let r = s.match(/r(\d*)/)[1].split('');

    return {
      context: c.map(Number),
      principle: p.map(Number),
      explanation: e.map(Number),
      radio: r.map(Number)
    };
  }
}