import {testData} from "./testData";

export function processData(data = testData) {
  const summary = {};
  const withId = testData.filter(d => d.id);
  summary.instructionTestCount = withId.filter(d => d.id === 'InstructionTest').length;

  const cognitiveEffortFrames = withId.filter(d => d.id === 'cognitive effort');
  summary.cognitiveEffortTimePerItem = meanTimePerItem(cognitiveEffortFrames);
  summary.cognitiveEffortMean = cognitiveEffortFrames.reduce((acc, cur) => acc + cur.log.rating, 0) / cognitiveEffortFrames.length;
  summary.cognitiveEffortMeanPercent = 100 * (summary.cognitiveEffortMean - cognitiveEffortFrames[0].log.min) / (cognitiveEffortFrames[0].log.max - cognitiveEffortFrames[0].log.min);

  const mathCourseFrames = withId.filter(d => String(d.id).includes('MathCourse'));
  summary.mathCourseTimePerFrame = meanTimePerItem(mathCourseFrames);

  const TestFrames = withId.filter(d => String(d.id).includes('Test_'));
  const preTestFrames = TestFrames.filter(d => +d.index < +mathCourseFrames[0].index);
  const postTestFrames = TestFrames.filter(d => +d.index > +mathCourseFrames[0].index);

  console.log(withId);
  console.log(summary);
}

function meanTimePerItem(famesWithDuration) {
  return timeSum(famesWithDuration.map(d => d.duration)) / famesWithDuration.length + 's';
}

function timeSum(timeStrings) {
  return timeStrings.reduce((acc, cur) => acc + removeS(cur), 0);
}

function removeS(string) {
  return +string.replace('s', '');
}