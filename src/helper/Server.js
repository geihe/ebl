export class Server {
  constructor() {
    this.baseURL = 'https://psychologie.geihe.net/rest/EBL/';
    this.newURL = this.baseURL + 'new01.php';
    this.saveURL = this.baseURL + 'save01.php';
  }

  getNewData() {
    return fetch(this.newURL).then(response => response.json());
  }
}