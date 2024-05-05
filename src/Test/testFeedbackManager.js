import {testData} from "./testData.js";
import {FeedbackManager} from "../helper/FeedbackManager.js";

const dataRef={
  current: testData
}
const fbm = new FeedbackManager(dataRef);

console.log(fbm.countPrePost2());

