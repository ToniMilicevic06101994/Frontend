import axios from 'axios';

let brojGlasovaPoKandidatimaService = {
  apiEndpoint: 'https://api.coinmarketcap.com/v1/ticker/',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },
  
  get(brojGlasovaPoKandidatuId) {
    return axios.get(`${this.apiEndpoint}/${brojGlasovaPoKandidatuId}`)
      .then(json => json);
  },

  update(brojGlasovaPoKandidatuId, payload) {
    return axios.patch(`${this.apiEndpoint}/${brojGlasovaPoKandidatuId}`, { brojGlasovaPoKandidatu: payload })
      .then(json => json);
  }
}

export default brojGlasovaPoKandidatimaService;
