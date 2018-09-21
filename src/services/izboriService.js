import axios from 'axios';

let izboriService = {
  apiEndpoint: 'http://127.0.0.1:51575/api',
  
  getAll() {
    return axios.get(`${this.apiEndpoint}/izbori/all`)
      .then(res => res);
  },

  save(payload) {
    return axios.post(`${this.apiEndpoint}`, { params: payload })
      .then(res => res);
  }
}

export default izboriService;
