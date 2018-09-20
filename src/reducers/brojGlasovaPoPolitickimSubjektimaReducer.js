import BrojGlasovaPoPolitickomSubjektu from '../components/BrojGlasovaPoPolitickomSubjektu/BrojGlasovaPoPolitickomSubjektu';

const initialState = {
  payload: []
};

export default function brojGlasovaPoPolitickimSubjektimaReducer(state = initialState, action){
  switch (action.type) {
    case 'BROJ_GLASOVA_PO_POLITICKIM_SUBJEKTIMA_FETCHED':
      let brojGlasovaPoPolitickimSubjektima = action.payload;
      return Object.assign({}, state, {
        payload: brojGlasovaPoPolitickimSubjektima.map(function(item) { return new BrojGlasovaPoPolitickomSubjektu(item); })
      });
    default:
      return state;
  }
}
