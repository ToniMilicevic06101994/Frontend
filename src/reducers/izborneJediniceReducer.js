import IzbornaJedinica from '../components/IzbornaJedinica/IzbornaJedinica';

const initialState = {
  payload: []
};

export default function izborneJediniceReducer(state = initialState, action){
  switch (action.type) {
    case 'IZBORNE_JEDINICE_FETCHED':
      let izborneJedinice = action.payload;
      return Object.assign({}, state, {
        payload: izborneJedinice.map(function(item) { return new IzbornaJedinica(item); })
      });
    default:
      return state;
  }
}
