import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'react-bootstrap';
import politickiSubjektiActions from '../../actions/politickiSubjektiActions.js';
import politickiSubjektActions from '../../actions/politickiSubjektActions.js';
import ColumnsTitle from '../shared/ColumnsTitle';
import { Link } from 'react-router-dom';

class PolitickiSubjekatList extends Component {
  componentDidMount = () => {
    this.props.getPolitickiSubjekti();
  };

  deletePolitickiSubjekt = (id) => {
    this.props.deletePolitickiSubjekt(id);
  };

  renderRows = () => {
    const { politickiSubjekti } = this.props;
    return politickiSubjekti.payload.map((politickiSubjekt) => {
      let path = `/currency/${politickiSubjekt.id}`;
      return (
        <tr key={politickiSubjekt.id}>
          <td> {politickiSubjekt.id} </td>
          <td>
            <Link to={path}> {politickiSubjekt.id} </Link>
          </td>
          <td> {politickiSubjekt.id} </td>
          <td>
            <Button
              bsStyle="danger"
              onClick={() => {this.deletePolitickiSubjekt(politickiSubjekt.id)}}
              >Obriši
            </Button>
          </td>
        </tr>
      );
    });
  };

  renderPolitickiSubjekti() {
    const columns = ['šifra', 'naziv', 'adresa']
    const politickiSubjekti = this.props.politickiSubjekti.payload;
    if(politickiSubjekti.length > 0) {
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
      <DocumentTitle title="Politički Subjekti: Lista">
        <div>
          <Button
            href="/politickiSubjekt/new"
            bsStyle="success"
            >Dodaj politički subjekt
          </Button>
          {this.renderPolitickiSubjekti()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    politickiSubjekti: state.politickiSubjekti
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPolitickiSubjekti: politickiSubjektiActions.getPolitickiSubjekti,
    deletePolitickiSubjekt: politickiSubjektActions.deletePolitickiSubjekt
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PolitickiSubjekatList);
