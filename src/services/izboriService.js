import axios from 'axios';

let izboriService = {
  apiEndpoint: 'https://api.coinmarketcap.com/v1/ticker/',
  
  getAll() {
    return axios.get(`${this.apiEndpoint}`)
      .then(res => res);
  },

  save(payload) {
    return axios.post(`${this.apiEndpoint}`, { params: payload })
      .then(res => res);
  }
}

export default izboriService;
