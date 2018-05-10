import React from 'react';
import PropTypes from 'prop-types';
import { Container, TitleProduct, ImgContainer, ImgProduct, PriceProduct, ColorGroup, ColorItem } from './BikeProductThumbCompStyle';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../../../../assets/img/products/', false, /\.(png|jpe?g|svg)$/));

const BikeProductThumbComp = ({propsObject, onMouseEnter}) => (
  <Container>
    <ImgContainer in={onMouseEnter}>
      <ImgProduct src={images[propsObject.imgSrc]} alt={propsObject.imgAlt} />
    </ImgContainer>
    <ColorGroup>
      {propsObject.color.map((el, index) => <ColorItem key={index} backgroundColor={el}/>) }
    </ColorGroup>
    <TitleProduct unmountOnExit in={onMouseEnter} timeout={1000}>{propsObject.Title}</TitleProduct>
    <PriceProduct>{propsObject.Price}</PriceProduct>
  </Container>
);

BikeProductThumbComp.propTypes = {
  propsObject: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired
  })
}

export default BikeProductThumbComp;
