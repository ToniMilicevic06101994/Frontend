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
    payload: res.data
  };
}

export function updateIzlaznostPoBirackomMjestu(payload) {
  return dispatch => {
    return izlaznostPoBirackimMjestimaService.update(payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getIzlaznostPoBirackomMjestu(izlaznostPoBirackomMjestuId, params = {}) {
  return dispatch => {
    return izlaznostPoBirackimMjestimaService.get(izlaznostPoBirackomMjestuId, params)
      .then(json => {
        dispatch(fetchDone(json));
      });
  };
}

const izlaznostPoBirackomMjestuActions = {
  updateIzlaznostPoBirackomMjestu,
  getIzlaznostPoBirackomMjestu
};

export default izlaznostPoBirackomMjestuActions;
