export class Server {
  constructor() {
    this.baseURL = 'https://beispielbasiertes-lernen.de/rest/EBL/';
    this.newURL = this.baseURL + 'new02.php';
    this.saveURL = this.baseURL + 'save02.php';
  }

  getNewData() {
    return fetch(this.newURL).then(response => response.json());
  }

  postData(userId, groupId, age, male, session, tag, data) {
    const body = {
      user_id: userId,
      group_id: groupId,
      age,
      male,
      session,
      tag,
      data,
    };
    console.log(body);
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