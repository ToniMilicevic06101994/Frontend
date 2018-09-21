import axios from 'axios';

let lokacijeService = {
  apiEndpoint: 'http://127.0.0.1:51575/api',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/lokacija/all`, { params: params })
      .then(res => res);
  }
}

export default lokacijeService;
