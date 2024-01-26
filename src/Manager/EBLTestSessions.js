import React from 'react';
import {addToTag, getDataFromTag} from "../helper/tagHelper";
import {EBL01_Demographics} from "../Frames/Instructions/EBL01_Demographics"
import {InstructionFrame212} from "../Frames/Instructions/InstructionFrame";
import {CancelFrame} from "../Frames/CancelFrame";
import {FixationCrossFrame} from "../Frames/FixationCrossFrame";
import {JolFrame4} from "../Frames/JolFrames";


const cancelTest = {
  if: (lastlog) => lastlog === 'break',
  then: <CancelFrame/>,
};
export const TestSession1 = [

  {frame: <EBL01_Demographics/>, id: 'Demographics'},
  {
    id: 'groupFunction',
    function: (data) => {
      const log = data.find(d => d.id === "Demographics").log;
      const male = log.gender !== "female"; //zählt auch divers mit
      const age = +log.age;
      if (!this.groupManager.hasGroupId()) {
        this.groupManager.determineGroup(male, age);
      }
      const groupId = this.groupManager.getGroupId();
      const oldTag = data[0].tag;
      data[0].tag = addToTag(groupId, oldTag);
      data[0].male = male ? 1 : 0;
      data[0].age = age;
      data[0].groupId = groupId;
      console.log(this.groupManager.getGroupName());
      console.log(data);
      console.log(getDataFromTag(data[0].tag));
      return groupId;
    }
  },


  {frame: <JolFrame4/>, id: 'JoL4'},
  //TODO Übergabe an Qualtrics
];
export const TestSession2 = [
  <FixationCrossFrame nocross/>,
  {frame: <InstructionFrame212/>, id: 'Feedback'},
];