import Izbor from '../components/Izbor/Izbor';

const initialState = {
  payload: []
};

export default function izboriReducer(state = initialState, action){
  switch (action.type) {
    case 'IZBORI_FETCHED':
      let izbori = action.payload;
      return Object.assign({}, state, {
        payload: izbori.map(function(item) { return new Izbor(item); })
      });
    default:
      return state;
  }
}
