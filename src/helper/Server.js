export class Server {
  constructor() {
    this.baseURL = 'https://beispielbasiertes-lernen.de/rest/EBL/';
    this.newURL = this.baseURL + 'new04.php';
    this.saveURL = this.baseURL + 'save04.php';
    this.checkURL = this.baseURL + 'check04.php';
  }

  getNewData() {
    return fetch(this.newURL).then(response => response.json());
  }
  getCheckData(userId) {
    return fetch(this.checkURL+'?user_id='+userId).then(response => response.json());
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
    console.log(body);
    console.log(JSON.stringify(body));
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