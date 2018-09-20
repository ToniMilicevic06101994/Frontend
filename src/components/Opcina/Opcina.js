export default class Opcina {
  constructor(data) {
    this.id = data.id;
    this.sifra = data.sifra || null;
    this.naziv = data.naziv || null;
  }
}
