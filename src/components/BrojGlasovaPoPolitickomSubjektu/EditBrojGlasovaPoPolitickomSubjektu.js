import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import brojGlasovaPoPolitickomSubjektuActions from '../../actions/brojGlasovaPoPolitickomSubjektuActions';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EditBrojGlasovaPoPolitickomSubjektu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brojGlasovaPoPolitickomSubjektu: {
        id: '',
        politickiSubjektId: '',
        politickiSubjektSifra: '',
        politickiSubjektNaziv: '',
        izboriId: '',
        izbornaJedinicaId: '',
        kategorijaId: '',
        kategorijaNaziv: '',
        birackoMjestoId: '',
        birackoMjestoSifra: '',
        birackoMjestoNaziv: '',
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
    this.props.getBrojGlasovaPoPolitickomSubjektu(brojGlasovaId)
      .then(json => {
        this.resetState();
      })
  };

  resetState() {
    const brojGlasovaPoPolitickomSubjektu = this.props.brojGlasovaPoPolitickomSubjektu.payload;
    this.setState({
      brojGlasovaPoPolitickomSubjektu: {
        id: brojGlasovaPoPolitickomSubjektu.id || '',
        politickiSubjektId: brojGlasovaPoPolitickomSubjektu.politickiSubjektId || '',
        politickiSubjektSifra: brojGlasovaPoPolitickomSubjektu.politickiSubjektSifra || '',
        politickiSubjektNaziv: brojGlasovaPoPolitickomSubjektu. politickiSubjektNaziv || '',
        izboriId: brojGlasovaPoPolitickomSubjektu.izboriId || '',
        izbornaJedinicaId: brojGlasovaPoPolitickomSubjektu.izbornaJedinicaId || '',
        kategorijaId: brojGlasovaPoPolitickomSubjektu.kategorijaId || '',
        kategorijaNaziv: brojGlasovaPoPolitickomSubjektu.kategorijaNaziv || '',
        birackoMjestoId: brojGlasovaPoPolitickomSubjektu.birackoMjestoId || '',
        birackoMjestoSifra: brojGlasovaPoPolitickomSubjektu.birackoMjestoSifra || '',
        birackoMjestoNaziv: brojGlasovaPoPolitickomSubjektu.birackoMjestoNaziv || '',
        brojGlasova: brojGlasovaPoPolitickomSubjektu.brojGlasova || ''
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let payload = this.state.brojGlasovaPoPolitickomSubjektu;
    this.props.updateBrojGlasovaPoPolitickomSubjektu(payload)
      .then(json => {
        this.props.history.push('/brojGlasovaPoPolitickomSubjektu');
      });
  }

  onChange(e) {
    this.setState({
      brojGlasovaPoPolitickomSubjektu: {
        ...this.state.brojGlasovaPoPolitickomSubjektu,
        [e.target.name]: e.target.value
      }
    });
  }

  onCancelClick(e) {
    e.preventDefault();
    this.resetState();
  }

  render() {
    const { brojGlasovaPoPolitickomSubjektu } = this.state;

    return (
      <div>
        <Link to={'/brojGlasovaPoPolitickomSubjektu'}>
          <Button
            className="link"
             bsStyle="link"
             > Back to list
          </Button>
        </Link>
        <ControlLabel>Izmijeni broj glasova po politickom subjektu</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Biračko mjesto</ControlLabel>
              <FormControl
                className=""
                name="birackoMjesto"
                value={brojGlasovaPoPolitickomSubjektu.birackoMjesto}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Politički subjekt</ControlLabel>
              <FormControl
                name="politickiSubjekt"
                value={brojGlasovaPoPolitickomSubjektu.politickiSubjekt}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Broj glasova</ControlLabel>
              <FormControl
                name="brojGlasova"
                value={brojGlasovaPoPolitickomSubjektu.brojGlasova}
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
    brojGlasovaPoPolitickomSubjektu: state.brojGlasovaPoPolitickomSubjektu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBrojGlasovaPoPolitickomSubjektu: brojGlasovaPoPolitickomSubjektuActions.getBrojGlasovaPoPolitickomSubjektu,
    updateBrojGlasovaPoPolitickomSubjektu: brojGlasovaPoPolitickomSubjektuActions.updateBrojGlasovaPoPolitickomSubjektu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBrojGlasovaPoPolitickomSubjektu);
