import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Container,
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
  ButtonStyled,
  SpanClosed,
  HeaderResult,
  ResultGroup,
  LeftSide,
  RightSide,
  TitleHeader,
  TextSub,
  ButtonSizeCTAStyled,
  MensurationGroup,
  Mensuration,
  MensurationSpan,
  SvgBodyStyled,
  ImgProduct,
  ModelProduct,
  SpecsContainer,
  SpecsGroup,
  SpecsTitle,
  SpecsDescription,
  ReturnGroup,
  ReturnIcons,
  ReturnText,
  RightSideStyled
} from "./SizeFinderCompStyles";
import imgCross from '../../../../../assets/icons/icons-cross.png';
import imgSrcHeight from '../../../../../assets/img/sizefind-body_height.png';
import ButtonComp from '../button/ButtonComp';
import ButtonSizeCTA from './components/button/ButtonSizeCTA';
import svgIconsReturn from '../../../../../assets/svg/icons-arrows-left-return.svg';

@inject('ProductStore')
@observer
export default class SizeFinderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chkbox: false,
      value: ''
    }
    this.handleChangeChk = this.handleChangeChk.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.sizeFinderFunc = this.sizeFinderFunc.bind(this);
    this.sizeStepOne = this.sizeStepOne.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.checkOutFunc = this.checkOutFunc.bind(this);
    this.backButtonFunc = this.backButtonFunc.bind(this);
    this.displayReturnText = this.displayReturnText.bind(this);
  }

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
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


  sizeStepOne() { // @sizeStepOne Changing State form
    const { sizeComponent, statusStepFunc, displaySizeResultFunc, statusStepBackFunc } = this.props.ProductStore;
    if (sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo === true) { // Display State 2
      displaySizeResultFunc();
    } else { // Display State 1
      statusStepFunc();
    }
  }

  backButtonFunc() {
    const { sizeComponent, statusStepFunc, displaySizeResultFunc, statusStepBackFunc } = this.props.ProductStore;
    if (sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo === true) {
      statusStepFunc();
    } else if (sizeComponent.sizeFinder.rightSide.stepStatus.stepThree === true) {
      displaySizeResultFunc();
    }
  }

  displayReturnText() {
    const { displayReturnTextFunc } = this.props.ProductStore;
    displayReturnTextFunc();
  }

  checkOutFunc() {
    /*alert('Checkout');*/
  }

  onChangeHeight(event) {
    console.log(event.target.value);
  }

  render() {
    const images = this.importAll(require.context('../../../../../assets/img/', false, /\.(png|jpe?g|svg)$/));
    const { sizeComponent } = this.props.ProductStore;
    return <Container unmountOnExit in={sizeComponent.displaySize} timeout={500}>
      <LeftSide>
        <HeaderGroup>
          {sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo || sizeComponent.sizeFinder.rightSide.stepStatus.stepThree === true ?
            <ReturnGroup onClick={this.backButtonFunc} onMouseOver={this.displayReturnText} onMouseLeave={this.displayReturnText}>
              <ReturnIcons src={svgIconsReturn} alt="" />
              {sizeComponent.sizeFinder.leftSide.displayReturnButton.displayHover ? <ReturnText>Retour</ReturnText> : null}
            </ReturnGroup>
            : <ReturnGroup>
            </ReturnGroup>
          }
          <TitleHeader colorProps={"#FF0000"}>
            {sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo === true ?
              sizeComponent.sizeFinder.leftSide.header.title[1]
              : sizeComponent.sizeFinder.leftSide.header.title[0]}</TitleHeader>
          {sizeComponent.sizeFinder.rightSide.stepStatus.stepOne === true
            ? <TextSub>{sizeComponent.sizeFinder.leftSide.header.subText}</TextSub>
            : null}
        </HeaderGroup>
        {sizeComponent.sizeFinder.rightSide.stepStatus.stepOne === true
          ? <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
            <RadioCompGenderStyled labelProps={sizeComponent.sizeFinder.rightSide.measureMetrics.mensuration[0].span} />
            <InputGroupSetTextHeightStyled labelProps={"Taille"} placeholderProps={"150 - 200"} onChange={this.onChangeHeight} value={this.state.value} />
            <InputGroupSetTextWeightStyled labelProps={"Poids"} placeholderProps={"45 - 100"} />
          </FormGroup>
          : null}
        {sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo === true ? /* Step 1 */
          <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
            <InputGroupSetTextChestStyled labelProps={"Longueur du torse"} placeholderProps={"50 - 70"} />
            <InputGroupSetTextLegsStyled labelProps={"Entre-jambe"} placeholderProps={"50 - 70"} />
            <InputGroupSetTextShoulderStyled labelProps={"Largeur d'épaules"} placeholderProps={"50 - 70"} />
            <InputGroupSetTextArmsStyled labelProps={"Longueur de bras"} placeholderProps={"50 - 70"} />
          </FormGroup>
          : null}
        {sizeComponent.sizeFinder.rightSide.stepStatus.stepThree === true ? /* Step 2 */
          <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
            <ImgProduct src={images['product-Cento10NDR-R1.jpg']} />
            <ModelProduct>Cento 10 NDR</ModelProduct>
            <SpecsContainer>
              {sizeComponent.sizeFinder.rightSide.measureResult.map((el, index) =>
                <SpecsGroup key={index}>
                  <SpecsTitle>{el.title}</SpecsTitle>
                  <SpecsDescription>{el.specs}</SpecsDescription>
                </SpecsGroup>
              )}
            </SpecsContainer>
          </FormGroup>
          : null}
        {sizeComponent.sizeFinder.rightSide.stepStatus.stepThree === true ? /* Step 3 - Button */
          <ButtonSizeCTAStyled textProps={"Commander"} colorProps={"#D0021B"} onClick={this.checkOutFunc} />
          : <ButtonSizeCTAStyled textProps={sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo === false ? "Étape 1 / 2" : "Définir ma taille"} colorProps={"#D0021B"} onClick={this.sizeStepOne} />}
      </LeftSide>
      <RightSideStyled />
    </Container>;
  }
}

/*
 <RightSide>
<HeaderGroup>
  <TitleHeader colorProps={"#FFFFFF"}>Mesures</TitleHeader>
  <CloseGroup>
    Fermer
            </CloseGroup>
</HeaderGroup>
  <MensurationGroup>
    {sizeComponent.sizeFinder.rightSide.measureMetrics.mensuration.map((el, index) =>
      <Mensuration>
        <MensurationSpan>{el.span}</MensurationSpan> {el.text}
      </Mensuration>
    )}
  </MensurationGroup>
  <SvgBodyStyled srcProps={imgSrcHeight} />
      </RightSide >
      */
