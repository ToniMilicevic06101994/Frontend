import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import brojGlasovaPoPolitickimSubjektimaActions from '../../actions/brojGlasovaPoPolitickimSubjektimaActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class BrojGlasovaPoPolitickomSubjektuList extends Component {
  componentDidMount = () => {
    this.props.getBrojGlasovaPoPolitickimSubjektima();
  };

  renderRows = () => {
    const { brojGlasovaPoPolitickimSubjektima } = this.props;
    return brojGlasovaPoPolitickimSubjektima.payload.map((brojGlasova) => {
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
    getBrojGlasovaPoPolitickimSubjektima: brojGlasovaPoPolitickimSubjektimaActions.getBrojGlasovaPoPolitickimSubjektima
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrojGlasovaPoPolitickomSubjektuList);
