import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import politickiSubjektActions from '../../actions/politickiSubjektActions';
import PolitickiSubjektDetails from './PolitickiSubjektDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class PolitickiSubjektDetailsContainer extends Component {
  componentDidMount = () => {
    this.getPolitickiSubjektDetails();
  };

  getPolitickiSubjektDetails = () => {
    const politickiSubjektId = this.props.match.params.id;
    this.props.getPolitickiSubjekt(politickiSubjektId);
  };

  render() {
    const { payload: politickiSubjekt } = this.props.politickiSubjekt;

    return (
      <DocumentTitle title="Politicki Subjekt: Detalji">
        <div>
        <Link to={'/politickiSubjekti'}>
          <Button
            className="link"
            bsStyle="link"
            > Back to list
          </Button>
        </Link>
        <Link to={`/currency/${politickiSubjekt.id}/edit` }>
          <Button
            className="link"
            bsStyle="link"
            > Izmijeni politički subjekat
          </Button>
        </Link>
        <PolitickiSubjektDetails
          politickiSubjekt={politickiSubjekt}
          />
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    politickiSubjekt: state.politickiSubjekt
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPolitickiSubjekt: politickiSubjektActions.getPolitickiSubjekt
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PolitickiSubjektDetailsContainer);
