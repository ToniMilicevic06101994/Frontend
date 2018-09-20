export default class IzlaznostPoBirackomMjestu {
  constructor(data) {
    this.id = data.id;
    this.birackoMjesto = data.naziv || null;
    this.brojGlasaca = data.brojGlasaca || null;
    this.izasloGlasaca = data.izasloGlasaca || null;
  }
}
