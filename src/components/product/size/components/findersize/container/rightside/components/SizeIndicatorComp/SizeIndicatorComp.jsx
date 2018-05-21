import React from 'react';
import PropTypes from 'prop-types';
//import IndicatorComp from '../IndicatorComp/IndicatorComp';
import { Container, IndicatorCompStyled, Title } from './SizeIndicatorCompStyles';

const SizeIndicatorComp = ({ dimensionProps }) => (
    <Container>
      <IndicatorCompStyled bgColorProps={false} textProps={dimensionProps.indicator} />
      <Title>{dimensionProps.text}</Title>
    </Container>
);

export default SizeIndicatorComp;
