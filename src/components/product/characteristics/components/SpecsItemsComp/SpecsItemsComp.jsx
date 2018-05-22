import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { SpecsItems, ImgItems, SpecsGroup, SpecsSpan, SpecsTitle, SpecsSub } from './SpecsItemsCompStyles';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../../../../assets/icons', false, /\.(png|jpe?g|svg)$/));

const SpecsItemsComp = ({ propsObject }) => (
  <SpecsItems>
    <ImgItems src={images[propsObject.imgSrc]} alt={propsObject.imgAlt} />
    <SpecsGroup>
      <SpecsTitle>
        <SpecsSpan>{propsObject.specsSpan}</SpecsSpan>&ensp;{propsObject.specsTitleText}</SpecsTitle>
      { propsObject.subBool ?
      <SpecsSub>
        <SpecsSpan>{propsObject.subSpan}</SpecsSpan>&ensp;{propsObject.subText}
      </SpecsSub>
      : null }
    </SpecsGroup>
  </SpecsItems>
)

export default SpecsItemsComp;
