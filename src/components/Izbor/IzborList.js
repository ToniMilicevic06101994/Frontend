import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'react-bootstrap';
import izboriActions from '../../actions/izboriActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';
import moment from 'moment';

class IzborList extends Component {
  componentDidMount = () => {
    this.props.getIzbori();
  };

  renderRows = () => {
    const { izbori } = this.props;
    return izbori.payload.map((izbor) => {
      return (
        <tr key={izbor.id}>
          <td> {izbor.vrstaIzbora} </td>
          <td> {izbor.nivoIzbora} </td>
          <td> {moment(izbor.datumOdrzavanja).format('DD-MM-YYYY')} </td>
        </tr>
      );
    });
  };

  renderIzbori() {
    const columns = ['vrsta izbora', 'nivo izbora', 'datum održavanja']
    const izbori = this.props.izbori.payload;
    if(izbori.length > 0) {
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
      <DocumentTitle title="Izbori: Lista">
        <div>
          <Button
            href="/izbor/new"
            bsStyle="success"
            >Dodaj izbor
          </Button>
          {this.renderIzbori()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    izbori: state.izbori
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getIzbori: izboriActions.getIzbori
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IzborList);
