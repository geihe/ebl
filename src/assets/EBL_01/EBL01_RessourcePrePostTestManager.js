import {preMulti} from "./preMulti";
import {pre1step} from "./pre1step";
import {postMC} from "./postMC";
import {ResponseRadioButtons} from "../../MicroComponents/ResponseRadioButtons";
import {ResponseTextArea} from "../../MicroComponents/ResponseTextArea";
import {ResponseInput} from "../../MicroComponents/ResponseInput";
import React from "react";
import {StimulusResponseFrame} from "../../Frames/StimulusResponseFrame";
import {Html} from "../../MicroComponents/Html";
import {postConcept} from "./postConcept";
import {posFreeForm} from "./posFreeForm";
import {postFT} from "./postFT2step";
import {postNT} from "./postNT";
import styles from "../../cssModules/StimulusResponseFrame.module.css";
import {verification} from "./verification";
import {YesNoSure} from "../../Components/YesNoSure";

export class EBL01_RessourcePrePostTestManager {
  constructor() {
    this.prePostTest = [
      ...pre1step,
      ...preMulti,
      ...postMC,
      ...postConcept,
      ...posFreeForm,
      ...postFT,
      ...postNT,
      ...verification,
    ];
  }

  getResponseElement(id, config) {
    console.log(id);
    const rawItem = this.prePostTest.find(e => e.id === id);
    let responseInput;
    switch (rawItem.responseType) {
      case 'radio':
        responseInput =
          <ResponseRadioButtons
            options={rawItem.options}
            autoContinue={config.radioAutoContinue}
            delay={config.radioDelay}/>;
        break;
      case 'textArea':
        responseInput =
          <ResponseTextArea minLength={config.textAreaMinLength}/>;
        break;
      case 'yesNoSure':
        responseInput =
          <YesNoSure config={config}/>
        break;
      default:
        responseInput =
          <ResponseInput minLength={config.inputMinLength}/>;
    }
    return {...rawItem, responseElement: responseInput};
  }

  getStimulusResponseElement(id, config) {
    const item = this.getResponseElement(id, config);
    const header = EBL01_RessourcePrePostTestManager.flatArrayWithComponents(item.header);
    const question = EBL01_RessourcePrePostTestManager.flatArrayWithComponents(item.question);
    const stimulus = [
      ...header.map(e => React.cloneElement(e, {className: styles.header})),
      ...question.map(e => React.cloneElement(e, {className: styles.question})),
    ]
    const stimulusWithKeys = stimulus.map((el, index) =>
      React.cloneElement(el, {key: 'element_' + id + '_' + index})
    );

    return <StimulusResponseFrame
      key={item.id}
      id={item.id}
      stimulus={{
        data: item.id,
        element: <div className={styles.stimulus}> {stimulusWithKeys} </div>
      }}
      responseInput={item.responseElement}
      validator={item.validate}
      showFeedback={config.showFeedback}
      repeatOnWrong={config.repeatOnWrong}
      hideStimulusOnResponse={config.hideStimulusOnResponse}
    />
  }

  static flatArrayWithComponents(...params) { //TODO kommt zweimal vor (siehe ElementsKeyFrame)
    const flatArray = [].concat(...params);
    return flatArray.map(el =>
      React.isValidElement(el) ? el : <Html html={el}/>
    );
  }
}
