import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import kantoniActions from '../../actions/kantoniActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class KantonList extends Component {
  componentDidMount = () => {
    this.props.getKantoni();
  };

  renderRows = () => {
    const { kantoni } = this.props;
    return kantoni.payload.map((kanton) => {
      return (
        <tr key={kanton.id}>
          <td> {kanton.sifra} </td>
          <td> {kanton.naziv} </td>
        </tr>
      );
    });
  };

  renderKantoni() {
    const columns = ['šifra', 'naziv']
    const kantoni = this.props.kantoni.payload;
    if(kantoni.length > 0) {
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
      <DocumentTitle title="Kantoni: Lista">
        <div>
          {this.renderKantoni()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    kantoni: state.kantoni
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getKantoni: kantoniActions.getKantoni
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KantonList);
