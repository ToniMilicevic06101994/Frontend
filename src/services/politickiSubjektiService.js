import axios from 'axios';

let politickiSubjektiService = {
  apiEndpoint: 'http://127.0.0.1:51575/api/politickiSubjekt',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/all`, { params: params })
      .then(res => res);
  },
  
  get(politickiSubjektId) {
    return axios.get(`${this.apiEndpoint}/${politickiSubjektId}`)
      .then(json => json);
  },

  update(payload) {
    return axios.put(`${this.apiEndpoint}`, payload)
      .then(json => json);
  },

  delete(politickiSubjektId) {
      return axios.delete(`${this.apiEndpoint}/${politickiSubjektId}`)
        .then(json => json);
  },

  save(payload) {
    return axios.post(`${this.apiEndpoint}`, payload)
      .then(json => json);
  }
}

export default politickiSubjektiService;
