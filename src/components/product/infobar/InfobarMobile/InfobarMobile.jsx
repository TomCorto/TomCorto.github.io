import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from './InfobarMobileStyles';
import ProductPriceComp from '../components/ProductPrice/ProductPriceComp';
import ColorsComp from '../components/ColorsComp/ColorsComp';

@inject('ProductStore')
@observer
export default class InfobarMobile extends Component {
    render() {
        const { sizeComponent } = this.props.ProductStore;
        return (
            <Container>
                <ProductPriceComp objectProps={sizeComponent.infoProduct} />
                <ColorsComp />
            </Container>
        );
    }
};
