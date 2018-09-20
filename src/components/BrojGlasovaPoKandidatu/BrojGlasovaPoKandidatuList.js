import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import brojGlasovaPoKandidatimaActions from '../../actions/brojGlasovaPoKandidatimaActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class BrojGlasovaPoKandidatimaList extends Component {
  componentDidMount = () => {
    this.props.getBrojGlasovaPoKandidatima();
  };

  renderRows = () => {
    const { brojGlasovaPoKandidatima } = this.props;
    return brojGlasovaPoKandidatima.payload.map((brojGlasova) => {
      let path = `/currency/${brojGlasova.id}`;
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
      <DocumentTitle title="Br. Glasova Po Kandidatu: Lista">
        <div>
          {this.renderBrojGlasovaPoKandidatu()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    brojGlasovaPoKandidatima: state.brojGlasovaPoKandidatima
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBrojGlasovaPoKandidatima: brojGlasovaPoKandidatimaActions.getBrojGlasovaPoKandidatima
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrojGlasovaPoKandidatimaList);
