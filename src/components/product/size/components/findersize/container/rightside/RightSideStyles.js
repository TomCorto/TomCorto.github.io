import styled from 'styled-components';
import React from 'react';
import { TitleHeader } from '../../SizeFinderCompStyles';

export const Container = styled.div` /* @Container - Container Group */
  grid-area: 1 / 2 / 1 / -1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background: #D0021B;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 1.5em 0 1.5em;
`;

export const HeaderGroupStyled = styled.div` /* @HeaderGroupStyled - Header Container Group Styled */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  width: 100%;
`

export const TitleHeaderStyled = styled.h2` /* @TitleHeaderStyled - Title Styled */
  grid-column-start: 2;
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-bold);
  font-size: 2rem;
  color: ${ props => props.colorProps };
`

export const CloseGroup = styled.div` /* @CloseGroup - Container Close Button */
  color: ${props => props.colorProps ? 'white': '#D0021B'};
  align-self: start;
  margin-left: auto;
  height: 100%;
  margin: 0 0 0 auto;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: var(--ft-semi-pro);
  cursor: pointer;
`


export const SpanIcon = styled.span` /* @SpanIcon - Icon Styled Pure Css */
  margin:0 1em 0 0.5em;
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    background: var(--color-primary-white);
    transform: rotate(45deg);
    height: 2px;
    margin-top: -2px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    background: var(--color-primary-white);
    transform: rotate(-45deg);
    height: 2px;
    margin-top: -2px;
  }
`

export const SpanText = styled.span` /* @SpanText - Text Span  Close Button */
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 1rem;
  color: var(--color-primary-white);
  display: none;
  opacity: 0;
  transition: display 400ms ease-in;
  ${CloseGroup}:hover & {
    display: flex;
    opacity: 1;
    transition: display 400ms ease-in;
  }
`

export const MensurationGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0 0 2em;
`

export const Mensuration = styled.p`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  font-size: 1rem;
  color: var(--color-primary-white);
  margin: 0 1em 0 0;
  &:last-child {
    margin: 0;
  }
`

const MensurationExtend = Mensuration.withComponent('span');
export const MensurationSpan = MensurationExtend.extend`
  font-weight: var(--ft-weight-reg);
`

export const SizeChartGroup = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const MeasureChartGroup = styled.div`
  grid-area: 1 / 1 / -1 / 2;
  padding: 0 0 0 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 50%;
`

export const SvgGroup = styled.div`
  grid-area: 1 / 2 / -1 / -1;
  width: 247px;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`
