import React, { Component } from 'react';

export default class EquipementsPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Page Equipements'
    }
  }

  render() {
    return (
      <div>{this.state.msg}</div>
    )
  }
}
