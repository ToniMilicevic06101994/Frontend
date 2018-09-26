import Kategorija from '../components/Kategorija/Kategorija';

const initialState = {
  payload: []
};

export default function kategorijeReducer(state = initialState, action){
  switch (action.type) {
    case 'KATEGORIJE_FETCHED':
      let kategorije = action.payload;
      return Object.assign({}, state, {
        payload: kategorije.map(function(item) { return new Kategorija(item); })
      });
    default:
      return state;
  }
}
