import lokacijeService from '../services/lokacijeService';

export function fetchDone(res) {
  return {
    type: 'LOKACIJE_FETCHED',
    payload: res.data
  };
}

export function getLokacije(params = {}) {
  return dispatch => {
    return lokacijeService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const lokacijeActions = {
  getLokacije
};

export default lokacijeActions;
