import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    Container,
    CloseGroup,
    MensurationGroup,
    Mensuration,
    MensurationSpan,
    HeaderGroupStyled,
    TitleHeaderStyled,
    SpanText,
    SpanIcon,
    SizeChartGroup,
    MeasureChartGroup,
    SvgGroup
} from './RightSideStyles';
import SvgBodyComp from './components/SvgBodyComp/SvgBodyComp';
import SvgLinesComp from './components/SvgLines/SvgLinesComp';
import SizeIndicatorComp from './components/SizeIndicatorComp/SizeIndicatorComp';


@inject('ProductStore', 'ProductUI')
@observer
export default class RightSide extends Component {
    constructor() {
        super();
        this.closeFunc = this.closeFunc.bind(this);
    }

    closeFunc() {
        const { displayProductSize } = this.props.ProductStore;
        displayProductSize();
    }

    render() {
        const { sizeComponent } = this.props.ProductStore;
        const { bodySvgIndicator } = this.props.ProductUI;
        return (
            <Container> {/* Right Side */}
                <HeaderGroupStyled>
                    <TitleHeaderStyled colorProps={"#FFFFFF"}>Mesures</TitleHeaderStyled>
                    <CloseGroup colorProps={true} onClick={this.closeFunc}>
                        <SpanText>Fermer</SpanText>
                        <SpanIcon></SpanIcon>
                    </CloseGroup>
                </HeaderGroupStyled>
                <MensurationGroup>
                    {sizeComponent.sizeFinder.rightSide.measureMetrics.mensuration.map((el, index) =>
                        <Mensuration>
                            <MensurationSpan>{el.span}</MensurationSpan> {el.text}
                        </Mensuration>
                    )}
                </MensurationGroup>
                <SizeChartGroup>
                    <MeasureChartGroup>
                        {bodySvgIndicator.map((el, index) =>
                            <SizeIndicatorComp key={index} dimensionProps={el} />
                        )}
                    </MeasureChartGroup>
                    <SvgGroup>
                        <SvgLinesComp marginLeft={"170px"} />
                        <SvgBodyComp />
                    </SvgGroup>
                </SizeChartGroup>
            </Container>
        );
    }
};
