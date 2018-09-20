import izlaznostPoBirackimMjestimaService from '../services/izlaznostPoBirackimMjestimaService';

export function saveDone(json) {
  return {
    type: 'IZLAZNOST_PO_BIRACKOM_MJESTU_SAVED',
    data: json
  };
}

export function fetchDone(res) {
  return {
    type: 'IZLAZNOST_PO_BIRACKOM_MJESTU_FETCHED',
    payload: res.data[0]
  };
}

export function updateIzlaznostPoBirackomMjestu(izlaznostPoBirackomMjestuId, payload) {
  return dispatch => {
    return izlaznostPoBirackimMjestimaService.update(izlaznostPoBirackomMjestuId, payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getIzlaznostPoBirackomMjestu(izlaznostPoBirackomMjestuId, params = {}) {
  return async dispatch => {
    const res = await izlaznostPoBirackimMjestimaService.get(izlaznostPoBirackomMjestuId, params)
    dispatch(fetchDone(res));
  };
}

const izlaznostPoBirackomMjestuActions = {
  updateIzlaznostPoBirackomMjestu,
  getIzlaznostPoBirackomMjestu
};

export default izlaznostPoBirackomMjestuActions;
