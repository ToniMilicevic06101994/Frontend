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
    payload: res.data[0]
  };
}

export function updateBrojGlasovaPoPolitickomSubjektu(brojGlasovaPoPolitickomSubjektuId, payload) {
  return dispatch => {
    return brojGlasovaPoPolitickimSubjektimaService.update(brojGlasovaPoPolitickomSubjektuId, payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getBrojGlasovaPoPolitickomSubjektu(brojGlasovaPoPolitickomSubjektuId, params = {}) {
  return async dispatch => {
    const res = await brojGlasovaPoPolitickimSubjektimaService.get(brojGlasovaPoPolitickomSubjektuId, params)
    dispatch(fetchDone(res));
  };
}

const brojGlasovaPoPolitickomSubjektuActions = {
  updateBrojGlasovaPoPolitickomSubjektu,
  getBrojGlasovaPoPolitickomSubjektu
};

export default brojGlasovaPoPolitickomSubjektuActions;
