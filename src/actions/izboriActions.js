import izboriService from '../services/izboriService';

export function fetchDone(res) {
  return {
    type: 'IZBORI_FETCHED',
    payload: res.data
  };
}

export function getIzbori(params = {}) {
  return dispatch => {
    return izboriService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const izboriActions = {
  getIzbori
};

export default izboriActions;
