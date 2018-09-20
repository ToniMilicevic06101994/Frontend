import IzlaznostPoBirackomMjestu from '../components/IzlaznostPoBirackomMjestu/IzlaznostPoBirackomMjestu';

const initialState = {
  data: {},
  payload: []
};

export default function izlaznostPoBirackomMjestuReducer(state = initialState, action) {
  switch (action.type) {
    case 'IZLAZNOST_PO_BIRACKOM_MJESTU_SAVED':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'IZLAZNOST_PO_BIRACKOM_MJESTU_FETCHED':
      const izlaznostPoBirackomMjestu = action.payload;
      return Object.assign({}, state, {
        payload: new IzlaznostPoBirackomMjestu(izlaznostPoBirackomMjestu)
      });
    default:
      return state;
  }
}
