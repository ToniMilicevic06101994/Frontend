export default class BirackoMjesto {
  constructor(data) {
    this.id    = data.id;
    this.sifra = data.sifra             || null;
    this.naziv = data.naziv             || null;
    this.lokacija = data.naziv || null;
  }
}
