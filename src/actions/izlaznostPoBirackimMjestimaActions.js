import izlaznostPoBirackimMjestimaService from '../services/izlaznostPoBirackimMjestimaService';

export function fetchDone(res) {
  return {
    type: 'IZLAZNOST_PO_BIRACKIM_MJESTIMA_FETCHED',
    payload: res.data
  };
}

export function getIzlaznostPoBirackimMjestima(params = {}) {
  return dispatch => {
    return izlaznostPoBirackimMjestimaService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const izlaznostPoBirackimMjestimaActions = {
  getIzlaznostPoBirackimMjestima
};

export default izlaznostPoBirackimMjestimaActions;
