import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import DateHelper from '../../helpers/DateHelper';
import izborActions from '../../actions/izborActions';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NewIzbor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      izbor: {
        vrstaIzbora: '',
        nivoIzbora: '',
        datumOdrzavanja: null
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onDateChange  = this.onDateChange.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  resetState() {
    this.setState({
      izbor: {
        vrstaIzbora: this.props.vrstaIzbora || '',
        nivoIzbora: this.props.nivoIzbora || '',
        datumOdrzavanja: this.props.datumOdrzavanja || ''
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let payload = this.state.izbor;
    this.props.createIzbor(payload)
      .then(json => {
        this.props.history.push('/');
      });
  }

  onDateChange(date) {
    const formattedDate = DateHelper.formatWithTimezone(date);

    this.setState({
      izbor: {
        ...this.state.izbor,
        datumOdrzavanja: moment(formattedDate)
      }
    });
  }

  onCancelClick(e) {
    e.preventDefault();
    this.resetState();
  }

  onSelectChange = (e) => {
    this.setState({
      izbor: {
        ...this.state.izbor,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {

    return (
      <div>
        <ControlLabel>Novi izbor</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Vrsta izbora</ControlLabel>
              <FormControl
                onChange={this.onSelectChange}
                componentClass="select"
                name="vrstaIzbora"
                placeholder="izaberi"
              >
                <option value="">izaberi</option>
                <option value="1">Redovni</option>
                <option value="2">Prijevremeni</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Nivo izbora </ControlLabel>
              <FormControl
                onChange={this.onSelectChange}
                componentClass="select"
                name="nivoIzbora"
                placeholder="izaberi"
              >
                <option value="">izaberi</option>
                <option value="1">Opći</option>
                <option value="2">Lokalni</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Datum održavanja</ControlLabel>
              <DatePicker
                dateFormat="DD/MM/YYYY"
                onChange={this.onDateChange}
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
    izbor: state.izbor
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createIzbor: izborActions.createIzbor
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIzbor);
