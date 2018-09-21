export default class Lokacija {
  constructor(data) {
    this.id = data.id;
    this.naziv = data.naziv  || '';
    this.adresa = data.adresa || '';
  }
}
