import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap';

class BrojGlasovaPoPolitickomSubjektuDetails extends Component {
  render() {
    const { brojGlasovaPoPolitickomSubjektu } = this.props;

    return (
      <div className="kandidat-details-margins">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Biračko mjesto </ControlLabel>
            <span> {brojGlasovaPoPolitickomSubjektu.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Politički subjekat </ControlLabel>
            <span> {brojGlasovaPoPolitickomSubjektu.id} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Broj glasova </ControlLabel>
            <span> {brojGlasovaPoPolitickomSubjektu.id} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default BrojGlasovaPoPolitickomSubjektuDetails;
