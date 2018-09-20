import brojGlasovaPoKandidatimaService from '../services/brojGlasovaPoKandidatimaService';

export function fetchDone(res) {
  return {
    type: 'BROJ_GLASOVA_PO_KANDIDATIMA_FETCHED',
    payload: res.data
  };
}

export function getBrojGlasovaPoKandidatima(params = {}) {
  return dispatch => {
    return brojGlasovaPoKandidatimaService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const brojGlasovaPoKandidatimaActions = {
  getBrojGlasovaPoKandidatima
};

export default brojGlasovaPoKandidatimaActions;
