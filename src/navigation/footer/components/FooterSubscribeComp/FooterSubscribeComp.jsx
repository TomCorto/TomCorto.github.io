import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Container, LabelStyled, InputStyled, ButtonStyled } from './FooterSubscribeCompStyles';


const FooterSubscribeComp = ({onSubmit}) => (
  <Container>
    <LabelStyled>
      <InputStyled type="text" placeholder={"me@email.com"} />
      <ButtonStyled type="button">Je m'inscris !</ButtonStyled>
    </LabelStyled>
  </Container>
);

export default FooterSubscribeComp;
