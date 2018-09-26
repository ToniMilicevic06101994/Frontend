import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import kategorijeActions from '../../actions/kategorijeActions.js';
import kandidatiActions from '../../actions/kandidatiActions.js';
import birackaMjestaActions from '../../actions/birackaMjestaActions.js';
import brojGlasovaPoKandidatimaActions from '../../actions/brojGlasovaPoKandidatimaActions.js';

class FilterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: '1'
    }
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount = () => {
    this.props.getKategorije();
    this.props.getKandidati();
    this.props.getBirackaMjesta();
  };

  onSelectChange = (e) => {
    this.setState({
      sortBy: e.target.value
    });
  };

  createCategoryOptions() {
    const kategorije = this.props.kategorije.payload;
    if(kategorije.length > 0){
      return kategorije.map((kategorija, index) => {
        return (<option value={kategorija.id} key={index}>{kategorija.naziv}</option>);
      });
    }
  }

  createKandidatOptions() {
    const kandidati = this.props.kandidati.payload;
    if(kandidati.length > 0){
      return kandidati.map((kandidat, index) => {
        return (<option value={kandidat.id} key={index}>{kandidat.imePrezime}</option>);
      });
    }
  }

  createBirackoMjestoOptions() {
    const birackaMjesta = this.props.birackaMjesta.payload;
    if(birackaMjesta.length > 0){
      return birackaMjesta.map((birackoMjesto, index) => {
        return (<option value={birackoMjesto.id} key={index}>{birackoMjesto.naziv}</option>);
      });
    }
  }

  renderFilters() {
    if(this.state.sortBy == '1') {
      return (
        <div>
          <FormGroup className="form-group-left">
            <ControlLabel>Kategorija</ControlLabel>
            <FormControl
              onChange={this.props.onSelectChange}
              componentClass="select"
              placeholder="izaberi"
              name="kategorijaId"
            >
              {this.createCategoryOptions()}
            </FormControl>
          </FormGroup>
          <FormGroup className="form-group-left">
            <ControlLabel>Kandidat</ControlLabel>
            <FormControl
              onChange={this.props.onSelectChange}
              componentClass="select"
              placeholder="izaberi"
              name="kandidatId"
            >
              {this.createKandidatOptions()}
            </FormControl>
          </FormGroup>
        </div>
      )
    } else if (this.state.sortBy == '2'){
      return(
        <div>
          <FormGroup className="form-group-left">
            <ControlLabel>Kategorija</ControlLabel>
            <FormControl
              onChange={this.props.onSelectChange}
              componentClass="select"
              placeholder="izaberi"
              name="kategorijaId"
            >
              {this.createCategoryOptions()}
            </FormControl>
          </FormGroup>

          <FormGroup className="form-group-left">
            <ControlLabel>Biračko mjesto</ControlLabel>
            <FormControl
              onChange={this.props.onSelectChange}
              componentClass="select"
              placeholder="izaberi"
              name="birackoMjestoId"
            >
              {this.createBirackoMjestoOptions()}
            </FormControl>
          </FormGroup>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="filter-form">
        <FormGroup className="form-group-left">
          <ControlLabel>Sortiraj po</ControlLabel>
          <FormControl
            onChange={this.onSelectChange}
            componentClass="select"
            placeholder="izaberi"
            name="sortBy"
          >
            <option value="1">kandidatu</option>
            <option value="2">biračkom mjestu</option>
          </FormControl>
        </FormGroup>
        {this.renderFilters()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    kategorije: state.kategorije,
    kandidati: state.kandidati,
    birackaMjesta: state.birackaMjesta
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getKategorije: kategorijeActions.getKategorije,
    getKandidati: kandidatiActions.getKandidati,
    getBirackaMjesta: birackaMjestaActions.getBirackaMjesta
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
