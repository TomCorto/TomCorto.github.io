import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from './ButtonCTAMobileCompStyles';


@inject('ProductStore')
@observer
export default class ButtonCTAMobileComp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                Test
            </Container>
        );
    }
};
