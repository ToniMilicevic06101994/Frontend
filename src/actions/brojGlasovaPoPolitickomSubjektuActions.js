import brojGlasovaPoPolitickimSubjektimaService from '../services/brojGlasovaPoPolitickimSubjektimaService';

export function saveDone(json) {
  return {
    type: 'BROJ_GLASOVA_PO_POLITICKOM_SUBJEKTU_SAVED',
    data: json
  };
}

export function fetchDone(res) {
  return {
    type: 'BROJ_GLASOVA_PO_POLITICKOM_SUBJEKTU_FETCHED',
    payload: res.data
  };
}

export function updateBrojGlasovaPoPolitickomSubjektu(payload) {
  return dispatch => {
    return brojGlasovaPoPolitickimSubjektimaService.update(payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getBrojGlasovaPoPolitickomSubjektu(brojGlasovaPoPolitickomSubjektuId, params = {}) {
  return dispatch => {
    return brojGlasovaPoPolitickimSubjektimaService.get({id: brojGlasovaPoPolitickomSubjektuId})
      .then(res => {
        dispatch(fetchDone(res));
      });
  };
}

const brojGlasovaPoPolitickomSubjektuActions = {
  updateBrojGlasovaPoPolitickomSubjektu,
  getBrojGlasovaPoPolitickomSubjektu
};

export default brojGlasovaPoPolitickomSubjektuActions;
