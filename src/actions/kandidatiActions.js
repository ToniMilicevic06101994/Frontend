import kandidatiService from '../services/kandidatiService';

export function fetchDone(res) {
  return {
    type: 'KANDIDATI_FETCHED',
    payload: res.data
  };
}

export function getKandidati(params = {}) {
  return dispatch => {
    return kandidatiService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const kandidatiActions = {
  getKandidati
};

export default kandidatiActions;
