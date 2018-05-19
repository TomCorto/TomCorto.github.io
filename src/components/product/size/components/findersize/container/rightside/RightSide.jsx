import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';
import {
    Container,
    CloseGroup,
    MensurationGroup,
    Mensuration,
    MensurationSpan,
    SvgBodyStyled,
    HeaderGroupStyled,
    TitleHeaderStyled,
    SpanText,
    SpanIcon
} from './RightSideStyles';
import { HeaderGroup, TitleHeader } from '../../SizeFinderCompStyles';


@inject('ProductStore')
@observer
export default class RightSide extends Component {
    constructor() {
        super();
        this.closeFunc = this.closeFunc.bind(this);
    }

    closeFunc() {
        const { sizeComponent, displayProductSize } = this.props.ProductStore;
        displayProductSize();
    }

    render() {
        const { sizeComponent } = this.props.ProductStore;
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
            </Container>
        );
    }
};

/* Attention au body
<SvgBodyStyled srcProps={imgSrcHeight} />
*/
