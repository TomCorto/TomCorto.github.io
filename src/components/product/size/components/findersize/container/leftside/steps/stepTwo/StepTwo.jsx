import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { InputGroupSetTextChestStyled, InputGroupSetTextLegsStyled, InputGroupSetTextShoulderStyled, InputGroupSetTextArmsStyled } from './StepTwoStyles';
import { FormGroup } from '../../LeftSideStyles';


@inject('ProductStore')
@observer
export default class StepTwo extends Component {
    render() {
        const { sizeComponent } = this.props.ProductStore;
        return (
            <FormGroup unmountOnExit in={sizeComponent.displaySizeResult} timeout={500}>
                <InputGroupSetTextChestStyled labelProps={"Longueur du torse"} placeholderProps={"50 - 70"} />
                <InputGroupSetTextLegsStyled labelProps={"Entre-jambe"} placeholderProps={"50 - 70"} />
                <InputGroupSetTextShoulderStyled labelProps={"Largeur d'épaules"} placeholderProps={"50 - 70"} />
                <InputGroupSetTextArmsStyled labelProps={"Longueur de bras"} placeholderProps={"50 - 70"} />
            </FormGroup>
        );
    }
};
