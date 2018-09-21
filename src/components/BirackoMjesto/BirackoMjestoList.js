import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import birackaMjestaActions from '../../actions/birackaMjestaActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class BirackoMjestoList extends Component {
  componentDidMount = () => {
    this.props.getBirackaMjesta();
  };

  renderRows = () => {
    const { birackaMjesta } = this.props;
    return birackaMjesta.payload.map((birackoMjesto) => {
      return (
        <tr key={birackoMjesto.id}>
          <td> {birackoMjesto.sifra} </td>
          <td> {birackoMjesto.naziv} </td>
          <td> {birackoMjesto.lokacija} </td>
        </tr>
      );
    });
  };

  renderBirackaMjesta() {
    const columns = ['šifra', 'naziv', 'lokacija']
    const birackaMjesta = this.props.birackaMjesta.payload;
    if(birackaMjesta.length > 0) {
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
      <DocumentTitle title="Biračka Mjesta: Lista">
        <div>
          {this.renderBirackaMjesta()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    birackaMjesta: state.birackaMjesta
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBirackaMjesta: birackaMjestaActions.getBirackaMjesta
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BirackoMjestoList);
