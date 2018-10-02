import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import kategorijeActions from '../../actions/kategorijeActions.js';
import politickiSubjektiActions from '../../actions/politickiSubjektiActions.js';
import birackaMjestaActions from '../../actions/birackaMjestaActions.js';
import brojGlasovaPoPolitickimSubjektimaActions from '../../actions/brojGlasovaPoPolitickimSubjektimaActions.js';

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
    this.props.getPolitickiSubjekti();
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

  createPolitickiSubjektOptions() {
    const politickiSubjekti = this.props.politickiSubjekti.payload;
    if(politickiSubjekti.length > 0){
      return politickiSubjekti.map((politickiSubjekt, index) => {
        return (<option value={politickiSubjekt.id} key={index}>{politickiSubjekt.naziv}</option>);
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
            <ControlLabel>Politički subjekt</ControlLabel>
            <FormControl
              onChange={this.props.onSelectChange}
              componentClass="select"
              placeholder="izaberi"
              name="kandidatId"
            >
              {this.createPolitickiSubjektOptions()}
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
            <option value="1">političkom subjektu</option>
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
    politickiSubjekti: state.politickiSubjekti,
    birackaMjesta: state.birackaMjesta
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getKategorije: kategorijeActions.getKategorije,
    getPolitickiSubjekti: politickiSubjektiActions.getPolitickiSubjekti,
    getBirackaMjesta: birackaMjestaActions.getBirackaMjesta
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
