import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Container, CloseGroup, SpanClosed, CrossIcons, MensurationGroup, Mensuration, MensurationSpan, SvgBodyStyled } from './RightSideStyles';
import { HeaderGroup, TitleHeader } from '../../SizeFinderCompStyles';


@inject('ProductStore')
@observer
export default class RightSide extends Component {
    constructor() {
        super();
    }
    render() {
        const { sizeComponent } = this.props.ProductStore;
        return (
            <Container> {/* Right Side */}
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
            </Container>
        );
    }
};

/* Attention au body
<SvgBodyStyled srcProps={imgSrcHeight} />
*/
