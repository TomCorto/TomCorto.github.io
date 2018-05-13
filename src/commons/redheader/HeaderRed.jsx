import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderRedStyled = styled.h5`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 2.25rem;
  color: var(--color-primary-red);
`

const HeaderRed = ({ propsObject }) => (
  <HeaderRedStyled>
    {propsObject.text}
  </HeaderRedStyled>
);

HeaderRed.propTypes = {
  propsObject: PropTypes.shape({
  text: PropTypes.string.isRequired,
  })
}

export default HeaderRed;
