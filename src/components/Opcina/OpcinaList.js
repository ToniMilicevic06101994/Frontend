import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import opcineActions from '../../actions/opcineActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class OpcinaList extends Component {

  componentDidMount = () => {
    this.props.getOpcine();
  };

  renderRows = () => {
    const { opcine } = this.props;
    return opcine.payload.map((opcina) => {
      let path = `/currency/${opcina.id}`;
      return (
        <tr key={opcina.id}>
          <td> {opcina.id} </td>
          <td>
            <Link to={path}> {opcina.id} </Link>
          </td>
        </tr>
      );
    });
  };

  renderOpcine() {
    const columns = ['šifra', 'naziv']
    const opcine = this.props.opcine.payload;
    if(opcine.length > 0) {
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
      <DocumentTitle title="Općine: Lista">
        <div>
          {this.renderOpcine()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    opcine: state.opcine
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOpcine: opcineActions.getOpcine
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OpcinaList);
