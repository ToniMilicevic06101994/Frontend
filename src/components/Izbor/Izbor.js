export default class Izbor {
  constructor(data) {
    this.id = data.id;
    this.vrstaIzbora = data.vrstaIzboraNaziv || '';
    this.nivoIzbora = data.nivoIzboraNaziv || '';
    this.datumOdrzavanja = data.datumOdrzavanja || '';
  }
}
