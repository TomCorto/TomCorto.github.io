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
  ButtonStyled,
  SpanClosed,
  HeaderResult,
  ResultGroup,
  LeftSide,
  RightSide,
  TitleHeader,
  TextSub,
  ButtonSizeCTAStyled
} from "./SizeFinderCompStyles";

import imgCross from '../../../../../assets/icons/icons-cross.png';
import ButtonComp from '../button/ButtonComp';
import ButtonSizeCTA from './components/button/ButtonSizeCTA';


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
		const { displaySizeResultFunc, sizeComponent } = this.props.ProductStore;
		displaySizeResultFunc();
	}

  render() {
		const { sizeComponent } = this.props.ProductStore;
		return <Container unmountOnExit in={sizeComponent.displaySize} timeout={500}>
        <LeftSide>
          <HeaderGroup>
            <TitleHeader colorProps={"#FF0000"}>
              Guide Taille Cadre
            </TitleHeader>
            <TextSub>
              Notre système de calcul de mensuration permet de mesurer la
              taille de vélo idéale pour vous.
            </TextSub>
          </HeaderGroup>
          <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
            <RadioCompGenderStyled labelProps={"Genre"} />
            <InputGroupSetTextHeightStyled labelProps={"Taille"} placeholderProps={"150 - 200"} />
            <InputGroupSetTextWeightStyled labelProps={"Poids"} placeholderProps={"45 - 100"} />
          </FormGroup>
					<ButtonSizeCTAStyled textProps={"Étape 1 / 2"} colorProps={"#D0021B"} />
        </LeftSide>
        <RightSide>b</RightSide>
      </Container>;
  }
}


/*
						<HeaderGroup>
						<TitleHeader>Guide Taille Cadre</TitleHeader>
						<TextSub>
							Notre système de calcul de mensuration permet de mesurer la
							taille de vélo idéale pour vous.
							</TextSub>
					</HeaderGroup>
*/

/* Formulaire Première partie
<HeaderGroup>
          <HeaderRed colorProps={sizeComponent.displaySizeColorsBackground}>
            Trouvez votre taille
          </HeaderRed>
          <CloseGroup onClick={this.closeWindow}>
            <SpanClosed colorProps={sizeComponent.displaySizeColorsBackground}>Fermer
            </SpanClosed>
            <CrossIcons src={imgCross} alt={"Icons"} />
          </CloseGroup>
        </HeaderGroup>
        <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
          <RadioCompGenderStyled labelProps={"Genre"} />
          <FormSubGroup>
            <InputGroupSetTextHeightStyled labelProps={"Taille"} placeholderProps={"150 - 200"} />
            <InputGroupSetTextWeightStyled labelProps={"Poids"} placeholderProps={"45 - 100"} />
          </FormSubGroup>
        </FormGroup>
				<ResultGroup>
        	<HeaderResult unmountOnExit in={!sizeComponent.displaySizeResult} timeout={300}>Taille M</HeaderResult>
				</ResultGroup>
        <ButtonStyled propsText={sizeComponent.displaySizeResult ? "Trouver votre vélo" : "Commander"} onClick={this.sizeFinderFunc} colorProps={!sizeComponent.displaySizeColorsBackground} />
*/
/* Formuaire Étape 2°
         <InputGroupSetTextChestStyled labelProps={"Longueur du torse"} placeholderProps={"50 - 70"} />
            <InputGroupSetTextLegsStyled labelProps={"Entre-jambe"} placeholderProps={"50 - 70"} />
            <InputGroupSetTextShoulderStyled labelProps={"Largeur d'épaules"} placeholderProps={"50 - 70"} />
						<InputGroupSetTextArmsStyled labelProps={"Longueur de bras"} placeholderProps={"50 - 70"} />
*/
