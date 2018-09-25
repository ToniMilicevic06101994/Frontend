import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import politickiSubjektActions from '../../actions/politickiSubjektActions';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class EditPolitickiSubjekt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      politickiSubjekt: {
        id: '',
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

  componentWillMount = () => {
    this.getPolitickiSubjektDetails();
  };

  getPolitickiSubjektDetails = () => {
    const politickiSubjektId = this.props.match.params.id;
    this.props.getPolitickiSubjekt(politickiSubjektId)
      .then(json => {
        this.resetState();
      })
  };

  resetState() {
    const politickiSubjekt = this.props.politickiSubjekt.payload;
    this.setState({
      politickiSubjekt: {
        id: politickiSubjekt.id,
        sifra: politickiSubjekt.sifra || '',
        naziv: politickiSubjekt.naziv || '',
        grad: politickiSubjekt.grad || '',
        adresa: politickiSubjekt.adresa || '',
        telefon: politickiSubjekt.telefon || ''
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let payload = this.state.politickiSubjekt;

    this.props.updatePolitickiSubjekt(payload)
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
        <Link to={'/politickiSubjekti'}>
          <Button
            className="link"
             bsStyle="link"
             > Back to list
          </Button>
        </Link>
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

function mapStateToProps(state) {
  return {
    politickiSubjekt: state.politickiSubjekt
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPolitickiSubjekt: politickiSubjektActions.getPolitickiSubjekt,
    updatePolitickiSubjekt: politickiSubjektActions.updatePolitickiSubjekt
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPolitickiSubjekt)
