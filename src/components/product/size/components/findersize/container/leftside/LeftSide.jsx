import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { HeaderGroup, TitleHeader } from '../../SizeFinderCompStyles';
import {
    Container,
    ReturnGroup,
    ReturnIcons,
    TextSub,
    FormGroup,
    RadioCompGenderStyled,
    InputGroupSetTextHeightStyled,
    InputGroupSetTextWeightStyled,
    InputGroupSetTextChestStyled,
    InputGroupSetTextLegsStyled,
    InputGroupSetTextShoulderStyled,
    InputGroupSetTextArmsStyled,
    ButtonStyled,
    ResultGroup,
    ImgProduct,
    ModelProduct,
    SpecsContainer,
    SpecsGroup,
    SpecsTitle,
    SpecsDescription,
    ReturnText,
    ButtonSizeCTAStyled
} from './LeftSideStyles';
import svgIconsReturn from '../../../../../../../assets/svg/icons-arrows-left-return.svg';
import StepOne from './steps/stepOne/StepOne';
import StepTwo from './steps/stepTwo/StepTwo';
import StepThree from './steps/stepThree/StepThree';


@inject('ProductStore')
@observer
export default class LeftSide extends Component {
    constructor() {
        super();
        this.checkOutFunc = this.checkOutFunc.bind(this);
        this.sizeStepOne = this.sizeStepOne.bind(this);
        this.backButtonFunc = this.backButtonFunc.bind(this);
        this.displayReturnText = this.displayReturnText.bind(this);
    }

    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
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
        alert("checkout");
    }


    render() {
        const images = this.importAll(require.context('../../../../../../../assets/img/', false, /\.(png|jpe?g|svg)$/));
        const { sizeComponent } = this.props.ProductStore;
        return (
            <Container>
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
                {sizeComponent.sizeFinder.rightSide.stepStatus.stepOne === true ? <StepOne /> : null}
                {sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo === true ? <StepTwo /> : null}
                {sizeComponent.sizeFinder.rightSide.stepStatus.stepThree === true ? <StepThree /> : null}
                {sizeComponent.sizeFinder.rightSide.stepStatus.stepThree === true ? /* Step 3 - Button */
                    <ButtonSizeCTAStyled textProps={"Commander"} colorProps={"#D0021B"} onClick={this.checkOutFunc} />
                    : <ButtonSizeCTAStyled textProps={sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo === false ? "Étape 1 / 2" : "Définir ma taille"} colorProps={"#D0021B"} onClick={this.sizeStepOne} />}
            </Container>
        );
    }
};
