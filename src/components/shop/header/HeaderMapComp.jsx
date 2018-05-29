import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export const Title = styled.h2`
    margin: 10% 0 16px 5%;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    color: var(--color-primary-grey);
    width: 80%;
`

const HeaderMapComp = ({ textProps }) => (
    <Title>
        {textProps}
    </Title>
)

HeaderMapComp.propTypes = {
    textProps: PropTypes.string.isRequired
}

export default HeaderMapComp;
