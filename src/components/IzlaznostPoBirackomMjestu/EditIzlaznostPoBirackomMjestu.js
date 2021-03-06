import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import izlaznostPoBirackomMjestuActions from '../../actions/izlaznostPoBirackomMjestuActions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EditIzlaznostPoBirackomMjestu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      izlaznostPoBirackomMjestu: {
        birackoMjesto: '',
        brojGlasaca: '',
        izasloGlasaca: ''
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  componentWillMount = () => {
    this.getIzlaznostDetails();
  };

  getIzlaznostDetails = () => {
    const izlaznostId = this.props.match.params.id;
    this.props.getIzlaznostPoBirackomMjestu(izlaznostId)
      .then(json => {
        this.resetState();
      })
  };

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
    this.props.updateIzlaznostPoBirackomMjestu(payload)
      .then(json => {
        this.props.history.push('/izlaznost');
      });
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
        <Link to={'/izlaznost'}>
          <Button
            className="link"
            bsStyle="link"
            > Back to list
          </Button>
        </Link>
        <ControlLabel>Unesi izlaznost po biračkom mjestu</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Biračko mjesto</ControlLabel>
              <FormControl
                className=""
                name="birackoMjesto"
                value={izlaznostPoBirackomMjestu.birackoMjesto}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Broj glasača</ControlLabel>
              <FormControl
                name="brojGlasaca"
                value={izlaznostPoBirackomMjestu.brojGlasaca}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Izašlo glasača</ControlLabel>
              <FormControl
                name="izasloGlasaca"
                value={izlaznostPoBirackomMjestu.izasloGlasaca}
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
    izlaznostPoBirackomMjestu: state.izlaznostPoBirackomMjestu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getIzlaznostPoBirackomMjestu: izlaznostPoBirackomMjestuActions.getIzlaznostPoBirackomMjestu,
    updateIzlaznostPoBirackomMjestu: izlaznostPoBirackomMjestuActions.updateIzlaznostPoBirackomMjestu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIzlaznostPoBirackomMjestu);
