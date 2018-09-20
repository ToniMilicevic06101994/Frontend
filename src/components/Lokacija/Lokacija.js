export default class Lokacija {
  constructor(data) {
    this.id = data.id;
    this.naziv = data.naziv  || null;
    this.adresa = data.adresa || null;
  }
}
