export class Server {
  constructor(version='4b') {
    this.baseURL = 'https://beispielbasiertes-lernen.de/rest/EBL/';
    this.newURL = this.baseURL + '_new.php?ver='+version;
    this.saveURL = this.baseURL + 'save04b.php';
    this.checkURL = this.baseURL + '_check.php?ver='+version;
  }

  getNewData() {
    return fetch(this.newURL).then(response => response.json());
  }
  getCheckData(userId) {
    return fetch(this.checkURL+'&user_id='+userId).then(response => response.json());
  }

  postData(userId, groupId, age, male, session, tag, data, valid=1) {
    const body = {
      user_id: userId,
      group_id: groupId,
      age,
      male,
      session,
      tag,
      data,
      valid,
    };
    return fetch(this.saveURL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
}