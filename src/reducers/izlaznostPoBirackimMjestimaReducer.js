import IzlaznostPoBirackomMjestu from '../components/IzlaznostPoBirackomMjestu/IzlaznostPoBirackomMjestu';

const initialState = {
  payload: []
};

export default function izlaznostPoBirackimMjestimaReducer(state = initialState, action){
  switch (action.type) {
    case 'IZLAZNOST_PO_BIRACKIM_MJESTIMA_FETCHED':
      let izlaznostPoBirackimMjestima = action.payload;
      return Object.assign({}, state, {
        payload: izlaznostPoBirackimMjestima.map(function(item) { return new IzlaznostPoBirackomMjestu(item); })
      });
    default:
      return state;
  }
}
