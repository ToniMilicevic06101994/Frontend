import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap';

class BrojGlasovaPoKandidatuDetails extends Component {
  render() {
    const { brojGlasovaPoKandidatu } = this.props;

    return (
      <div className="kandidat-details-margins">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Biračko mjesto </ControlLabel>
            <span> {brojGlasovaPoKandidatu.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Kandidat </ControlLabel>
            <span> {brojGlasovaPoKandidatu.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Broj glasova </ControlLabel>
            <span> {brojGlasovaPoKandidatu.id} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default BrojGlasovaPoKandidatuDetails;
