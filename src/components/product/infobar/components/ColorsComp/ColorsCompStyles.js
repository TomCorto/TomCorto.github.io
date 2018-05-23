import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 3em;
    width: auto;
    margin: 0 2em 0 0;
`

export const TitleLabel = styled.h6`
    display: block;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    color: var(--color-primary-grey);
    font-size: 1rem;
    margin: 0 0 0.2em 0;
    padding: 0;
    @media all and (max-width: 480px) { display: none; }
`

export const NameColor = TitleLabel.extend`
    display: block;
    font-size: 0.75em;
    margin: 0 0 0.2em 0;
    @media all and (max-width: 480px) { display: none; }
`


export const ColorsGroup = styled.div`
    margin: 0;
    padding: 0.2em 0 0.2em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    with: 100%;
`

export const CircleColored = styled.div`
    margin: 0;
    padding: 0;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: linear-gradient(${props => props.colorOne} 50%, white 50%, white 50%, ${props => props.colorTwo} 50%);
    &:first-child { margin: 0 0.5em 0 0; }
    &:last-child { margin: 0 0 0 0.5em; }
`
