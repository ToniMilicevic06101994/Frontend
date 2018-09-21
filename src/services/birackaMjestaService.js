import axios from 'axios';

let birackaMjestaService = {
  apiEndpoint: 'http://127.0.0.1:51575/api',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/birackoMjesto/all`, { params: params })
      .then(res => res);
  }
}

export default birackaMjestaService;
