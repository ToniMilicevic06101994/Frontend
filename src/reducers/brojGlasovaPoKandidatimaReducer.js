import BrojGlasovaPoKandidatu from '../components/BrojGlasovaPoKandidatu/BrojGlasovaPoKandidatu';

const initialState = {
  payload: []
};

export default function brojGlasovaPoKandidatimaReducer(state = initialState, action){
  switch (action.type) {
    case 'BROJ_GLASOVA_PO_KANDIDATIMA_FETCHED':
      let brojGlasovaPoKandidatima = action.payload;
      return Object.assign({}, state, {
        payload: brojGlasovaPoKandidatima.map(function(item) { return new BrojGlasovaPoKandidatu(item); })
      });
    default:
      return state;
  }
}
