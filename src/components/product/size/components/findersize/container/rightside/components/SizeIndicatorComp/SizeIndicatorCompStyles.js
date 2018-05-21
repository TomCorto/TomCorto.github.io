import styled from 'styled-components';
import React from 'react';
import IndicatorComp from '../IndicatorComp/IndicatorComp';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 1em 2em;
    padding: 0;
`

export const IndicatorGroup = styled.div`

`

const IndicatorCompRoot = ({ className, objectProps, textProps }) => (
    <IndicatorComp className={className} objectProps={objectProps} textProps={textProps} />
);
export const IndicatorCompStyled = styled(IndicatorCompRoot)`
    margin: 0 0 0 2em;
    padding: 0;
`

export const Title = styled.span`
    margin: 0;
    padding: 0;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-semi);
    color: var(--color-primary-white);
    font-size: 0.9rem;
    margin-left: 0.5em;
`
