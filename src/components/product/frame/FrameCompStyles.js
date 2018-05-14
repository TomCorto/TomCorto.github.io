import React from 'react';
import styled from 'styled-components';
import { Text } from '../description/DescriptionCompStyles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media all and (min-width: 1024px) { margin: 10vh auto 10vh; }
  @media all and (min-width: 1280px) { margin: 10vh auto 10vh; }
`

const TextComp = ({ className, children }) => (
  <Text className={className}>
    {children}
  </Text>
);

export const TextCompStyled = styled(TextComp)`
`
