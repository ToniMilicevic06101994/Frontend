import BrojGlasovaPoKandidatu from '../components/BrojGlasovaPoKandidatu/BrojGlasovaPoKandidatu';

const initialState = {
  data: {},
  payload: []
};

export default function brojGlasovaPoKandidatuReducer(state = initialState, action) {
  switch (action.type) {
    case 'BROJ_GLASOVA_PO_KANDIDATU_SAVED':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'BROJ_GLASOVA_PO_KANDIDATU_FETCHED':
      const brojGlasovaPoKandidatu = action.payload;
      return Object.assign({}, state, {
        payload: new BrojGlasovaPoKandidatu(brojGlasovaPoKandidatu)
      });
    default:
      return state;
  }
}
