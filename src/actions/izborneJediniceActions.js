import izborneJediniceService from '../services/izborneJediniceService';

export function fetchDone(res) {
  return {
    type: 'IZBORNE_JEDINICE_FETCHED',
    payload: res.data
  };
}

export function getIzborneJedinice(params = {}) {
  return dispatch => {
    return izborneJediniceService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const izborneJediniceActions = {
  getIzborneJedinice
};

export default izborneJediniceActions;
