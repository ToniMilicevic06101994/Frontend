export default class Opcina {
  constructor(data) {
    this.id = data.id;
    this.sifra = data.sifra || '';
    this.naziv = data.naziv || '';
  }
}
