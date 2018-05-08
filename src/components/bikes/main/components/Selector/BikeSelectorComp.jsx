import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import './styles.css';
import { Container, SelectorItems, SelectorTitle, SelectorIcon, SelectorItemsBg, CheckboxStyled, LabelStyled, Checkmark } from './BikeSelectorCompStyle';
import CheckboxItems from './CheckboxItems/CheckboxItems';
import iconOpen from '../../../../../assets/icons/icons-selector-open.png';
import iconClosed from '../../../../../assets/icons/icons-selector-closed.png';


export default class BikeSelectorComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownToggle: true,
      isChecked: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleDropdown() {
    this.setState({dropDownToggle: !this.state.dropDownToggle});
  }

  toggleCheck() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <Container>
        <SelectorItems>
          <SelectorTitle onClick={this.toggleDropdown}>
            Categories <SelectorIcon src={this.state.dropDownToggle ? iconOpen : iconClosed} alt={"Not defined"} />
          </SelectorTitle>
          {this.state.dropDownToggle ?
            <div>
              <CheckboxItems onClick={this.toggleCheck} checked={this.state.isChecked} textProps={"Cross-Country"} />
              <CheckboxItems onClick={this.toggleCheck} checked={this.state.isChecked} textProps={"Cross-Country"} />
              <CheckboxItems onClick={this.toggleCheck} checked={false} textProps={"Cross-Country"} />
              <CheckboxItems onClick={this.toggleCheck} checked={false} textProps={"Cross-Country"} />
            </div>
          : null }
        </SelectorItems>
      </Container>
    )
  }
}

/* Orignal and works
<div className="SelectorItemBg">
    <span className="text-styles" onClick={this.toggleCheck}>
      <input type="checkbox" checked={this.state.isChecked} />
      <span></span>
      Cross-Country
    </span>
</div>
 */

/*
<LabelStyled onClick={this.toggleCheck}>Cross-Country
  <CheckboxStyled type="checkbox" checked={this.state.isChecked} />
  <Checkmark>Hello</Checkmark>
</LabelStyled>
*/

/*
<label className="container" onClick={this.toggleCheck}>
  <input type="checkbox" checked={this.state.isChecked} />Cross-Country
  <span class="checkmark"></span>
</label>
 */
