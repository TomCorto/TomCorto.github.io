import React from 'react';
import styled from 'styled-components';
import MarkerComp from '../marker/MarkerComp';

export const Container = styled.section`
    border: 1px solid #979797;
    background: var(--color-primary-white);
    box-shadow: 0 2px 4px var(--color-primary-grey);

     @media all and (min-width: 480px) {
        margin: 0 0 2em 0;
        padding: 1.3em 1em 1.3em;
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(4, auto);
        /*display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;*/
    }

    @media all and (min-width: 768px) {
        margin: 0 0 2em 0;
        padding: 1.3em 1em 1.3em;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    @media all and (min-width: 1024px) {
        margin: 0 0 2em 0;
        padding: 1.3em 1em 1.3em;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
    }
     @media all and (min-width: 1280px) {
        margin: 0 0 2em 0;
        padding: 1.75em 1em 1.75em;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    @media all and (min-width: 1440px) {
        justify-content: flex-start;
    }
`

const MarkerCompRoot = ({ className, textProps, colorProps }) => (
    <MarkerComp className={className} textProps={textProps} colorProps={colorProps} />
);
export const MarkerCompStyled = styled(MarkerCompRoot)`
    margin: 0 0.5em 0 0;
    padding: 0;
    border: 1px solid black;
`

export const ImgStore = styled.img`
    padding: 0;
    @media all and (min-width: 480px) { height: auto; min-width: 100%;}
    @media all and (min-width: 768px) { height: 140px; width: 167px; }
    @media all and (min-width: 1024px) { height: 200px; width: 239px; }
`

export const AdressGroup = styled.div`
    height: auto;
    align-self: flex-start;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    @media all and (min-width: 480px) {
        grid-area: 2 / 1 / 3 / 2;

    }
    @media all and (min-width: 768px) { margin: 0 0 0 1em; display: flex; }
    @media all and (min-width: 1024px) { margin: 0 0 0 1.5em; }
    @media all and (min-width: 1280px) { margin: 0 0 0 2em; }
    @media all and (min-width: 1440px) { margin: 0 0 0 2.5em; }
`

export const AdressStoreMobile = AdressGroup.extend`
    @media all and (min-width: 480px) { display: flex; }
`

export const SpanStore = styled.span`
    font-size: 1rem;
    line-height: 0.75rem;
`

export const NameStore = styled.h3`
    margin: 0;
    padding: 0;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-semi);
    color: var(--color-primary-grey);
    @media all and (min-width: 480px) { font-size: 1.4rem; }
    @media all and (min-width: 1024px) { font-size: 1.4rem; }
`

const AdressRoot = NameStore.withComponent('h4');
export const AdressStore = AdressRoot.extend`
    font-weight: var(--ft-weight-lt);
    @media all and (min-width: 1024px) { font-size: 1.2rem; }
`

const CategoryRoot = NameStore.withComponent('h5');
export const CategoryTitle = CategoryRoot.extend`
    font-size: 1.1rem;
    @media all and (min-width: 768px) { margin: 0 0 0.5em 0; }
    @media all and (min-width: 1024px) { margin: 0 0 2em 0; }
    @media all and (min-width: 1280px) { margin: 0 0 2em 0; }
    @media all and (min-width: 1440px) { margin: 0 0 1em 0; }
`

export const ScheduleGroup = AdressGroup.extend`
    align-self: flex-start;
    @media all and (min-width: 480px) { grid-area: 2 / 2 / 3 / 3; }
    @media all and (min-width: 768px) { margin: 0 0 0 1em; }
    @media all and (min-width: 1024px) { margin: 0 0 0 1.75em; }
    @media all and (min-width: 1280px) { margin: 0 0 0 3em; }
    @media all and (min-width: 1440px) { margin: 0 0 0 4; }
`

export const ScheduleList = styled.table`
    @media all and (min-width: 1024px) { margin: 0.5em 0 0 0; }
`

