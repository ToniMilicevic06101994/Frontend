import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap';

class KandidatDetails extends Component {
  render() {
    const { kandidat } = this.props;

    return (
      <div className="kandidat-details-margins">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Ime </ControlLabel>
            <span> {kandidat.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Prezime </ControlLabel>
            <span> {kandidat.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> JMBG </ControlLabel>
            <span> {kandidat.id} </span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Adresa </ControlLabel>
            <span> {kandidat.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Email </ControlLabel>
            <span> {kandidat.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Telefon </ControlLabel>
            <span> {kandidat.id} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default KandidatDetails;
