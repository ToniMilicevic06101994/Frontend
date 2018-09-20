import axios from 'axios';

let izlaznostPoBirackimMjestimaService = {
  apiEndpoint: 'https://api.coinmarketcap.com/v1/ticker/',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },
  
  get(izlaznostPoBirackomMjestuId) {
    return axios.get(`${this.apiEndpoint}/${izlaznostPoBirackomMjestuId}`)
      .then(json => json);
  },

  update(izlaznostPoBirackomMjestuId, payload) {
    return axios.patch(`${this.apiEndpoint}/${izlaznostPoBirackomMjestuId}`, { izlaznostPoBirackomMjestu: payload })
      .then(json => json);
  }
}

export default izlaznostPoBirackimMjestimaService;
