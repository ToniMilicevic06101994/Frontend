import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import LokacijaList from '../components/Lokacija/LokacijaList';
import KantonList from '../components/Kanton/KantonList';
import OpcinaList from '../components/Opcina/OpcinaList';
import IzbornaJedinicaList from '../components/IzbornaJedinica/IzbornaJedinicaList';
import BirackoMjestoList from '../components/BirackoMjesto/BirackoMjestoList';
import IzborList from '../components/Izbor/IzborList';
import NewIzbor from '../components/Izbor/NewIzbor';
import NewKandidat from '../components/Kandidat/NewKandidat';
import EditKandidat from '../components/Kandidat/EditKandidat';
import EditPolitičkiSubjekt from '../components/PolitickiSubjekt/EditPolitičkiSubjekt';
import EditIzlaznostPoBirackomMjestu from '../components/IzlaznostPoBirackomMjestu/EditIzlaznostPoBirackomMjestu';
import IzlaznostPoBirackomMjestuDetailsContainer from '../components/IzlaznostPoBirackomMjestu/IzlaznostPoBirackomMjestuDetailsContainer';
import BrojGlasovaPoKandidatuDetailsContainer from '../components/BrojGlasovaPoKandidatu/BrojGlasovaPoKandidatuDetailsContainer';
import BrojGlasovaPoPolitickomSubjektuDetailsContainer from '../components/BrojGlasovaPoPolitickomSubjektu/BrojGlasovaPoPolitickomSubjektuDetailsContainer';
import NewPolitickiSubjekt from '../components/PolitickiSubjekt/NewPolitickiSubjekt';
import KandidatList from '../components/Kandidat/KandidatList';
import PolitickiSubjekatList from '../components/PolitickiSubjekt/PolitickiSubjekatList';
import IzlaznostList from '../components/IzlaznostPoBirackomMjestu/IzlaznostList';
import BrojGlasovaPoKandidatuList from '../components/BrojGlasovaPoKandidatu/BrojGlasovaPoKandidatuList';
import BrojGlasovaPoPolitickomSubjektuList from '../components/BrojGlasovaPoPolitickomSubjektu/BrojGlasovaPoPolitickomSubjektuList';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={IzborList} />
        <Route path="/izbor/new" component={NewIzbor} />
        <Route exact path="/lokacije" component={LokacijaList} />
        <Route exact path="/kantoni" component={KantonList} />
        <Route exact path="/opcine" component={OpcinaList} />
        <Route exact path="/izborneJedinice" component={IzbornaJedinicaList} />
        <Route exact path="/birackaMjesta" component={BirackoMjestoList} />
        <Route exact path="/kandidati" component={KandidatList} />
        <Route exact path="/kandidat/new" component={NewKandidat} />
        <Route exact path="/kandidat/:id/edit" component={EditKandidat} />
        <Route exact path="/politickiSubjekti" component={PolitickiSubjekatList} />
        <Route exact path="/politickiSubjekt/new" component={NewPolitickiSubjekt} />
        <Route exact path="/politickiSubjekt/:id/edit" component={EditPolitičkiSubjekt} />
        <Route exact path="/currency/:id/edit" component={EditIzlaznostPoBirackomMjestu} />
        <Route exact path="/currency/:id" component={IzlaznostPoBirackomMjestuDetailsContainer} />
        <Route exact path="/brojGlasovaPoKandidatu/:id" component={BrojGlasovaPoKandidatuDetailsContainer} />
        <Route exact path="/brojGlasovaPoPolitickomSubjektu/:id" component={BrojGlasovaPoPolitickomSubjektuDetailsContainer} />
        <Route exact path="/izlaznost" component={IzlaznostList} />
        <Route exact path="/brojGlasovaPoKandidatu" component={BrojGlasovaPoKandidatuList} />
        <Route exact path="/brojGlasovaPoPolitickomSubjektu" component={BrojGlasovaPoPolitickomSubjektuList} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
