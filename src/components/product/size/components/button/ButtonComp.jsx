import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './ButtonCompStyles';

const ButtonComp = ({ propsText, onClick, colorProps }) => (
  <Container onClick={onClick} colorProps={colorProps} >
    {propsText}
  </Container>
);

ButtonComp.propTypes = {
  propsText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ButtonComp;
