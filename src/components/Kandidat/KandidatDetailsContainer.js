import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import kandidatActions from '../../actions/kandidatActions';
import KandidatDetails from './KandidatDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class KandidatDetailsContainer extends Component {
  componentDidMount = () => {
    this.getKandidatDetails();
  };

  getKandidatDetails = () => {
    const kandidatId = this.props.match.params.id;
    this.props.getKandidat(kandidatId);
  };

  render() {
    const { payload: kandidat } = this.props.kandidat;

    return (
      <DocumentTitle title="Kandidat: Detalji">
        <div>
          <Link to={'/kandidati'}>
            <Button
              className="link"
              bsStyle="link"
              > Back to list
            </Button>
          </Link>
          <Link to={`/currency/${kandidat.id}/edit` }>
            <Button
              className="link"
              bsStyle="link"
              > Izmijeni kandidata
            </Button>
          </Link>
          <KandidatDetails
            kandidat={kandidat}
          />
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    kandidat: state.kandidat
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getKandidat: kandidatActions.getKandidat
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KandidatDetailsContainer);
