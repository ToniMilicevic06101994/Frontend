import kantoniService from '../services/kantoniService';

export function fetchDone(res) {
  return {
    type: 'KANTONI_FETCHED',
    payload: res.data
  };
}

export function getKantoni(params = {}) {
  return dispatch => {
    return kantoniService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const kantoniActions = {
  getKantoni
};

export default kantoniActions;
