import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import moment from 'moment';
import DateHelper from '../../helpers/DateHelper';
import izborActions from '../../actions/izborActions';
import {  withRouter} from 'react-router-dom';

class NewIzbor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      izbor: {
        vrstaIzbora: props.vrstaIzbora || '',
        nivoIzbora: props.nivoIzbora || '',
        datumOdrzavanja: null
      }
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onDateChange  = this.onDateChange.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
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

    /*if (this.props.accountId){
      payload.account_id = this.props.accountId;
    }*/
    izborActions.createIzbor(payload);
    this.props.history.push('/')
  }

  onChange(e) {
    this.setState({
      izbor: {
        ...this.state.izbor,
        [e.target.name]: e.target.value
      }
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

/*  renderSelectListOptions = () => {
    const options = organizationHelper.getDropdownList(this.props.stagesMapping);

    return options.map((option, index) => {
      return (
        <option key={index} value={option.label}>{option.label}</option>
      )
    })
  };*/

  render() {
    const { izbor } = this.state;

    return (
      <div>
        <ControlLabel>Novi izbor</ControlLabel>
        <form onSubmit={this.onSubmit}>
          <div className="submit-form">
            <FormGroup className="form-group-left">
              <ControlLabel>Vrsta izbora</ControlLabel>
              <FormControl
                name="vrstaIzbora"
                value={izbor.vrstaIzbora}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Nivo izbora </ControlLabel>
              <FormControl
                name="nivoIzbora"
                value={izbor.nivoIzbora}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Datum održavanja</ControlLabel>

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

export default NewIzbor;
