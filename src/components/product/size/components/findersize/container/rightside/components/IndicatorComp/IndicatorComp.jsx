import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './IndicatorCompStyles';

const IndicatorComp = ({ bgColorProps, textProps }) => (
    <Container bgColorProps={true}>
        {textProps}
    </Container>
);


export default IndicatorComp;
