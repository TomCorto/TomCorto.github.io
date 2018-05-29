import styled from 'styled-components';


export const Container = styled.section`
    width: 90%;

    @media all and (max-width: 480px) { margin: 1.5em 5% 0; }
    @media all and (min-width: 480px) { margin: 1.7em 5% 0; }
    @media all and (min-width: 768px) { margin: 1.5em 5% 0; }
`

export const SearchTitle = styled.h4`
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    font-size: 24px;
    margin: 0;
    padding: 0;
    @media all and (max-width: 768px) { margin-bottom: 0.1em; }
    @media all and (min-width: 768px) { margin-bottom: 0.1em; }
    @media all and (min-width: 1024px) { margin-bottom: 0.2em; }
    @media all and (min-width: 1280px) { margin-bottom: 0.5em; }
`
