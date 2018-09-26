import axios from 'axios';

let brojGlasovaPoKandidatimaService = {
  apiEndpoint: 'http://127.0.0.1:51575/api/brojGlasovaPoKandidatu',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },

  get(brojGlasovaPoKandidatuId) {
    return axios.get(`${this.apiEndpoint}/${brojGlasovaPoKandidatuId}`)
      .then(json => json);
  },

  update(payload) {
    return axios.patch(`${this.apiEndpoint}`, payload)
      .then(json => json);
  }
}

export default brojGlasovaPoKandidatimaService;
