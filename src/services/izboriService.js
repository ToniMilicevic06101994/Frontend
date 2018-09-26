import axios from 'axios';

let izboriService = {
  apiEndpoint: 'http://192.168.1.4:51575/api/izbor',

  getAll() {
    return axios.get(`${this.apiEndpoint}/all`)
      .then(res => res);
  },

  getCategories(izborId) {
    return axios.get(`${this.apiEndpoint}/kategorija/${izborId}`)
      .then(res => res);
  },

  save(payload) {
    return axios.post(`${this.apiEndpoint}`, payload)
      .then(res => res);
  }
}

export default izboriService;
