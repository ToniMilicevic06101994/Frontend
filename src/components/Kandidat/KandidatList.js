import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'react-bootstrap';
import kandidatiActions from '../../actions/kandidatiActions.js';
import kandidatActions from '../../actions/kandidatActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class KandidatList extends Component {
  componentDidMount = () => {
    this.props.getKandidati();
  };

  deleteKandidat = (id) => {
    this.props.deleteKandidat(id)
      .then(json => {
        this.props.getKandidati();
      });
  };

  renderRows = () => {
    const { kandidati } = this.props;
    return kandidati.payload.map((kandidat) => {
      let path = `/kandidat/${kandidat.id}/edit`;
      return (
        <tr key={kandidat.id}>
          <td> <Link to={path}>{kandidat.imePrezime} </Link></td>
          <td> {kandidat.adresa} </td>
          <td> {kandidat.jmbg} </td>
          <td>
            <Button
              bsStyle="danger"
              onClick={() => {this.deleteKandidat(kandidat.id)}}
              >Obriši
            </Button>
          </td>
        </tr>
      );
    });
  };

  renderKandidati() {
    const columns = ['ime i prezime', 'adresa', 'jmbg']
    const kandidati = this.props.kandidati.payload;
    if(kandidati.length > 0) {
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
  };

  render() {
    return (
      <DocumentTitle title="Kandidati: Lista">
        <div>
          <Button
            href="/kandidat/new"
            bsStyle="success"
            >Dodaj kandidata
          </Button>
          {this.renderKandidati()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    kandidati: state.kandidati
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getKandidati: kandidatiActions.getKandidati,
    deleteKandidat: kandidatActions.deleteKandidat
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KandidatList);
