import BirackoMjesto from '../components/BirackoMjesto/BirackoMjesto';

const initialState = {
  payload: []
};

export default function birackaMjestaReducer(state = initialState, action){
  switch (action.type) {
    case 'BIRACKA_MJESTA_FETCHED':
      let birackaMjesta = action.payload;
      return Object.assign({}, state, {
        payload: birackaMjesta.map(function(item) { return new BirackoMjesto(item); })
      });
    default:
      return state;
  }
}
