import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap';

class IzlaznostPoBirackomMjestuDetails extends Component {
  render() {
    const { izlaznostPoBirackomMjestu } = this.props;

    return (
      <div className="kandidat-details-margins">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Biračko mjesto </ControlLabel>
            <span> {izlaznostPoBirackomMjestu.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Broj glasača </ControlLabel>
            <span> {izlaznostPoBirackomMjestu.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Izašlo glasača </ControlLabel>
            <span> {izlaznostPoBirackomMjestu.id} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default IzlaznostPoBirackomMjestuDetails;
