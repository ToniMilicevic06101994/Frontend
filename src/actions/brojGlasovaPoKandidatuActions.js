import brojGlasovaPoKandidatimaService from '../services/brojGlasovaPoKandidatimaService';

export function saveDone(json) {
  return {
    type: 'BROJ_GLASOVA_PO_KANDIDATU_SAVED',
    data: json
  };
}

export function fetchDone(res) {
  return {
    type: 'BROJ_GLASOVA_PO_KANDIDATU_FETCHED',
    payload: res.data[0]
  };
}

export function updateBrojGlasovaPoKandidatu(brojGlasovaPoKandidatuId, payload) {
  return dispatch => {
    return brojGlasovaPoKandidatimaService.update(brojGlasovaPoKandidatuId, payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getBrojGlasovaPoKandidatu(brojGlasovaPoKandidatuId, params = {}) {
  return async dispatch => {
    const res = await brojGlasovaPoKandidatimaService.get(brojGlasovaPoKandidatuId, params)
    dispatch(fetchDone(res));
  };
}

const brojGlasovaPoKandidatuActions = {
  updateBrojGlasovaPoKandidatu,
  getBrojGlasovaPoKandidatu
};

export default brojGlasovaPoKandidatuActions;
