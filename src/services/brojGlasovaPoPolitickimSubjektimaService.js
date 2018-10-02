import axios from 'axios';

let brojGlasovaPoPolitickimSubjektimaService = {
  apiEndpoint: 'http://127.0.0.1:51575/api/politickiSubjekt',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/votesByPoliticalSubject`, { params: params })
      .then(res => res);
  },

  getAllPoBirackimMjestima(params = {}) {
    return axios.get(`${this.apiEndpoint}/votesByPollingStation`, {params: params})
      .then(res => res);
  },

  get(brojGlasovaPoPolitickomSubjektuId) {
    return axios.get(`${this.apiEndpoint}/votesById`, {params: params})
      .then(json => json);
  },

  update(payload) {
    return axios.put(`${this.apiEndpoint}/votes`, payload)
      .then(json => json);
  }
}

export default brojGlasovaPoPolitickimSubjektimaService;
