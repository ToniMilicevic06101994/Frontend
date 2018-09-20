import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import politickiSubjektActions from '../../actions/politickiSubjektActions';
import { withRouter } from 'react-router-dom';

class EditPolitickiSubjekt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      politickiSubjekt: {
        sifra: props.sifra || '',
        naziv: props.naziv || '',
        grad: props.grad || '',
        adresa: props.adresa || '',
        telefon: props.telefon || ''
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  resetState() {
    this.setState({
      politickiSubjekt: {
        sifra: this.props.sifra || '',
        naziv: this.props.naziv || '',
        grad: this.props.grad || '',
        adresa: this.props.adresa || '',
        telefon: this.props.telefon || ''
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let payload = this.state.politickiSubjekt;

    /*if (this.props.accountId){
      payload.account_id = this.props.accountId;
    }*/
    politickiSubjektActions.updatePolitickiSubjekt(payload);
    this.props.history.push('/politickiSubjekti')
  }

  onChange(e) {
    this.setState({
      politickiSubjekt: {
        ...this.state.politickiSubjekt,
        [e.target.name]: e.target.value
      }
    });
  }

  onCancelClick(e) {
    e.preventDefault();
    this.resetState();
  }

  render() {
    const { politickiSubjekt } = this.state;

    return (
      <div>
        <ControlLabel>Izmijeni politički subjekt</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Sifra</ControlLabel>
              <FormControl
                className=""
                name="sifra"
                value={politickiSubjekt.sifra}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Naziv</ControlLabel>
              <FormControl
                name="naziv"
                value={politickiSubjekt.naziv}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Grad</ControlLabel>
              <FormControl
                name="grad"
                value={politickiSubjekt.grad}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Adresa</ControlLabel>
              <FormControl
                name="adresa"
                value={politickiSubjekt.adresa}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Telefon</ControlLabel>
              <FormControl
                name="telefon"
                value={politickiSubjekt.telefon}
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

export default EditPolitickiSubjekt;
