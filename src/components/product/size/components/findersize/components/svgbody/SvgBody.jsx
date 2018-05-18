import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ImgBody } from './SvgBodyStyles';


const SvgBody = ({ srcProps }) => (
    <Container>
        <ImgBody src={srcProps} />
    </Container>
);

export default SvgBody;
