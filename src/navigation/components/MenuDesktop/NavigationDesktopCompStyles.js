import styled from 'styled-components';

export const Container = styled.menu`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 3.75em;
  margin: 0;
  padding: 0;
  width: 100%;
  /*position: fixed;
  z-index: 1000;*/
  background-color: var(--color-primary-white);
  @media (max-width: 1024px) { display: none; }
  @media (min-width: 1024px) { display: flex; }
  & > * {
    @media all and (max-width: 1024px) { display: none; }
  }
`;

export const ImgStyled = styled.img` /* Logo */
  @media all and (max-width: : 1024px) { display: none; }
  @media all and (min-width: 1024px) { width: 12vw; }
  @media all and (min-width: 1280px) { width: 10vw; }
`;

export const MenuListItems = styled.ul` /* Éléments du bloc */
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style-type: none;
  margin: 0 auto;

  position: relative;
  @media all and (max-width: : 1024px) { display: none; }
  @media all and (min-width: 1024px) { display: flex; font-size: 1.25rem; padding: 0 2.5vw 0;}
  @media all and (min-width: 1280px) { font-size: 1.3rem;  } padding: 0 0 0 10em;

  & > a { /* Navlink */
    /*align-items: center;
    margin: 0;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-primary-grey);
    @media all and (max-width: : 1024px) { display: none; }
    @media all and (min-width: 1024px) { display: flex; font-size: 1.25rem; padding: 0 2.5vw 0;}
    @media all and (min-width: 1280px) { font-size: 1.3rem;  padding: 0 2.5em 0; }*/
  }
  & > a:active {
    color: var(--main-color-grey);
  }
`

export const MenuSearchLogo = styled.img`
  position: relative;
  cursor: pointer;
  background: white;
  @media (max-width: : 1024px) { display: none; }
  @media (min-width: 1024px) { margin-right: 2.5vw; }
  @media (min-width: 1280px) { margin-right: 2.7vw; }
`;

export const MenuShoppingCartLogo = styled.img`
  position: relative;
  cursor: pointer;
  @media (min-width: 1024px) { margin-right: 2.5vw; }
  @media (min-width: 1280px) { margin-right: 2.7vw; }
`;

export const MenuSearchShoppingGroup = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  right: 0;
  @media (max-width: 1024px) { display: none; }
`

export const MenuSpanItems = styled.span`
align-items: center;
margin: 0;
font-family: var(--ft-source-pro);
font-weight: var(--ft-weight-reg);
height: 100%;
cursor: pointer;
user-select: none;
text-decoration: none;
color: var(--color-primary-grey);
@media all and (max-width: : 1024px) { display: none; }
@media all and (min-width: 1024px) { display: flex; font-size: 1.25rem; padding: 0 2.5vw 0;}
@media all and (min-width: 1280px) { font-size: 1.3rem;  padding: 0 2.5em 0; }
&:hover {
  color: var(--color-primary-red);
  transition: color 150ms ease-in;
}
`
