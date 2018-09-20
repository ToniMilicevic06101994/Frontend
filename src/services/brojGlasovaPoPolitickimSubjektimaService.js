import axios from 'axios';

let brojGlasovaPoPolitickimSubjektimaService = {
  apiEndpoint: 'https://api.coinmarketcap.com/v1/ticker/',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },
  
  get(brojGlasovaPoPolitickomSubjektuId) {
    return axios.get(`${this.apiEndpoint}/${brojGlasovaPoPolitickomSubjektuId}`)
      .then(json => json);
  },

  update(brojGlasovaPoPolitickomSubjektuId, payload) {
    return axios.patch(`${this.apiEndpoint}/${brojGlasovaPoPolitickomSubjektuId}`, { brojGlasovaPoPolitickomSubjektu: payload })
      .then(json => json);
  }
}

export default brojGlasovaPoPolitickimSubjektimaService;
