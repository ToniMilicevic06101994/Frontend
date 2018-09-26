export default class Kategorija {
  constructor(data) {
    this.id = data.id;
    this.naziv = data.naziv || '';
  }
}
