import axios from 'axios';

let opcineService = {
  apiEndpoint: 'http://127.0.0.1:51575/api',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/opcina/all`, { params: params })
      .then(res => res);
  }
}

export default opcineService;
