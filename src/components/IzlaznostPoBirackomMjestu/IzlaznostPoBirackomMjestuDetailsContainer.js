import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import izlaznostPoBirackomMjestuActions from '../../actions/izlaznostPoBirackomMjestuActions';
import IzlaznostPoBirackomMjestuDetails from './IzlaznostPoBirackomMjestuDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class IzlaznostPoBirackomMjestuDetailsContainer extends Component {
  componentDidMount = () => {
    this.getIzlaznostPoBirackomMjestuDetails();
  };

  getIzlaznostPoBirackomMjestuDetails = () => {
    const izlaznostPoBirackomMjestuId = this.props.match.params.id;
    this.props.getIzlaznostPoBirackomMjestu(izlaznostPoBirackomMjestuId);
  };

  render() {
    const { payload: izlaznostPoBirackomMjestu } = this.props.izlaznostPoBirackomMjestu;

    return (
      <DocumentTitle title="Izlaznost Po Birackom Mjestu: Detalji">
        <div>
          <Link to={'/izlaznost'}>
            <Button
              className="link"
              bsStyle="link"
              > Back to list
            </Button>
          </Link>
          <Link to={`/currency/${izlaznostPoBirackomMjestu.id}/edit` }>
            <Button
              className="link"
              bsStyle="link"
              > Unesi izlaznost po biračkom mjestu
            </Button>
          </Link>
          <IzlaznostPoBirackomMjestuDetails
            izlaznostPoBirackomMjestu={izlaznostPoBirackomMjestu}
          />
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    izlaznostPoBirackomMjestu: state.izlaznostPoBirackomMjestu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getIzlaznostPoBirackomMjestu: izlaznostPoBirackomMjestuActions.getIzlaznostPoBirackomMjestu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IzlaznostPoBirackomMjestuDetailsContainer);
