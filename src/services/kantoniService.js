import axios from 'axios';

let kantoniService = {
  apiEndpoint: 'http://192.168.0.11:51575/api',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/kanton/all`, { params: params })
      .then(res => res);
  }
}

export default kantoniService;