export const ScheduleTableTR = styled.tr`
    @media all and (min-width: 1024px) { margin: 0 0 1em 0; }
`

export const ScheduleItems = styled.td`
    font-family: var(--ft-source-pro);
    color: var(--color-primary-grey);
    font-weight: var(--ft-weight-lt);
    font-size: 1rem;
`

export const ScheduleItemsDay = styled.td`
    font-family: var(--ft-source-pro);
    color: var(--color-primary-grey);
    font-weight: var(--ft-weight-reg);
    font-size: 1rem;
`

export const WebsiteGroup = AdressGroup.extend`
    @media all and (max-width: 1024px) { display: none; }
    @media all and (min-width: 1024px) { display: flex; margin: 0 0 0 0; }
`

export const WebsiteGroupMobile = WebsiteGroup.extend`
    @media all and (min-width: 480px) { display: flex; margin: 3em 0 0 0; }
    @media all and (min-width: 768px) { display: flex; margin: 0; }
    @media all and (min-width: 1024px) { display: none; }
`

export const WebsiteLink = styled.a`
    margin: 0;
    text-decoration: underline;
    font-size: 1rem;
    color: var(--color-primary-grey);
    cursor: pointer;
    &:hover {
        color: var(--color-primary-blue);
    }
`

export const PhoneGroup = AdressGroup.extend`
    @media all and (max-width: 1024px) { display: none; }
    @media all and (min-width: 1024px) { display: flex; margin: 2em 0 0 0; }
`

export const PhoneGroupMobile = PhoneGroup.extend`
    @media all and (min-width: 768px) { display: flex; justify-content: flex-start; align-items: flex-start; margin: 0; }
    @media all and (min-width: 1024px) { display: none; }
`

const PhoneRoot = NameStore.withComponent('h4');
export const PhoneNumber = PhoneRoot.extend`
    font-weight: var(--ft-weight-lt);
`

export const ContactGroup = AdressGroup.extend`
    @media all and (min-width: 480px) { grid-area: 3 / 1 / 4 / 2; }
    @media all and (min-width: 1024px) {
        margin: 0 0 0 2em;
    }
    @media all and (min-width: 1280px) { margin: 0 0 0 4em; }
    @media all and (min-width: 1440px) { margin: 0 0 0 5em; }
`

export const PraticalGroup = AdressGroup.extend`
    @media all and (max-width: 768px) { grid-area: 3 / 1 / -1 / -1; }
    @media all and (min-width: 768px) { margin: 0 0 0 5em; }
    @media all and (min-width: 1024px) { margin: 0 0 0 3em; }
    @media all and (min-width: 1280px) { margin: 0 0 0 8em; }
    @media all and (min-width: 1440px) { margin: 0 0 0 18em; }
`

export const InfoGroup = AdressGroup.extend`
    flex-flow: row nowrap;
    align-items: center;
    @media all and (min-width: 480px) {
        grid-area: 1 / 1 / 2 / -1;
        margin: 0 0 1em 0;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
    }
    @media all and (min-width: 768px) {
        margin: 0;
        flex-flow: row nowrap;
        align-items: center;
    }
    @media all and (min-width: 1024px) { margin: 0; }
    @media all and (min-width: 1280px) { margin: 0; }
    @media all and (min-width: 1440px) { margin: 0; }
`


export const PracticalContainer =styled.div`
    @media all and (max-width: 768px) { 
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
    }
    @media all and (min-width: 768px) { margin: 1.75em 0 0 0; }
`

export const PraticalItemsGroup =styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    text-decoration: underline;
    &:nth-of-type(1) {
        margin-bottom: 0.5em;
    }
    @media all and (max-width: 768px) { grid-rows: 2 / -1; }
`

export const PraticalIcon = styled.img`
    margin: 0 0.3em 0 0;
    height: 24px;
    width: 24px;
`
