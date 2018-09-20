import Kandidat from '../components/Kandidat/Kandidat';

const initialState = {
  payload: []
};

export default function kandidatiReducer(state = initialState, action){
  switch (action.type) {
    case 'KANDIDATI_FETCHED':
      let kandidati = action.payload;
      return Object.assign({}, state, {
        payload: kandidati.map(function(item) { return new Kandidat(item); })
      });
    default:
      return state;
  }
}
