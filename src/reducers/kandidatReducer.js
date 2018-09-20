import Kandidat from '../components/Kandidat/Kandidat';

const initialState = {
  data: {},
  payload: []
};

export default function kandidatReducer(state = initialState, action) {
  switch (action.type) {
    case 'KANDIDAT_SAVED':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'KANDIDAT_FETCHED':
      const kandidat = action.payload;
      return Object.assign({}, state, {
        payload: new Kandidat(kandidat)
      });
    default:
      return state;
  }
}
