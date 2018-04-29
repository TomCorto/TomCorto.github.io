import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Link = ({ className, children, link }) => (
  <NavLink to={link} className={className}>
    {children}
  </NavLink>
);

const StyledLink = styled(Link)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  text-decoration: none;
  color: var(--color-primary-white);
  background-color: rgba(48, 115, 128, 0.7);
  border-radius: 3px;
  &:hover {
    text-decoration: underline;
  }
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 0px) and (max-width: 768px) { font-size: auto; height: 3rem; padding: 0.2em 1.25em 0.2em; }
  @media all and (min-width: 768px) { font-size: 1.4rem; height: auto; padding: 0.2em 1.25em 0.2em; }
  @media all and (min-width: 1024px) { font-size: 1.5rem; height: auto; padding: 1em 1.5em 1em; }
`;

const DistributorButton = ({linkProps, textProps}) => (
  <StyledLink link={linkProps}>{textProps}</StyledLink>
);

export default DistributorButton;
