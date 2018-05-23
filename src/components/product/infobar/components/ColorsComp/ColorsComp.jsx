import React from 'react';
import PropTypes from 'prop-types';
import { Container, TitleLabel, NameColor, ColorsGroup, CircleColored } from './ColorsCompStyles';


const ColorsComp = () => (
    <Container>
        <TitleLabel>Coloris</TitleLabel>
        <NameColor>Red Matt & Glossy </NameColor>
        <ColorsGroup>
            <CircleColored colorOne={"#DA111D"} colorTwo={"#36778D"} />
            <CircleColored colorOne={"#FF000F"} colorTwo={"#CB2401"} />
            <CircleColored colorOne={"#000000"} colorTwo={"#181818"} />
        </ColorsGroup>
    </Container>
);

ColorsComp.propTypes = {

}

export default ColorsComp;
