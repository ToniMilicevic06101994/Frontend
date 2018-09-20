import Opcina from '../components/Opcina/Opcina';

const initialState = {
  payload: []
};

export default function opcineReducer(state = initialState, action){
  switch (action.type) {
    case 'OPCINE_FETCHED':
      let opcine = action.payload;
      return Object.assign({}, state, {
        payload: opcine.map(function(item) { return new Opcina(item); })
      });
    default:
      return state;
  }
}
