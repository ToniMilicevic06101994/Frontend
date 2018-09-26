import axios from 'axios';

let izlaznostPoBirackimMjestimaService = {
  apiEndpoint: 'http://127.0.0.1:51575/api/izlaznost',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },

  get(izlaznostPoBirackomMjestuId) {
    return axios.get(`${this.apiEndpoint}/${izlaznostPoBirackomMjestuId}`)
      .then(json => json);
  },

  update(payload) {
    return axios.put(`${this.apiEndpoint}`, payload)
      .then(json => json);
  }
}

export default izlaznostPoBirackimMjestimaService;
