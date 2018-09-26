import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import kandidatActions from '../../actions/kandidatActions';
import { withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NewKandidat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kandidat: {
        imePrezime: '',
        jmbg: '',
        adresa: '',
        telefon: '',
        email: ''
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  resetState() {
    this.setState({
      kandidat: {
        imePrezime: this.props.imePrezime || '',
        jmbg: this.props.jmbg || '',
        adresa: this.props.adresa || '',
        telefon: this.props.telefon || '',
        email: this.props.email || ''
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let payload = this.state.kandidat;
    this.props.saveKandidat(payload)
      .then(json => {
        this.props.history.push('/kandidati');
      });
  }

  onChange(e) {
    this.setState({
      kandidat: {
        ...this.state.kandidat,
        [e.target.name]: e.target.value
      }
    });
  }

  onCancelClick(e) {
    e.preventDefault();
    this.resetState();
  }

  render() {
    const { kandidat } = this.state;

    return (
      <div>
        <ControlLabel>Novi kandidat</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Ime i prezime</ControlLabel>
              <FormControl
                className=""
                name="imePrezime"
                value={kandidat.imePrezime}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>JMBG</ControlLabel>
              <FormControl
                name="jmbg"
                value={kandidat.jmbg}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Adresa</ControlLabel>
              <FormControl
                name="adresa"
                value={kandidat.adresa}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl
                name="email"
                value={kandidat.email}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Telefon</ControlLabel>
              <FormControl
                name="telefon"
                value={kandidat.telefon}
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
    kandidat: state.kandidat
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveKandidat: kandidatActions.saveKandidat
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewKandidat);
