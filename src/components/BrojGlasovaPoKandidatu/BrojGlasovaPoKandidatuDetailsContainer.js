import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import brojGlasovaPoKandidatuActions from '../../actions/brojGlasovaPoKandidatuActions';
import BrojGlasovaPoKandidatuDetails from './BrojGlasovaPoKandidatuDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BrojGlasovaPoKandidatuDetailsContainer extends Component {
  componentDidMount = () => {
    this.getBrojGlasovaPoKandidatuDetails();
  };

  getBrojGlasovaPoKandidatuDetails = () => {
    const brojGlasovaPoKandidatuId = this.props.match.params.id;
    this.props.getBrojGlasovaPoKandidatu(brojGlasovaPoKandidatuId);
  };

  render() {
    const { payload: brojGlasovaPoKandidatu } = this.props.brojGlasovaPoKandidatu;

    return (
      <DocumentTitle title="Broj Glasova Po Kandidatu: Detalji">
        <div>
        <Link to={'/brojGlasovaPoKandidatu'}>
          <Button
            className="link"
            bsStyle="link"
            > Back to list
          </Button>
        </Link>
          <BrojGlasovaPoKandidatuDetails
            brojGlasovaPoKandidatu={brojGlasovaPoKandidatu}
            />
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    brojGlasovaPoKandidatu: state.brojGlasovaPoKandidatu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBrojGlasovaPoKandidatu: brojGlasovaPoKandidatuActions.getBrojGlasovaPoKandidatu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrojGlasovaPoKandidatuDetailsContainer);
