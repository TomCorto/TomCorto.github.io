import styled from 'styled-components';
import React from 'react';
import { HeaderRed } from '../visualsproduct/components/frame/FrameCompStyles';

export const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  color: red;
  position: relative;

  @media all and (min-width: 480px) { margin-bottom: 0.5em; }
  @media all and (min-width: 480px) { margin-bottom: 0.5em; }
  @media all and (min-width: 768px) { margin-bottom: 0.5em; }
  @media all and (min-width: 1024px) { margin-bottom: 0.5em; }
  @media all and (min-width: 1280px) { margin-bottom: 1em; }
`

const HeaderCustom = ({ className, children}) => (
  <HeaderRed className={className}>
    {children}
  </HeaderRed>
);
export const HeaderRedStyled = styled(HeaderCustom)`
  @media all and (min-width: 480px) { margin-bottom: 0.5em; }
  @media all and (min-width: 480px) { margin-bottom: 0.5em; }
  @media all and (min-width: 768px) { margin-bottom: 0.5em; }
  @media all and (min-width: 1024px) { margin-bottom: 0.5em; }
  @media all and (min-width: 1280px) { margin-bottom: 1em; }
`

export const TableGroup = styled.div` /* Container */
  width: auto;
  @media all and (min-width: 768px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }
  @media all and (min-width: 1024px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    justify-items: center;
    align-items: center;
  }
  @media all and (min-width: 1280px) { width: 1156px; }
  @media all and (min-width: 1440px) {  width: auto; }
`

export const ItemsGroup = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

  @media all and (min-width: 1024px) {
    &:first-child { border-right: 1px solid black; }
    &:last-child { border-left: 1px solid black; }
  }

  @media all and (min-width: 1280px) {
    &:first-child { }
    &:nth-of-type(2) { padding-left: 2em; }
    &:last-child { padding-left: 1.5em; }
  }
  @media all and (min-width: 1440px) {
    &:first-child { }
    &:nth-of-type(2) { padding-left: 4em; }
    &:last-child { padding-left: 3em; }
  }
`

export const LineSpan = styled.span`
  height: 100%;
  width: 1px;
  background: var(--color-primary-grey);
`
