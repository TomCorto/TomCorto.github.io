import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PrimaryButton from '../../../../commons/buttons/PrimaryButton';


const BlockText = styled.div`
  height: auto;
  width: 70%;
  margin: 15% 0 0 5%;
  padding: 1% 3% 5% 3%;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
    transition: background 100ms ease-in;
  }
`

const H4Styled = styled.h4`
  margin: 0;
  padding: 0;
  color: var(--color-primary-red);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  @media (min-width: 1024px) { font-size: 2.25rem; }
`

const H5 = H4Styled.withComponent('h5');
const H5Styled = H5.extend`
  color: var(--color-primary-white);
  @media (min-width: 1024px) { font-size: 1.25rem; }
`

const TextStyled = styled.p`
  color: var(--color-primary-white);
`

const ContainerStyled = styled.div`
  background-color: grey;
  display: block;
  margin: 0;
  padding: 0;
  width: auto;
  background: url(${props => props.propsBackgroundImg}) center center no-repeat;
  background-size: cover;
  @media (min-width: 1024px) { height: 418px; }
`

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../../../assets/img/', false, /\.(png|jpe?g|svg)$/));

const NewsComp = ( {propsObject} ) => (
  <ContainerStyled propsBackgroundImg={images[propsObject.backgroundImgProps]}>
    <BlockText>
      <H4Styled>{propsObject.h4Props}</H4Styled>
      <H5Styled>{propsObject.h5Props}</H5Styled>
      <TextStyled>{propsObject.textStyleProps}</TextStyled>
      <PrimaryButton bgcolorProps={"rgba(7,111,111, 0.5)"} propsBackgroundHover={"rgba(7,111,111,0.7)"} textProps={propsObject.textBtnProps} propsArrowBool={false} />
    </BlockText>
  </ContainerStyled>
);

NewsComp.propTypes = {
  propsObject: PropTypes.shape({
    backgroundImgProps: PropTypes.string.isRequired,
    h4Props: PropTypes.string.isRequired,
    h5Props: PropTypes.string.isRequired,
    textStyleProps: PropTypes.string.isRequired,
    textBtnProps: PropTypes.string.isRequired
  })
}
export default NewsComp;
