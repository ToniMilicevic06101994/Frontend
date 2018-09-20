import axios from 'axios';

let kandidatiService = {
  apiEndpoint: 'https://api.coinmarketcap.com/v1/ticker/',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },

  get(kandidatId) {
    return axios.get(`${this.apiEndpoint}/${kandidatId}`)
      .then(json => json);
  },

  update(kandidatId, payload) {
    return axios.patch(`${this.apiEndpoint}/${kandidatId}`, { kandidat: payload })
      .then(json => json);
  },

  delete(kandidatId) {
      return axios.delete(`${this.apiEndpoint}/${kandidatId}`)
        .then(json => json);
  },

  save(payload) {
    return axios.post(`${this.apiEndpoint}`,  {kandidat: payload})
      .then(json => json);
  }
}

export default kandidatiService;
