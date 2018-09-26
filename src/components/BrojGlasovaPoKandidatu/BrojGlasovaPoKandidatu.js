export default class BrojGlasovaPoKandidatu {
  constructor(data) {
    this.id = data.id;
    this.kandidatId = data.kandidatId || null;
    this.kandidatImePrezime = data.kandidatImePrezime || null;
    this.izboriId = data.izboriId || null;
    this.birackoMjestoId = data.birackoMjestoId || null;
    this.birackoMjestoSifra = data.birackoMjestoSifra || null;
    this.birackoMjestoNaziv = data.birackoMjestoNaziv || null;
    this.brojGlasova = data.brojGlasova || 0;
  }
}
