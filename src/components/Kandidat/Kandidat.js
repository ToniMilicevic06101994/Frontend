export default class Kandidat {
  constructor(data) {
    this.id = data.id;
    this.imePrezime = data.imePrezime || '';
    this.jmbg = data.jmbg || '';
    this.adresa = data.adresa || '';
    this.telefon = data.telefon || '';
    this.email = data.email || '';
  }
}
