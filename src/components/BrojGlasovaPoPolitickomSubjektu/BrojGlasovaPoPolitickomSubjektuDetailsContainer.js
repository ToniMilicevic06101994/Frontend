import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import brojGlasovaPoPolitickomSubjektuActions from '../../actions/brojGlasovaPoPolitickomSubjektuActions';
import BrojGlasovaPoPolitickomSubjektuDetails from './BrojGlasovaPoPolitickomSubjektuDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BrojGlasovaPoPolitickomSubjektuDetailsContainer extends Component {
  componentDidMount = () => {
    this.getBrojGlasovaPoPolitickomSubjektuDetails();
  };

  getBrojGlasovaPoPolitickomSubjektuDetails = () => {
    const brojGlasovaPoPolitickomSubjektuId = this.props.match.params.id;
    this.props.getBrojGlasovaPoPolitickomSubjektu(brojGlasovaPoPolitickomSubjektuId);
  };

  render() {
    const { payload: brojGlasovaPoPolitickomSubjektu } = this.props.brojGlasovaPoPolitickomSubjektu;

    return (
      <DocumentTitle title="Broj Glasova Po Politickom Subjektu: Detalji">
        <div>
        <Link to={'/brojGlasovaPoPolitickomSubjektu'}>
          <Button
            className="link"
            bsStyle="link"
            > Back to list
          </Button>
        </Link>
          <BrojGlasovaPoPolitickomSubjektuDetails
            brojGlasovaPoPolitickomSubjektu={brojGlasovaPoPolitickomSubjektu}
            />
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    brojGlasovaPoPolitickomSubjektu: state.brojGlasovaPoPolitickomSubjektu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBrojGlasovaPoPolitickomSubjektu: brojGlasovaPoPolitickomSubjektuActions.getBrojGlasovaPoPolitickomSubjektu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrojGlasovaPoPolitickomSubjektuDetailsContainer);
