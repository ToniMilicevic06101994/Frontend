import axios from 'axios';

let politickiSubjektiService = {
  apiEndpoint: 'http://127.0.0.1:51575/api',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/politickiSubjekt/all`, { params: params })
      .then(res => res);
  },
  
  get(politickiSubjektId) {
    return axios.get(`${this.apiEndpoint}/${politickiSubjektId}`)
      .then(json => json);
  },

  update(politickiSubjektId, payload) {
    return axios.patch(`${this.apiEndpoint}/${politickiSubjektId}`, { politickiSubjekt: payload })
      .then(json => json);
  },

  delete(politickiSubjektId) {
      return axios.delete(`${this.apiEndpoint}/${politickiSubjektId}`)
        .then(json => json);
  },

  save(payload) {
    return axios.post(`${this.apiEndpoint}`, { politickiSubjekt: payload })
      .then(json => json);
  }
}

export default politickiSubjektiService;
