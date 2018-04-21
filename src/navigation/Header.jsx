import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Header Group'
    }
  }

  render() {
    return (
      <div>
        {this.state.msg} <br/>
        <NavLink to={"/home"}>Home</NavLink> {" "}
        <NavLink to={"/bikes"}>Vélos</NavLink> {" "}
        <NavLink to={"/equipment"}>Equipements</NavLink> {" "}
        <NavLink to={"/accessories"}>Accessoires</NavLink> {" "}
        <NavLink to={"/shop"}>Magasins</NavLink> {" "}
        <NavLink to={"/checkout"}>Panier</NavLink>
      </div>
    )
  }
}
