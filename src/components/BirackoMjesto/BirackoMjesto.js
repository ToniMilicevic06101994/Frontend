export default class BirackoMjesto {
  constructor(data) {
    this.id    = data.id;
    this.sifra = data.sifra || '';
    this.naziv = data.naziv || '';
    this.lokacija = data.lokacijaNaziv || '';
  }
}
