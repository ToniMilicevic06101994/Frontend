import birackaMjestaService from '../services/birackaMjestaService';

export function fetchDone(res) {
  return {
    type: 'BIRACKA_MJESTA_FETCHED',
    payload: res.data
  };
}

export function getBirackaMjesta(params = {}) {
  return dispatch => {
    return birackaMjestaService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const birackaMjestaActions = {
  getBirackaMjesta
};

export default birackaMjestaActions;
