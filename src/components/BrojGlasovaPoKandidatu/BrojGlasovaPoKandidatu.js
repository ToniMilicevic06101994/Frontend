export default class BrojGlasovaPoKandidatu {
  constructor(data) {
    this.id = data.id;
    this.kandidat = data.sifra || null;
    this.birackoMjesto = data.naziv || null;
    this.brojGlasova = data.brojGlasova || null;
  }
}
