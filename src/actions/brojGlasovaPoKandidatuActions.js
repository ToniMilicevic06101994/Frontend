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
    payload: res.data
  };
}

export function updateBrojGlasovaPoKandidatu(payload) {
  return dispatch => {
    return brojGlasovaPoKandidatimaService.update(payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getBrojGlasovaPoKandidatu(brojGlasovaPoKandidatuId) {
  return dispatch => {
    return brojGlasovaPoKandidatimaService.get({id: brojGlasovaPoKandidatuId})
      .then(json => {
        dispatch(fetchDone(json));
      });
  };
}

const brojGlasovaPoKandidatuActions = {
  updateBrojGlasovaPoKandidatu,
  getBrojGlasovaPoKandidatu
};

export default brojGlasovaPoKandidatuActions;
