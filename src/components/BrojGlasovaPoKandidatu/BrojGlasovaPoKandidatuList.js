import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import brojGlasovaPoKandidatimaActions from '../../actions/brojGlasovaPoKandidatimaActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';
import FilterForm from './FilterForm';

class BrojGlasovaPoKandidatimaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategorijaId: 1,
      birackoMjestoId: 1,
      kandidatId: 1
    }
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    },() => {
      this.getList();
    });
  };

  resetState() {
    this.setState({
      kategorijaId: 1,
      birackoMjestoId: 1,
      kandidatId: 1
    });
  }

  getList = () => {
    if(this.state.kategorijaId && this.state.kandidatId){
      this.props.getBrojGlasovaPoKandidatima({electionsId: 4, candidateId: this.state.kandidatId, categoryId: this.state.kategorijaId })
      this.resetState();
    } else if (this.state.kategorijaId && this.state.birackoMjestoId) {
      this.props.getBrojGlasovaKandidataPoBirackimMjestima({electionsId: 4, pollingStationId: this.state.birackoMjestoId, categoryId: this.state.kategorijaId })
      this.resetState();
    }
  };

  renderRows = () => {
    const brojGlasovaPoKandidatima = this.props.brojGlasovaPoKandidatima.payload;
    if(brojGlasovaPoKandidatima.length > 0) {
      return brojGlasovaPoKandidatima.map((brojGlasova) => {
        let path = `/brojGlasovaPoKandidatu/${brojGlasova.id}/edit`;
        return (
          <tr key={brojGlasova.id}>
            <td> {brojGlasova.kandidatImePrezime} </td>
            <td> <Link to={path}> {brojGlasova.birackoMjestoSifra} </Link></td>
            <td> {brojGlasova.brojGlasova} </td>
          </tr>
        );
      });
    }
  };

  renderBrojGlasovaPoKandidatu() {
    const columns = ['kandidat', 'biračko mjesto', 'broj glasova']
    const brojGlasova = this.props.brojGlasovaPoKandidatima.payload;
    if(brojGlasova.length > 0) {
      return (
        <div className="filter-margin">
          <Table responsive>
            <ColumnsTitle columns={columns} />
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
        </div>
      )
    }
  }

  render() {
    return (
      <DocumentTitle title="Glasovi Kandidata: Lista">
        <div>
          <FilterForm onSelectChange={this.onSelectChange}/>
          {this.renderBrojGlasovaPoKandidatu()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    brojGlasovaPoKandidatima: state.brojGlasovaPoKandidatima,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBrojGlasovaPoKandidatima: brojGlasovaPoKandidatimaActions.getBrojGlasovaPoKandidatima,
    getBrojGlasovaKandidataPoBirackimMjestima: brojGlasovaPoKandidatimaActions.getBrojGlasovaKandidataPoBirackimMjestima
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrojGlasovaPoKandidatimaList);
