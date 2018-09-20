import React, { Component } from 'react';

class ColumnsTitle extends Component {
  renderColumns = () => {
    return this.props.columns.map((item) => {
      return (
        <th key={item} className="text-uppercase"> {item} </th>
      );
    });
  };

  render() {
    return (
      <thead>
        <tr>
          {this.renderColumns()}
        </tr>
      </thead>
    )
  }
}

export default ColumnsTitle;
