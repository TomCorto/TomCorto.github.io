import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Container, RadioCompGenderStyled, InputGroupSetTextHeightStyled, InputGroupSetTextWeightStyled } from './StepOneStyles';
import { FormGroup } from '../../LeftSideStyles';

@inject('ProductStore')
@observer
export default class StepOne extends Component {
    render() {
        const { sizeComponent } = this.props.ProductStore;
        return (
            <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
                <RadioCompGenderStyled
                    labelProps={sizeComponent.sizeFinder.rightSide.measureMetrics.mensuration[0].span}
                />
                <InputGroupSetTextHeightStyled
                    labelProps={"Taille"}
                    placeholderProps={"150 - 200"}
                />
                <InputGroupSetTextWeightStyled
                    labelProps={"Poids"}
                    placeholderProps={"45 - 100"}
                />
            </FormGroup>
        );
    }
};
