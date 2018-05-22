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

export const TableGroupDesktop = styled.div` /* Container */
  width: auto;
  @media all and (max-width: 1024px) {
    display: none;
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

export const TableGroupTablet = styled.div`
  width: auto;
  @media all and (max-width: 768px) { display: none; }
  @media all and (min-width: 768px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }
  @media all and (min-width: 1024px) {display: none; }
`

export const TableGroupMobile = styled.div`
  width: auto;
  @media all and (max-width: 768px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }
  @media all and (min-width: 768px) { display: none; }
  @media all and (min-width: 1024px) {display: none; }
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

  @media all and (max-width: 768px) {
    &:first-child {margin: 0; padding: 4em 0 0 0; }
    /*margin: 0; padding: 2em 0 2em 0;*/
    & > * { padding: 2em 0 2em 0; }
  }

  @media all and (min-width: 768px) {
    &:nth-of-type(1) { border-right: 1px solid black; padding: 0 1em 0 0; }
    &:nth-of-type(2) { padding: 0 0 0 4em; }
  }

  @media all and (min-width: 1024px) {
    &:nth-of-type(1) { margin: 0 0 0 1.5em; padding: 0; border-right: 1px solid black; }
    &:nth-of-type(2) { padding: 0 0 0 3em; }
    &:last-child { border-left: 1px solid black; padding: 0 0 0 1.1em; }
  }

  @media all and (min-width: 1280px) {
    &:nth-of-type(1) { padding: 0; }
    &:nth-of-type(2) { padding: 0 1.2em 0 5em; }
    &:last-child { padding: 0 0 0 3em; }
  }
  @media all and (min-width: 1440px) {
    &:nth-of-type(1) { padding: 0; }
    &:nth-of-type(2) { padding: 0 1.2em 0 5em; }
    &:last-child { padding: 0 0 0 3em; }
  }
`

export const LineSpan = styled.span`
  height: 100%;
  width: 1px;
  background: var(--color-primary-grey);
`
