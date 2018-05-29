import styled from 'styled-components';

export const Container = styled.section`
    width: 90%;
    margin: 0 5% 0 5%;
    @media all and (min-width: 480px) { margin-top: 1em; }
    @media all and (min-width: 768px) { margin-top: 1em; }
    @media all and (min-width: 1024px) { margin-top: 1.5em; }
    @media all and (min-width: 1280px) { margin-top: 2em; }
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

export const SearchGroup = styled.form`
    margin: 0;
    padding: 0;

    @media all and (max-width: 768px) {
        display: flex;
        flex-flow: column nowrap;
    }

    @media all and (min-width: 768px) {
        display: flex;
        flex-flow: row nowrap;
    }
`

export const SearchInputGroup = styled.div`

    @media all and (max-width: 1024px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
    }

    @media all and (min-width: 1024px) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
`


export const SearchInput = styled.input`
    border: 1px solid var(--color-primary-grey);
    height: 42px;
    margin: 0;
    padding: 0;
    border-radius: 0 0 0 3px;

    @media all and (max-width: 768px) { width: auto; }
    @media all and (min-width: 768px) { width: 368px; }
    @media all and (min-width: 1024px) { width: 400px; }
    @media all and (min-width: 1280px) { width: 464px; }
`

export const SearchButton = styled.button`
    color: var(--color-primary-white);
    border: none;
    background: var(--color-primary-red);
    margin: 0;
    padding: 0;
    cursor: pointer;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    border-radius: 3px;

    @media all and (max-width: 768px) { margin: 0.5em 0 0 0; height: 44px; width: auto; font-size: 14px; }
    @media all and (min-width: 768px) { margin: 0.5em 0 0 0; height: 44px; width: 10em; font-size: 14px; }
    @media all and (min-width: 1024px) { margin: 0; height: 44px; width: 12em; font-size: 16px; }
`

export const LocateButton = SearchButton.extend`
    margin: 0 0 0 1em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: var(--color-primary-blue);
    width: auto;
    cursor: pointer;
    border-radius: 2px;

    @media all and (max-width: 768px) {
        margin: 0.8em 0 0 0;
        padding: 0.6em 1.2em 0.6em;
        width: auto;
    }

     @media all and (min-width: 768px) {
        margin: 0 0 0 2.4em;
        padding: 0.6em 1.2em 0.6em;
        width: auto;
    }

    @media all and (min-width: 1024px) {
        margin: 0 0 0 2.75em;
        padding: 0.6em 1em 0.6em;
        width: auto;
    }
    @media all and (min-width: 1280px) {
        margin: 0 0 0 3em;
        padding: 0.625rem 2em 0.625rem;
    }
`

export const ImgIcons = styled.img`
    @media all and (max-width: 768px) { margin-right: 0.5em; }
    @media all and (min-width: 768px) { margin-right: 0.3em; }
    @media all and (min-width: 1024px) { margin-right: 0.5em; }
`
