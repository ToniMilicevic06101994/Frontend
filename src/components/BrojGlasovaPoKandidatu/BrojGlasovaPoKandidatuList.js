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
      brojGlasovaPoKandidatu: {
        kategorijaId: null,
        birackoMjestoId: null,
        kandidatId: null
      }
    }

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount = () => {
    this.props.getBrojGlasovaPoKandidatima();
  };

  onSelectChange = (e) => {
    this.setState({
      brojGlasovaPoKandidatu: {
        ...this.state.brojGlasovaPoKandidatu,
        [e.target.name]: e.target.value
      }
    });
    this.getList();
  };

  resetState() {
    this.setState({
      brojGlasovaPoKandidatu: {
        kategorijaId: null,
        birackoMjestoId: null,
        kandidatId: null
      }
    });
  }

  getList = () => {
    if(this.state.kategorijaId && this.state.kandidatId){

    } else if (this.state.kategorijaId && this.state.birackoMjestoId) {

    }
    this.resetState();
  };

  renderRows = () => {
    const { brojGlasovaPoKandidatima } = this.props;
    return brojGlasovaPoKandidatima.payload.map((brojGlasova) => {
      let path = `/kandidat/${brojGlasova.id}`;
      return (
        <tr key={brojGlasova.id}>
          <td> {brojGlasova.id} </td>
          <td>
            <Link to={path}> {brojGlasova.id} </Link>
          </td>
          <td> {brojGlasova.id} </td>
        </tr>
      );
    });
  };

  renderBrojGlasovaPoKandidatu() {
    const columns = ['kandidat', 'biračko mjesto', 'broj glasova']
    const brojGlasova = this.props.brojGlasovaPoKandidatima.payload;
    if(brojGlasova.length > 0) {
      return (
        <div>
          <Table responsive>
            <ColumnsTitle columns={columns} />
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
        </div>
      );
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
    kategorije: state.kategorije,
    kandidati: state.kandidati,
    birackaMjesta: state.birackaMjesta
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBrojGlasovaPoKandidatima: brojGlasovaPoKandidatimaActions.getBrojGlasovaPoKandidatima
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrojGlasovaPoKandidatimaList);
