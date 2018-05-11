import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container, BlockImage, H2Styled, H5Styled, TextStyled } from './CategoryCompStyles';


const Link = ({ className, children, linkProps }) => (
  <NavLink to={linkProps} className={className}>
    {children}
  </NavLink>
)

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
`;


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../../../assets/img/', false, /\.(png|jpe?g|svg)$/));

const CategoryComp = ({objectProps}) => (
  <StyledLink linkProps={objectProps.linkProps}>
      <BlockImage propsBackgroundImg={images[objectProps.backgroundImgProps]}>
        <H2Styled>{objectProps.h2Props}</H2Styled>
      </BlockImage>
      <Container>
        <H5Styled>{objectProps.h5Props}</H5Styled>
        <TextStyled>{objectProps.textProps}</TextStyled>
      </Container>
  </StyledLink>
);

CategoryComp.propTypes = {
    objectProps: PropTypes.shape({
    backgroundImgProps: PropTypes.string.isRequired,
    linkProps: PropTypes.string.isRequired,
    h2Props: PropTypes.string.isRequired,
    h5Props: PropTypes.string.isRequired,
    textProps: PropTypes.string.isRequired
  })
}

export default CategoryComp;
