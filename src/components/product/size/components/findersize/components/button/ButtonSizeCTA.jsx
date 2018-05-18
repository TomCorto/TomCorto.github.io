import React from 'react';
import PropTypes from 'prop-types';
import arrowsIcons from "../../../../../../../assets/icons/icons-buttons.png";
import { Container, ArrowImg } from "./ButtonSizeCTAStyles";

const ButtonSizeCTA = ({ textProps, arrowsBool }) => (
  <Container>
    {textProps} <ArrowImg src={arrowsIcons} />
  </Container>
);


ButtonSizeCTA.PropTypes = {
  textProps: PropTypes.string.isRequired
};

export default ButtonSizeCTA;
