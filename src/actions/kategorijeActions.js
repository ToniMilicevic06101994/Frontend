import izboriService from '../services/izboriService';

export function fetchDone(res) {
  return {
    type: 'KATEGORIJE_FETCHED',
    payload: res.data
  };
}

export function getKategorije(izborId) {
  return dispatch => {
    return izboriService.getCategories(izborId)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const kategorijeActions = {
  getKategorije
};

export default kategorijeActions;
