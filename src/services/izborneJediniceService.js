import axios from 'axios';

let izborneJediniceService = {
  apiEndpoint: 'http://127.0.0.1:51575/api',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}/izbornaJedinica/all`, { params: params })
      .then(res => res);
  }
}

export default izborneJediniceService;
