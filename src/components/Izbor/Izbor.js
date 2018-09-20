export default class Izbor {
  constructor(data) {
    this.id = data.id;
    this.vrstaIzbora = data.vrstaIzbora || null;
    this.nivoIzbora = data.nivoIzbora || null;
    this.datumOdrzavanja = data.datumOdrzavanja || null;
  }
}
