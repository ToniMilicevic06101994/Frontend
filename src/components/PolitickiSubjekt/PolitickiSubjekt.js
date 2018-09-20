export default class PolitickiSubjekt {
  constructor(data) {
    this.id = data.id;
    this.sifra = data.sifra   || null;
    this.naziv = data.naziv   || null;
    this.adresa = data.adresa  || null;
    this.grad = data.grad    || null;
    this.telefon = data.telefon || null;
  }
}
