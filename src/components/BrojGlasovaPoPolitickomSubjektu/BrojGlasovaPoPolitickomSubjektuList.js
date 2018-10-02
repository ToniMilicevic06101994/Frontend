import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import brojGlasovaPoPolitickimSubjektimaActions from '../../actions/brojGlasovaPoPolitickimSubjektimaActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';
import FilterForm from './FilterForm';

class BrojGlasovaPoPolitickomSubjektuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategorijaId: 1,
      birackoMjestoId: 1,
      politickiSubjektId: 1
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
      politickiSubjektId: 1
    });
  }

  getList = () => {
    if(this.state.kategorijaId && this.state.politickiSubjektId){
      this.props.getBrojGlasovaPoPolitickimSubjektima({electionsId: 4, politicalSubjectId: this.state.politickiSubjektId, categoryId: this.state.kategorijaId })
      this.resetState();
    } else if (this.state.kategorijaId && this.state.birackoMjestoId) {
      this.props.getBrojGlasovaPolitickihSubjekataPoBirackimMjestima({electionsId: 4, pollingStationId: this.state.birackoMjestoId, categoryId: this.state.kategorijaId })
      this.resetState();
    }
  };

  renderRows = () => {
    const { brojGlasovaPoPolitickimSubjektima } = this.props;
    if(brojGlasovaPoKandidatima.length > 0) {
      return brojGlasovaPoPolitickimSubjektima.payload.map((brojGlasova) => {
        let path = `/brojGlasovaPoPolitickomSubjektu/${brojGlasova.id}/edit`;
        return (
          <tr key={brojGlasova.id}>
            <td> {brojGlasova.politickiSubjektNaziv} </td>
            <td>
              <Link to={path}> {brojGlasova.politickiSubjektSifra} </Link>
            </td>
            <td> {brojGlasova.brojGlasova} </td>
          </tr>
        );
      });
    }
  };

  renderBrojGlasovaPoPolitickomSubjektu() {
    const columns = ['politički subjekt', 'biračko mjesto', 'broj glasova']
    const brojGlasova = this.props.brojGlasovaPoPolitickimSubjektima.payload;
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
      <DocumentTitle title="Br. Glasova Po Političkom subjektu: Lista">
        <div>
          <FilterForm onSelectChange={this.onSelectChange}/>
          {this.renderBrojGlasovaPoPolitickomSubjektu()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    brojGlasovaPoPolitickimSubjektima: state.brojGlasovaPoPolitickimSubjektima
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBrojGlasovaPoPolitickimSubjektima: brojGlasovaPoPolitickimSubjektimaActions.getBrojGlasovaPoPolitickimSubjektima,
    getBrojGlasovaPolitickihSubjekataPoBirackimMjestima: brojGlasovaPoPolitickimSubjektimaActions.getBrojGlasovaPolitickihSubjekataPoBirackimMjestima
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrojGlasovaPoPolitickomSubjektuList);
