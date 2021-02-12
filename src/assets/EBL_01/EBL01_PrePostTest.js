import React from "react";
import {config} from "./config";
import {EBL01_RessourcePrePostTestManager} from "./EBL01_RessourcePrePostTestManager";

const rpptm = new EBL01_RessourcePrePostTestManager();

const {items: preTestItems, ...preTestConfig} = config.preTest;
export const preFrames = preTestItems
  .map(s => rpptm.getStimulusResponseElement(s, preTestConfig));

const {items: postTestItems, ...postTestConfig} = config.postTest;
export const postFrames = postTestItems
  .map(s => rpptm.getStimulusResponseElement(s, postTestConfig));