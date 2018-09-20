import BrojGlasovaPoPolitickomSubjektu from '../components/BrojGlasovaPoPolitickomSubjektu/BrojGlasovaPoPolitickomSubjektu';

const initialState = {
  data: {},
  payload: []
};

export default function brojGlasovaPoPolitickomSubjektuReducer(state = initialState, action) {
  switch (action.type) {
    case 'BROJ_GLASOVA_PO_POLITICKOM_SUBJEKTU_SAVED':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'BROJ_GLASOVA_PO_POLITICKOM_SUBJEKTU_FETCHED':
      const brojGlasovaPoPolitickomSubjektu = action.payload;
      return Object.assign({}, state, {
        payload: new BrojGlasovaPoPolitickomSubjektu(brojGlasovaPoPolitickomSubjektu)
      });
    default:
      return state;
  }
}
