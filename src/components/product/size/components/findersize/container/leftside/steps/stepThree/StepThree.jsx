import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FormGroup } from '../../LeftSideStyles';
import { ImgProduct, ModelProduct, SpecsContainer, SpecsGroup, SpecsTitle, SpecsDescription } from './StepThreeStyles';


@inject('ProductStore')
@observer
export default class StepThree extends Component {
    constructor() {
        super();
    }

    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    render() {
        const images = this.importAll(require.context('../../../../../../../../../assets/img/', false, /\.(png|jpe?g|svg)$/));
        const { sizeComponent } = this.props.ProductStore;
        return (
            <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
                <ImgProduct src={images['product-Cento10NDR-R1.jpg']} />
                <ModelProduct>Cento 10 NDR</ModelProduct>
                <SpecsContainer>
                    {sizeComponent.sizeFinder.rightSide.measureResult.map((el, index) =>
                        <SpecsGroup key={index}>
                            <SpecsTitle>{el.title}</SpecsTitle>
                            <SpecsDescription>{el.specs}</SpecsDescription>
                        </SpecsGroup>
                    )}
                </SpecsContainer>
            </FormGroup>
        );
    }
};
