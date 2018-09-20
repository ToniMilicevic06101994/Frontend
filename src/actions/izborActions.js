import izboriService from '../services/izboriService';

export function saveDone(json) {
  return {
    type: 'IZBOR_SAVED',
    data: json
  };
}

export function createIzbor(izbor) {
  return dispatch => {
    return izboriService.save(izbor)
      .then((json) => {
        dispatch(saveDone(json));
      });
  };
}

const izborActions = {
  createIzbor
};

export default izborActions;