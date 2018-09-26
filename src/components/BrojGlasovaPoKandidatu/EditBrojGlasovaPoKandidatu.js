import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import brojGlasovaPoKandidatuActions from '../../actions/brojGlasovaPoKandidatuActions';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EditBrojGlasovaPoKandidatu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brojGlasovaPoKandidatu: {
        birackoMjesto: '',
        kandidat: '',
        brojGlasova: ''
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  componentWillMount = () => {
    this.getBrojGlasovaDetails();
  };

  getBrojGlasovaDetails = () => {
    const brojGlasovaId = this.props.match.params.id;
    this.props.getBrojGlasovaPoKandidatu(brojGlasovaId)
      .then(json => {
        this.resetState();
      })
  };

  resetState() {
    const brojGlasovaPoKandidatu = this.props.brojGlasovaPoKandidatu.payload;
    this.setState({
      brojGlasovaPoKandidatu: {
        birackoMjesto: brojGlasovaPoKandidatu.birackoMjesto || '',
        kandidat: brojGlasovaPoKandidatu.kandidat || '',
        brojGlasova: brojGlasovaPoKandidatu.brojGlasova || ''
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let payload = this.state.brojGlasovaPoKandidatu;
    this.props.updateBrojGlasovaPoKandidatu(payload)
      .then(json => {
        this.props.history.push('/brojGlasovaPoKandidatu');
      });
  }

  onChange(e) {
    this.setState({
      brojGlasovaPoKandidatu: {
        ...this.state.brojGlasovaPoKandidatu,
        [e.target.name]: e.target.value
      }
    });
  }

  onCancelClick(e) {
    e.preventDefault();
    this.resetState();
  }

  render() {
    const { brojGlasovaPoKandidatu } = this.state;

    return (
      <div>
        <Link to={'/brojGlasovaPoKandidatu'}>
          <Button
            className="link"
             bsStyle="link"
             > Back to list
          </Button>
        </Link>
        <ControlLabel>Izmijeni broj glasova po kandidatu</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Biračko mjesto</ControlLabel>
              <FormControl
                className=""
                name="birackoMjesto"
                value={brojGlasovaPoKandidatu.birackoMjesto}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Kandidat</ControlLabel>
              <FormControl
                name="kandidat"
                value={brojGlasovaPoKandidatu.kandidat}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Broj glasova</ControlLabel>
              <FormControl
                name="brojGlasova"
                value={brojGlasovaPoKandidatu.brojGlasova}
                onChange={this.onChange}
              />
            </FormGroup>

            <div className="form-group form-group-buttons with-top-margin button-group">
              <Button
                className="with-margin-right"
                bsStyle="success"
                type="submit"
                value="Submit"
                >Save
              </Button>
              <Button
                onClick={this.onCancelClick}
                >Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
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
    getBrojGlasovaPoKandidatu: brojGlasovaPoKandidatuActions.getBrojGlasovaPoKandidatu,
    updateBrojGlasovaPoKandidatu: brojGlasovaPoKandidatuActions.updateBrojGlasovaPoKandidatu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBrojGlasovaPoKandidatu);
