import opcineService from '../services/opcineService';

export function fetchDone(res) {
  return {
    type: 'OPCINE_FETCHED',
    payload: res.data
  };
}

export function getOpcine(params = {}) {
  return dispatch => {
    return opcineService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const opcineActions = {
  getOpcine
};

export default opcineActions;
