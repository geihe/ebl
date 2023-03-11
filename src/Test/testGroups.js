class GroupManager {
  constructor(initialId) {
    this.groupId = initialId;
    this.serverCount = null;
    this.targetCount = 60;
  }

  setServercount(serverCount) {
    this.serverCount = serverCount;
  }

  isFull() {
    if (!this.serverCount) return false;
    return this.serverCount.reduce((acc, cur) => acc && cur.n >= this.targetCount, true);
  }

  determineGroup(male, age) {
    const counts = data.map(d => d.n);
    const min = Math.min(...counts);
    const next5 = Math.floor(min / 5 + 1) * 5;
    const target = Math.min(next5, this.targetCount);
    const rest = counts.map(c => Math.max(target - c, 0));
    const total = rest.reduce((acc, cur) => acc + cur, 0);

    const limit = Math.random() * total;
    let sum = 0;
    const idx = rest.findIndex((num, idx) => (sum += num) >= limit);
    this.groupId = idx + 1;
  }

  getGroupId() {
    return this.groupId || 1;
  }
}

const data = [
  {n: 0, male: 0, age: 0},
  {n: 0, male: 0, age: 0},
  {n: 0, male: 0, age: 0},
  {n: 0, male: 0, age: 0},
]

function neu() {
  return {
    male: Math.random() > 0.7,
    age: Math.floor(Math.random() * 52 + 18)
  }
}

function addItem(data, male, age) {
  return {
    n: data.n + 1,
    age: (data.age * data.n + age) / (data.n + 1),
    male: male ? data.male + 1 : data.male,
  }
}

const gm = new GroupManager();


while (!gm.isFull()) {
  const {male, age} = neu();
  console.log(male, age);
  gm.setServercount(data);
  gm.determineGroup(male, age);
  const index = gm.getGroupId() - 1;

  data[index] = addItem(data[index], male, age);
  console.log(data);
}
