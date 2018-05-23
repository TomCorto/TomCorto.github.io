import React from 'react';
import PropTypes from 'prop-types';
import { Container, ModelStyled, PriceStyled } from './ProductPriceCompStyles';


const ProductPriceComp = ({ objectProps }) => (
    <Container>
        <ModelStyled>{objectProps.modelText}</ModelStyled>
        <PriceStyled>{objectProps.priceText}</PriceStyled>
    </Container>
);

ProductPriceComp.propTypes = {
    objectProps: PropTypes.shape({
        modelText: PropTypes.string.isRequired,
        priceText: PropTypes.string.isRequired
    })
}

export default ProductPriceComp;
