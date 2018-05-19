import styled from 'styled-components';
import transition from 'styled-transition-group';
import React from 'react';
import TableComp from './components/table/TableComp';
import ButtonComp from './components/button/ButtonComp';

export const Container = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-column-gap: 12px;
  height: auto;
  width: 100%;
  background-color: #000000;
  @media all and (max-width: 1024px) { grid-template-columns: 1fr; grid-template-rows: repeat(3, auto); padding: 5vh 0 5vh; grid-row-gap: 1.5em; }
  @media all and (min-width: 1024px) { grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, auto); padding: 5vh 0 5vh; }
  @media all and (min-width: 1440px) { padding: 6vh 0 6vh; }
`

export const ImgFrame = styled.img`
  /*border: 1px solid white;*/
`
export const ImgGrid = styled.div`
  @media all and (max-width: 1024px) { grid-area: 1 / 1 / 2 / -1; }
  @media all and (min-width: 1024px) { grid-area: 1 / 1 / 1 / 2; }
  /*border:1px solid yellow;*/
`

export const TableGrid = styled.div`
  @media all and (max-width: 1024px) { grid-area: 3 / 1 / 4 / -1; justify-self: center; }
  @media all and (min-width: 1024px) { grid-area: 1 / 2 / 1 / -1; }
  justify-self: start;
  /*border: 1px solid blue;*/
`

export const ButtonGrid = styled.div`
  overflow: hidden;
  justify-self: center;
  @media all and (max-width: 1024px) { grid-area: 4 / 1 / -1 / -1; }
  @media all and (min-width: 1024px) { grid-area: 2 / 1 / 2 / -1; }
`


const ButtonFinder = ({ className, propsText, onClick, colorProps }) => (
  <ButtonComp className={className} propsText={propsText} onClick={onClick} colorProps={colorProps} />
)
export const ButtonStyled = styled(ButtonFinder)``
