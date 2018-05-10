import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, SelectorItems, SelectorTitle, SelectorIcon, ListCheckboxItems, HrStyled } from './BikeSelectorCompStyle';
import CheckboxItems from './CheckboxItems/CheckboxItems';
import iconOpen from '../../../../../assets/icons/icons-selector-open.png';
import iconClosed from '../../../../../assets/icons/icons-selector-closed.png';

@inject('BikeStore')
@observer
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

  toggleDropdown(indicator) {
    const { toggleSelectorCategories } = this.props.BikeStore;
    toggleSelectorCategories(indicator);
    //alert(indicator + "");
    /*this.setState({dropDownToggle: !this.state.dropDownToggle});*/
  }

  toggleCheck() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    const { filterUiRoad } = this.props.BikeStore;
    return (
      <Container>
          { filterUiRoad.map((el, index) =>
            <SelectorItems key={index}>
            <SelectorTitle key={index} onClick={this.toggleDropdown(index)}>
              {el.title} <SelectorIcon src={el.displayDropdown ? iconOpen : iconClosed} alt={"Not defined"} />
            </SelectorTitle>
            { el.displayDropdown ?
              <ListCheckboxItems>
                { el.list.map((el) =>
                  <CheckboxItems onClick={this.toggleCheck} checked={this.state.isChecked} textProps={el} />
                )}
              </ListCheckboxItems>
              : null
            }
            { index <= filterUiRoad.length  ? <HrStyled /> : null }
            </SelectorItems>
          )
        }
      </Container>
    )
  }
}
/*
<SelectorIcon src={this.state.dropDownToggle ? iconOpen : iconClosed} alt={"Not defined"} />

{this.state.dropDownToggle ?
  <ListCheckboxItems>
    <CheckboxItems onClick={this.toggleCheck} checked={this.state.isChecked} textProps={"Cross-Country"} />
    <CheckboxItems onClick={this.toggleCheck} checked={this.state.isChecked} textProps={"Cross-Country"} />
  </ListCheckboxItems>
: null }*/

/* Original
<SelectorTitle onClick={this.toggleDropdown}>
  Categories <SelectorIcon src={this.state.dropDownToggle ? iconOpen : iconClosed} alt={"Not defined"} />
</SelectorTitle>
{this.state.dropDownToggle ?
  <ListCheckboxItems>
    <CheckboxItems onClick={this.toggleCheck} checked={this.state.isChecked} textProps={"Cross-Country"} />
    <CheckboxItems onClick={this.toggleCheck} checked={this.state.isChecked} textProps={"Cross-Country"} />
  </ListCheckboxItems>
: null }
 */
