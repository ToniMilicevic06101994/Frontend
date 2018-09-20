import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import kandidatActions from '../../actions/kandidatActions';
import { withRouter} from 'react-router-dom';

class NewKandidat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kandidat: {
        ime: props.ime || '',
        prezime: props.prezime || '',
        jmbg: props.jmbg || '',
        adresa: props.adresa || '',
        telefon: props.telefon || '',
        email: props.email || ''
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
        ime: this.props.ime || '',
        prezime: this.props.prezime || '',
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

    /*if (this.props.accountId){
      payload.account_id = this.props.accountId;
    }*/

    kandidatActions.saveKandidat(payload);
    this.props.history.push('/politickiSubjekti')
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
              <ControlLabel>Ime</ControlLabel>
              <FormControl
                className=""
                name="ime"
                value={kandidat.ime}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Prezime</ControlLabel>
              <FormControl
                name="prezime"
                value={kandidat.prezime}
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

export default NewKandidat;
