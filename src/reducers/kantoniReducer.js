import Kanton from '../components/Kanton/Kanton';

const initialState = {
  payload: []
};

export default function kantoniReducer(state = initialState, action){
  switch (action.type) {
    case 'KANTONI_FETCHED':
      let kantoni = action.payload;
      return Object.assign({}, state, {
        payload: kantoni.map(function(item) { return new Kanton(item); })
      });
    default:
      return state;
  }
}
