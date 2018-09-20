import axios from 'axios';

let kantoniService = {
  apiEndpoint: 'https://api.coinmarketcap.com/v1/ticker/',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  }
}

export default kantoniService;
