import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { SvgContainer } from './SvgLinesCompStyles'

@inject('ProductUI')
@observer
export default class SvgLinesComp extends Component {
    render() {
        const { SvgValueObj, displaySvg, marginLeft } = this.props.ProductUI;
        return (
            <SvgContainer width="146px" height={SvgValueObj[displaySvg].height} viewBox={SvgValueObj[displaySvg].viewbox}  marginLeft={marginLeft} version="1.1">
                <g id="SVG/Lines" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="measure" fill="#FFFFFF">
                        <polygon id="Fill-6" points={SvgValueObj[displaySvg].polygonOne}></polygon>
                        <polygon id="Fill-7" points={SvgValueObj[displaySvg].polygonTwo}></polygon>
                        <polygon id="Fill-8" points={SvgValueObj[displaySvg].polygonThree}></polygon>
                    </g>
                </g>
            </SvgContainer>
        );
    }
};
