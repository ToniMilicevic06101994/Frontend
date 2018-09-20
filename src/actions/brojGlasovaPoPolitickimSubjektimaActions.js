import brojGlasovaPoPolitickimSubjektimaService from '../services/brojGlasovaPoPolitickimSubjektimaService';

export function fetchDone(res) {
  return {
    type: 'BROJ_GLASOVA_PO_POLITICKIM_SUBJEKTIMA_FETCHED',
    payload: res.data
  };
}

export function getBrojGlasovaPoPolitickimSubjektima(params = {}) {
  return dispatch => {
    return brojGlasovaPoPolitickimSubjektimaService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const brojGlasovaPoPolitickimSubjektimaActions = {
  getBrojGlasovaPoPolitickimSubjektima
};

export default brojGlasovaPoPolitickimSubjektimaActions;
