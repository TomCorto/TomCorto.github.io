import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SvgContainer = styled.svg`
    /*@media all and (max-width: 480px) { margin-right: 0 0 0.5em 0; }*/
    @media all and (max-width: 768px) { margin: 0 0.5em 0 0; }
    @media all and (min-width: 768px) { margin: 0 0.5em 0 0; }
    @media all and (min-width: 1024px) { margin: 0 1em 0 0; }
`

const MarkerComp = ({ textProps, colorProps }) => (
    <SvgContainer width="32px" height="46px" viewBox="0 0 32 46" version="1.1">
        <g id="SVG/Marker" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="placeholder">
                <path d="M27.3160523,4.71870263 C24.2938637,1.67595011 20.2754042,0 16.001619,0 C11.7269994,0 7.70937432,1.67595011 4.68718571,4.71870263 C-0.905782317,10.3488869 -1.60083563,20.9422357 3.1819322,27.3604105 L16.001619,46 L28.8021147,27.3864529 C33.6040737,20.9422357 32.9090204,10.3488869 27.3160523,4.71870263 Z" id="Shape" fill={colorProps} fill-rule="nonzero"></path>
                <text id="A" font-family="SourceSansPro-Semibold, Source Sans Pro" font-size="18" font-weight="500" fill="#FFFFFF">
                    <tspan x="11.478" y="24">{textProps}</tspan>
                </text>
            </g>
        </g>
    </SvgContainer>
);

MarkerComp.propTypes = {
    textProps: PropTypes.string.isRequired,
    colorProps: PropTypes.string.isRequired
}

export default MarkerComp
