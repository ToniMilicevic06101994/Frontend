import axios from 'axios';

let kandidatiService = {
  apiEndpoint: 'http://127.0.0.1:51575/api/kandidat',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/all`, { params: params })
      .then(res => res);
  },

  get(kandidatId) {
    return axios.get(`${this.apiEndpoint}/${kandidatId}`)
      .then(json => json);
  },

  update(payload) {
    return axios.put(`${this.apiEndpoint}`, payload)
      .then(json => json);
  },

  delete(kandidatId) {
      return axios.delete(`${this.apiEndpoint}/${kandidatId}`)
        .then(json => json);
  },

  save(payload) {
    return axios.post(`${this.apiEndpoint}`, payload)
      .then(json => json);
  }
}

export default kandidatiService;
