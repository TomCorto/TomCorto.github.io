import styled from 'styled-components';
import transition from 'styled-transition-group';

export const Container = styled.menu`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  background: var(--color-primary-white);
  height: ${props => props.heightProps ? '3em' : '3.75em'};
  transition: height 300ms ease-in;
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

export const MenuListItems = transition.ul.attrs({
  unmountOnExit: true,
  timeout: 1000
})
` /* Éléments du bloc */
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

  & > a {
  }
  & > a:active {
    color: var(--main-color-grey);
  }

  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`

export const MenuSearchLogo = styled.img`
  position: relative;
  cursor: pointer;
  background: white;
  user-select: none;
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
