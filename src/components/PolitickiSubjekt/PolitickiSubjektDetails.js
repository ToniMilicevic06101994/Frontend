import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap';

class PolitickiSubjektDetails extends Component {
  render() {
    const { politickiSubjekt } = this.props;

    return (
      <div className="kandidat-details-margins">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Sifra </ControlLabel>
            <span> {politickiSubjekt.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Naziv </ControlLabel>
            <span> {politickiSubjekt.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Grad </ControlLabel>
            <span> {politickiSubjekt.id} </span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Adresa </ControlLabel>
            <span> {politickiSubjekt.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Telefon </ControlLabel>
            <span> {politickiSubjekt.id} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PolitickiSubjektDetails;
