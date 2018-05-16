import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './ButtonCompStyles';

const ButtonComp = ({ propsText, onClick, colorProps, animLaunch }) => (
	<Container unmountOnExit in={!animLaunch} onClick={onClick} colorProps={colorProps}>
    {propsText}
  </Container>
);

ButtonComp.propTypes = {
  propsText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ButtonComp;
