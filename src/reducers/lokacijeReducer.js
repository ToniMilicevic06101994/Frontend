import Lokacija from '../components/Lokacija/Lokacija';

const initialState = {
  payload: []
};

export default function lokacijeReducer(state = initialState, action){
  switch (action.type) {
    case 'LOKACIJE_FETCHED':
      let lokacije = action.payload;
      return Object.assign({}, state, {
        payload: lokacije.map(function(item) { return new Lokacija(item); })
      });
    default:
      return state;
  }
}
