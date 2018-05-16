import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Container,
  HeaderRed,
  FormGroup,
  InputGroupSetTextHeightStyled,
  InputGroupSetTextWeightStyled,
  RadioCompGenderStyled,
  InputGroupSetTextChestStyled,
  InputGroupSetTextLegsStyled,
  InputGroupSetTextShoulderStyled,
  InputGroupSetTextArmsStyled,
  HeaderGroup,
  CloseGroup,
  CrossIcons,
  FormSubGroup,
  ButtonStyled
} from "./SizeFinderCompStyles";

import imgCross from '../../../../../assets/icons/icons-cross.png';
import ButtonComp from '../button/ButtonComp';


@inject('ProductStore')
@observer
export default class SizeFinderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chkbox: false
    }
		this.handleChangeChk = this.handleChangeChk.bind(this);
		this.closeWindow = this.closeWindow.bind(this);
		this.sizeFinderFunc = this.sizeFinderFunc.bind(this);
  }

  handleChangeChk() {
    console.log("test");
	}

	closeWindow() {
	  const { displayProductSize } = this.props.ProductStore;
  	displayProductSize();
	}

	sizeFinderFunc() {
		alert('Your size was M');
	}

  render() {
		const { sizeComponent } = this.props.ProductStore;
		return (
		<Container in={sizeComponent.displaySize}>
      <HeaderGroup>
        <HeaderRed>Trouver votre taille</HeaderRed>
        <CloseGroup onClick={this.closeWindow}>
          <span>Fermer</span>
          <CrossIcons src={imgCross} alt={"Icons"} />
        </CloseGroup>
      </HeaderGroup>
      <FormGroup>
        <RadioCompGenderStyled labelProps={"Genre"} />
        <FormSubGroup>
          <InputGroupSetTextHeightStyled labelProps={"Taille"} placeholderProps={"150 - 200"} />
          <InputGroupSetTextWeightStyled labelProps={"Poids"} placeholderProps={"45 - 100"} />
          <InputGroupSetTextChestStyled labelProps={"Longueur du torse"} placeholderProps={"50 - 70"} />
          <InputGroupSetTextLegsStyled labelProps={"Entre-jambe"} placeholderProps={"50 - 70"} />
          <InputGroupSetTextShoulderStyled labelProps={"Largeur d'épaules"} placeholderProps={"50 - 70"} />
          <InputGroupSetTextArmsStyled labelProps={"Longueur de bras"} placeholderProps={"50 - 70"} />
        </FormSubGroup>
      </FormGroup>
      <ButtonStyled propsText={"Trouver votre vélo"} onClick={this.sizeFinderFunc} colorProps={false} />
		</Container>
		)
  }
}
