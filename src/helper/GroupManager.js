import {config} from "../config";
import {groupId} from "./groupIdHelper";

export class GroupManager {
  constructor(initialId) {
    this.groupId = initialId;
    this.serverCount = null;
    this.targetCount = config.targetCount;
  }

  setServercount(serverCount) {
    const count = Array(4);
    serverCount.forEach(s => count[s.group_id - 1] = s);
    for (let i = 0; i < 4; i++) {
      if (!count[i]) {
        count[i]={group_id: i+1, n:0, male:0, age:0}
      }
    }
    this.serverCount = count;
  }

  isFull() {
    if (!this.serverCount) return false;
    return this.serverCount.reduce((acc, cur, idx) => acc && cur.n >= this.targetCount[idx], true);
  }

  determineGroup(male, age) {
    this.groupId = groupId({male, age}, this.serverCount);
    console.log(this.groupId);
  }

  getGroupId() {
    return this.groupId || 1;
  }

  hasGroupId() {
    return !!this.groupId;
  }

  getGroupName() {
    if (this.groupId) {
      const info = config.examples.groups[this.groupId];
      return info ? info.id : 'unbekannt';
    } else {
      return '';
    }

  }
}