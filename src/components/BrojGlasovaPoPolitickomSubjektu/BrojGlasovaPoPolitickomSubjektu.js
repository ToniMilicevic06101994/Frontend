export default class BrojGlasovaPoPolitickomSubjektu {
  constructor(data) {
    this.id = data.id;
    this.politickiSubjektId = data.politickiSubjektId || null;
    this.politickiSubjektSifra = data.politickiSubjektSifra || null;
    this.politickiSubjektNaziv = data.politickiSubjektNaziv || null;
    this.izboriId = data.izboriId || null;
    this.izbornaJedinicaId = data.izbornaJedinicaId || null;
    this.kategorijaId = data.kategorijaId || null;
    this.kategorijaNaziv = data.kategorijaNaziv || null;
    this.birackoMjestoId = data.birackoMjestoId || null;
    this.birackoMjestoSifra = data.birackoMjestoSifra || null;
    this.birackoMjestoNaziv = data.birackoMjestoNaziv || null;
    this.brojGlasova = data.brojGlasova || null;
  }
}
