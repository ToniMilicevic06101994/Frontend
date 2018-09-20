import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import izlaznostPoBirackimMjestimaActions from '../../actions/izlaznostPoBirackimMjestimaActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class KandidatList extends Component {

  componentDidMount = () => {
    this.props.getIzlaznostPoBirackimMjestima();
  };

  renderRows = () => {
    const { izlaznostPoBirackimMjestima } = this.props;
    return izlaznostPoBirackimMjestima.payload.map((item) => {
      let path = `/currency/${item.id}`;
      return (
        <tr key={item.id}>
          <td> {item.id} </td>
          <td>
            <Link to={path}> {item.id} </Link>
          </td>
          <td> {item.id} </td>
        </tr>
      );
    });
  };

  renderIzlaznost() {
    const columns = ['biračko mjesto', 'broj glasača', 'izašlo glasača']
    const izlaznost = this.props.izlaznostPoBirackimMjestima.payload;
    if(izlaznost.length > 0) {
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
      <DocumentTitle title="Izlaznost: Lista">
        <div>
          {this.renderIzlaznost()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    izlaznostPoBirackimMjestima: state.izlaznostPoBirackimMjestima
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getIzlaznostPoBirackimMjestima: izlaznostPoBirackimMjestimaActions.getIzlaznostPoBirackimMjestima
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KandidatList);
