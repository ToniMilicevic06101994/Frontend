import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import politickiSubjektActions from '../../actions/politickiSubjektActions';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class NewPolitickiSubjekt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      politickiSubjekt: {
        sifra: '',
        naziv: '',
        grad: '',
        adresa: '',
        telefon: ''
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

    this.props.savePolitickiSubjekt(payload)
      .then(json => {
        this.props.history.push('/politickiSubjekti');
      });
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
        <ControlLabel>Novi politički subjekt</ControlLabel>
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

function mapStateToProps(state) {
  return {
    politickiSubjekt: state.politickiSubjekt
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    savePolitickiSubjekt: politickiSubjektActions.savePolitickiSubjekt
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPolitickiSubjekt);
