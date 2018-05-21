import styled from 'styled-components';

export const Container = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 1000px;
    background: ${props => props.bgColorProps ? 'white' : '#DE0019'};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-transform: lowercase;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    color: ${props => props.bgColorProps ? '#DE0019' : 'white'};
    font-size: 1rem;
    margin: 0;
    padding-bottom: 2px;
`
