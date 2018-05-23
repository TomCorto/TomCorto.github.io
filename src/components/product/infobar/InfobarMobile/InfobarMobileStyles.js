import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 3.875em;
    background: grey;
    margin: 3em 0 0 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    @media all and (min-width: 1024px) { display: none; }
`
