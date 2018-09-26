import axios from 'axios';

let izboriService = {
  apiEndpoint: 'http://127.0.0.1:51575/api/izbori',

  getAll() {
    return axios.get(`${this.apiEndpoint}/all`)
      .then(res => res);
  },

  getCategories(izborId) {
    return axios.get(`${this.apiEndpoint}/kategorije/${izborId}`)
      .then(res => res);
  },

  save(payload) { 
    return axios.post(`${this.apiEndpoint}`, payload)
      .then(res => res);
  }
}

export default izboriService;
