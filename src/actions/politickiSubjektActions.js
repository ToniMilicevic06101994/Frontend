import politickiSubjektiService from '../services/politickiSubjektiService';

export function saveDone(json) {
  return {
    type: 'POLITICKI_SUBJEKT_SAVED',
    data: json
  };
}

export function fetchDone(res) {
  return {
    type: 'POLITICKI_SUBJEKT_FETCHED',
    payload: res.data[0]
  };
}

export function savePolitickiSubjekt(politickiSubjekt) {
  return dispatch => {
    return politickiSubjektiService.save(politickiSubjekt)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}


export function deletePolitickiSubjekt(politickiSubjektId) {
  return dispatch => {
    return politickiSubjektiService.delete(politickiSubjektId);
  }
}

export function updatePolitickiSubjekt(politickiSubjektId, payload) {
  return dispatch => {
    return politickiSubjektiService.update(politickiSubjektId, payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getPolitickiSubjekt(politickiSubjektId, params = {}) {
  return async dispatch => {
    const res = await politickiSubjektiService.get(politickiSubjektId, params)
    dispatch(fetchDone(res));
  };
}

const politickiSubjektActions = {
  savePolitickiSubjekt,
  deletePolitickiSubjekt,
  updatePolitickiSubjekt,
  getPolitickiSubjekt
};

export default politickiSubjektActions;
