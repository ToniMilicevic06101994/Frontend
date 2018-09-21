export default class Kanton {
  constructor(data) {
    this.id = data.id;
    this.sifra = data.sifra || '';
    this.naziv = data.naziv || '';
  }
}
