import React from "react";
import {config} from "../../config";
import {EBL01_RessourcePrePostTestManager} from "../../Manager/EBL01_RessourcePrePostTestManager";

const rpptm = new EBL01_RessourcePrePostTestManager();

const {items: preTestItems, ...preTestConfig} = config.preTest;
export const preTest = preTestItems
  .map(s => rpptm.getStimulusResponseElement(s, preTestConfig));

const {items: postTestItems, ...postTestConfig} = config.postTest;
export const postFrames = postTestItems.map(itemList =>
  itemList.map(s => rpptm.getStimulusResponseElement(s, postTestConfig))
);