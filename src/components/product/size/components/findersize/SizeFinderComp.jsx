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
  LeftSideStyled,
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
  }

  render() {
    const { sizeComponent } = this.props.ProductStore;
    return (<Container unmountOnExit in={sizeComponent.displaySize} timeout={500}>
      <LeftSideStyled />
      <RightSideStyled />
    </Container>
    );
  }
}
