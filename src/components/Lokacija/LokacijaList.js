import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import lokacijeActions from '../../actions/lokacijeActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class LokacijaList extends Component {
  componentDidMount = () => {
    this.props.getLokacije();
  };

  renderRows = () => {
    const { lokacije } = this.props;
    return lokacije.payload.map((lokacija) => {
      return (
        <tr key={lokacija.id}>
          <td> {lokacija.naziv} </td>
          <td> {lokacija.adresa}</td>
        </tr>
      );
    });
  };

  renderLokacije() {
    const columns = ['naziv', 'adresa']
    const lokacije = this.props.lokacije.payload;
    if(lokacije.length > 0) {
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
      <DocumentTitle title="Lokacije: Lista">
        <div>
          {this.renderLokacije()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    lokacije: state.lokacije
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLokacije: lokacijeActions.getLokacije
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LokacijaList);
