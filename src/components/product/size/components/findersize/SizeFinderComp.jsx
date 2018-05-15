import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, HeaderRed, FormGroup, Label, Input, Span, InputGroup, InputGroupset, InputGroupSetTextHeightStyled, InputGroupSetTextWeightStyled, RadioCompGenderStyled, InputGroupSetTextChestStyled, InputGroupSetTextLegsStyled, InputGroupSetTextShoulderStyled, InputGroupSetTextArmsStyled } from './SizeFinderCompStyles';
import InputGroupSetText from './components/input/InputGroupSetText';
/*import CheckboxComp from './components/checkbox/CheckboxComp';*/
import RadioComp from './components/radiocomp/RadioComp';


@inject('ProductStore')
@observer
export default class SizeFinderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chkbox: false
    }
    this.handleChangeChk = this.handleChangeChk.bind(this);
  }

  handleChangeChk() {
    console.log("test");
  }

  render() {
    return (
      <Container>
       <HeaderRed>Trouver votre taille</HeaderRed>
        <FormGroup>
          <RadioCompGenderStyled labelProps={"Genre"} />
          <InputGroupSetTextHeightStyled labelProps={"Taille"} placeholderProps={"150 - 200"} />
          <InputGroupSetTextWeightStyled labelProps={"Poids"} placeholderProps={"45 - 100"} />
          <InputGroupSetTextChestStyled labelProps={"Longueur du torse"} placeholderProps={"50 - 70"} />
          <InputGroupSetTextLegsStyled labelProps={"Entre-jambe"} placeholderProps={"50 - 70"} />
          <InputGroupSetTextShoulderStyled labelProps={"Largeur d'épaules"} placeholderProps={"50 - 70"} />
          <InputGroupSetTextArmsStyled labelProps={"Longueur de bras"} placeholderProps={"50 - 70"} />
        </FormGroup>
      </Container>
    )
  }
}
