export class Server {
  constructor() {
    this.baseURL = 'https://psychologie.geihe.net/rest/EBL/';
    this.newURL = this.baseURL + 'new01.php';
    this.saveURL = this.baseURL + 'save01.php';
  }

  getNewData() {
    return fetch(this.newURL).then(response => response.json());
  }

  postData(userId, session, groupId, data, mailId) {
    return fetch(this.saveURL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        session,
        group_id: groupId,
        data,
        mail_id: mailId || ''
      })
    })
  }
}