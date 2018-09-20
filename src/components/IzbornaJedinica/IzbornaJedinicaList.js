import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import izborneJediniceActions from '../../actions/izborneJediniceActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class IzbornaJedinicaList extends Component {
  componentDidMount = () => {
    this.props.getIzborneJedinice();
  };

  renderRows = () => {
    const { izborneJedinice } = this.props;
    return izborneJedinice.payload.map((izbornaJedinica) => {
      let path = `/currency/${izbornaJedinica.id}`;
      return (
        <tr key={izbornaJedinica.id}>
          <td> {izbornaJedinica.id} </td>
          <td>
            <Link to={path}> {izbornaJedinica.id} </Link>
          </td>
        </tr>
      );
    });
  };

  renderIzborneJedinice() {
    const columns = ['šifra', 'naziv']
    const izborneJedinice = this.props.izborneJedinice.payload;
    if(izborneJedinice.length > 0) {
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
      <DocumentTitle title="Izborne Jedinice: Lista">
        <div>
          {this.renderIzborneJedinice()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    izborneJedinice: state.izborneJedinice
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getIzborneJedinice: izborneJediniceActions.getIzborneJedinice
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IzbornaJedinicaList);
