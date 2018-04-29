import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import imgMtb from '../../../../assets/img/landing_category-mtb.jpg'


const Link = ({ className, children, linkProps }) => (
  <NavLink to={linkProps} className={className}>
    {children}
  </NavLink>
)

const StyledLink = styled(Link)`
  color: purple;
  text-decoration: none;
  margin: 0;
  padding: 0;
`;


const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 768px) { display: none; }
`

const BlockImage = styled.div`
  background: url(${props => props.propsBackgroundImg}) center center no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 32vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const H2Styled = styled.h2`
  color: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  @media (max-width: 480px) { font-size: 3rem; }
  @media (min-width: 480px) { font-size: 3.5rem; }
  @media (min-width: 768px) { font-size: 2.2rem; }
  @media (min-width: 1024px) { font-size: 2.2rem; }
`
const H5Styled = styled.h5`
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-red);
  @media (max-width: 480px) { display: none; }
  @media (min-width: 768px) { margin: 1em 0.75em 0 0.5em; font-size: 1.25rem; }
  @media (min-width: 1024px) { margin: 1em 0.75em 0 0.5em; font-size: 1.4rem; }
`
const TextStyled = styled.p`
  display: block;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-black);
  @media (min-width: 768px) { margin: 0.2em 0.75em 0 0.5em; font-size: 1rem; }
  @media (min-width: 1024px) { margin: 0.2em 0.75em 0 0.5em; font-size: 1rem; }
`

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
