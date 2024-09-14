

export class Joke {

  constructor({id = '', icon_url = '', value = ''}, category = '') {
    this.id = id;
    this.icon_url= icon_url;
    this.value = value;
    this.category = category;
  }
}