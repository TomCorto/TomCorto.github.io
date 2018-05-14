import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './ButtonCompStyles';

const ButtonComp = ({ propsText, onClick }) => (
  <Container onClick={onClick} >
    {propsText}
  </Container>
);

ButtonComp.propTypes = {
  propsText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ButtonComp;
