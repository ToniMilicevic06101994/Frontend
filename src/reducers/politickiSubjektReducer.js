import PolitickiSubjekt from '../components/PolitickiSubjekt/PolitickiSubjekt';

const initialState = {
  payload: []
};

export default function politickiSubjektReducer(state = initialState, action){
  switch (action.type) {
    case 'POLITICKI_SUBJEKT_SAVED':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'POLITICKI_SUBJEKT_FETCHED':
      const politickiSubjekt = action.payload;
      return Object.assign({}, state, {
        payload: new PolitickiSubjekt(politickiSubjekt)
      });
    default:
      return state;
  }
}
