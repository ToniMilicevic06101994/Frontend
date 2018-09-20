import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import izlaznostPoBirackomMjestuActions from '../../actions/izlaznostPoBirackomMjestuActions';
import {withRouter} from 'react-router-dom';

class EditIzlaznostPoBirackomMjestu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      izlaznostPoBirackomMjestu: {
        birackoMjesto: props.birackoMjesto || '',
        brojGlasaca: props.brojGlasaca || '',
        izasloGlasaca: props.izasloGlasaca || ''
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  resetState() {
    this.setState({
      izlaznostPoBirackomMjestu: {
        birackoMjesto: this.props.birackoMjesto || '',
        brojGlasaca: this.props.brojGlasaca || '',
        izasloGlasaca: this.props.izasloGlasaca || ''
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let payload = this.state.izlaznostPoBirackomMjestu;

    /*if (this.props.accountId){
      payload.account_id = this.props.accountId;
    }*/
    izlaznostPoBirackomMjestuActions.updateIzlaznostPoBirackomMjestu(payload);
    this.props.history.push('/izlaznost')
  }

  onChange(e) {
    this.setState({
      izlaznostPoBirackomMjestu: {
        ...this.state.izlaznostPoBirackomMjestu,
        [e.target.name]: e.target.value
      }
    });
  }

  onCancelClick(e) {
    e.preventDefault();
    this.resetState();
  }

  render() {
    const { izlaznostPoBirackomMjestu } = this.state;

    return (
      <div>
        <ControlLabel>Unesi izlaznost po biračkom mjestu</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Sifra</ControlLabel>
              <FormControl
                className=""
                name="sifra"
                value={izlaznostPoBirackomMjestu.sifra}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Naziv</ControlLabel>
              <FormControl
                name="naziv"
                value={izlaznostPoBirackomMjestu.naziv}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Grad</ControlLabel>
              <FormControl
                name="grad"
                value={izlaznostPoBirackomMjestu.grad}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Adresa</ControlLabel>
              <FormControl
                name="adresa"
                value={izlaznostPoBirackomMjestu.adresa}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Telefon</ControlLabel>
              <FormControl
                name="telefon"
                value={izlaznostPoBirackomMjestu.telefon}
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

export default EditIzlaznostPoBirackomMjestu;
