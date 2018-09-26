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
        id: '',
        birackoMjestoSifra: '',
        birackoMjestoNaziv: '',
        birackoMjestoId: '',
        kandidatImePrezime: '',
        kandidatId: '',
        brojGlasova: 0,
        izboriId: ''
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
        id: brojGlasovaPoKandidatu.id || '',
        birackoMjestoSifra: brojGlasovaPoKandidatu.birackoMjestoSifra || '',
        birackoMjestoNaziv: brojGlasovaPoKandidatu.birackoMjestoNaziv || '',
        birackoMjestoId: brojGlasovaPoKandidatu.birackoMjestoId || '',
        kandidatImePrezime: brojGlasovaPoKandidatu.kandidatImePrezime || '',
        kandidatId: brojGlasovaPoKandidatu.kandidatId || '',
        brojGlasova: brojGlasovaPoKandidatu.brojGlasova || 0,
        izboriId: brojGlasovaPoKandidatu.izboriId || ''
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
            <FormGroup>
              <ControlLabel>Ime i prezime kandidata</ControlLabel>
              <FormControl
                disabled
                name="kandidatImePrezime"
                value={brojGlasovaPoKandidatu.kandidatImePrezime}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup className="form-group-left">
              <ControlLabel>Biračko mjesto - šifra</ControlLabel>
              <FormControl
                disabled
                name="birackoMjestoSifra"
                value={brojGlasovaPoKandidatu.birackoMjestoSifra}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup className="form-group-left">
              <ControlLabel>Naziv biračkog mjesta</ControlLabel>
              <FormControl
                disabled
                name="birackoMjestoNaziv"
                value={brojGlasovaPoKandidatu.birackoMjestoNaziv}
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
