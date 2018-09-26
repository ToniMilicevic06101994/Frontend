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
    payload: res.data
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
    return kandidatiService.delete(kandidatId)
      .then(json => json);
  }
}

export function updateKandidat(payload) {
  return dispatch => {
    return kandidatiService.update(payload)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

export function getKandidat(kandidatId, params = {}) {
  return dispatch => {
    return kandidatiService.get(kandidatId)
    .then((json) => {
      dispatch(fetchDone(json));
    });
  };
}

const kandidatActions = {
  deleteKandidat,
  updateKandidat,
  saveKandidat,
  getKandidat
};

export default kandidatActions;
