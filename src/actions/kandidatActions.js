import kandidatiService from '../services/kandidatiService';

export function saveDone(json) {
  return {
    type: 'KANDIDAT_SAVED',
    data: json
  };
}

export function fetchDone(res) {
  return {
    type: 'KANDIDAT_FETCHED',
    payload: res.data[0]
  };
}

export function saveKandidat(izbor) {
  return dispatch => {
    return kandidatiService.save(izbor)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function deleteKandidat(kandidatId) {
  return dispatch => {
    return kandidatiService.delete(kandidatId);
  }
}

export function updateKandidat(kandidatId, payload) {
  return dispatch => {
    return kandidatiService.update(kandidatId, payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getKandidat(kandidatId, params = {}) {
  return async dispatch => {
    const res = await kandidatiService.get(kandidatId, params)
    dispatch(fetchDone(res));
  };
}

const kandidatActions = {
  deleteKandidat,
  updateKandidat,
  saveKandidat,
  getKandidat
};

export default kandidatActions;
