import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextGroup } from "./BikeTextCompStyles.js";

const BikeTextComp = ({textProps}) => (
  <Container>
    <TextGroup>{textProps.text}</TextGroup>
  </Container>
);

BikeTextComp.propTypes = {
  textProps: PropTypes.string.isRequired
};

export default BikeTextComp;
