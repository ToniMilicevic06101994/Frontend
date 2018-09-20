import PolitickiSubjekt from '../components/PolitickiSubjekt/PolitickiSubjekt';

const initialState = {
  payload: []
};

export default function politickiSubjektiReducer(state = initialState, action){
  switch (action.type) {
    case 'POLITICKI_SUBJEKTI_FETCHED':
      let politickiSubjekti = action.payload;
      return Object.assign({}, state, {
        payload: politickiSubjekti.map(function(item) { return new PolitickiSubjekt(item); })
      });
    default:
      return state;
  }
}
