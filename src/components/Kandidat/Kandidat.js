export default class Kandidat {
  constructor(data) {
    this.id      = data.id;
    this.ime     = data.ime     || null;
    this.prezime = data.prezime || null;
    this.jmbg    = data.jmbg    || null;
    this.adresa  = data.adresa  || null;
    this.telefon = data.telefon || null;
    this.email   = data.email   || null;
  }
}
