import { combineReducers } from 'redux';
import birackaMjestaReducer from './birackaMjestaReducer';
import izborneJediniceReducer from './izborneJediniceReducer';
import kantoniReducer from './kantoniReducer';
import lokacijeReducer from './lokacijeReducer';
import opcineReducer from './opcineReducer';
import izborReducer from './izborReducer';
import izboriReducer from './izboriReducer';
import kandidatiReducer from './kandidatiReducer';
import kandidatReducer from './kandidatReducer';
import politickiSubjektiReducer from './politickiSubjektiReducer';
import politickiSubjektReducer from './politickiSubjektReducer';
import brojGlasovaPoKandidatuReducer from './brojGlasovaPoKandidatuReducer';
import brojGlasovaPoKandidatimaReducer from './brojGlasovaPoKandidatimaReducer';
import brojGlasovaPoPolitickomSubjektuReducer from './brojGlasovaPoPolitickomSubjektuReducer';
import brojGlasovaPoPolitickimSubjektimaReducer from './brojGlasovaPoPolitickimSubjektimaReducer';
import izlaznostPoBirackimMjestimaReducer from './izlaznostPoBirackimMjestimaReducer';
import izlaznostPoBirackomMjestuReducer from './izlaznostPoBirackomMjestuReducer';

export default combineReducers({
  birackaMjesta: birackaMjestaReducer,
  izborneJedinice: izborneJediniceReducer,
  kantoni: kantoniReducer,
  lokacije: lokacijeReducer,
  opcine: opcineReducer,
  izbor: izborReducer,
  izbori: izboriReducer,
  kandidati: kandidatiReducer,
  kandidat: kandidatReducer,
  politickiSubjekti: politickiSubjektiReducer,
  politickiSubjekt: politickiSubjektReducer,
  brojGlasovaPoKandidatu: brojGlasovaPoKandidatuReducer,
  brojGlasovaPoKandidatima: brojGlasovaPoKandidatimaReducer,
  brojGlasovaPoPolitickomSubjektu: brojGlasovaPoPolitickomSubjektuReducer,
  brojGlasovaPoPolitickimSubjektima: brojGlasovaPoPolitickimSubjektimaReducer,
  izlaznostPoBirackomMjestu: izlaznostPoBirackomMjestuReducer,
  izlaznostPoBirackimMjestima: izlaznostPoBirackimMjestimaReducer
});
