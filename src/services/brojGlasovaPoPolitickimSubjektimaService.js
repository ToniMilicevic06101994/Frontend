import axios from 'axios';

let brojGlasovaPoPolitickimSubjektimaService = {
  apiEndpoint: 'http://127.0.0.1:51575/api/brojGlasovaPoPolitickomSubjektu',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },

  get(brojGlasovaPoPolitickomSubjektuId) {
    return axios.get(`${this.apiEndpoint}/${brojGlasovaPoPolitickomSubjektuId}`)
      .then(json => json);
  },

  update(payload) {
    return axios.put(`${this.apiEndpoint}`, payload)
      .then(json => json);
  }
}

export default brojGlasovaPoPolitickimSubjektimaService;
