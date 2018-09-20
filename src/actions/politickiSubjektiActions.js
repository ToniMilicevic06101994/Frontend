import politickiSubjektiService from '../services/politickiSubjektiService';

export function fetchDone(res) {
  return {
    type: 'POLITICKI_SUBJEKTI_FETCHED',
    payload: res.data
  };
}

export function getPolitickiSubjekti(params = {}) {
  return dispatch => {
    return politickiSubjektiService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const politickiSubjektiActions = {
  getPolitickiSubjekti
};

export default politickiSubjektiActions;
