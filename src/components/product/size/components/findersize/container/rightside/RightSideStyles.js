import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 1 / 2 / 1 / -1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5em 0 1.5em;
  background: #D0021B;
  height: 100%;
  width: 100%;
  margin: 0;
`;

export const CloseGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: var(--ft-semi-pro);
  cursor: pointer;
`

export const SpanClosed = styled.span`
  margin-right: 1em;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 1rem;
  color: ${props => props.colorProps ? "#4E4E4E" : "#FFFFFF"};
  transition: color 150ms ease;
`

export const CrossIcons = styled.img`
  height: 18px;
  width: 19px;
`

export const MensurationGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const Mensuration = styled.p`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  font-size: 1rem;
  color: var(--color-primary-white);
  margin: 0 1em 0 0;
  &:last-child {
    margin: 0;
  }
`

const MensurationExtend = Mensuration.withComponent('span');
export const MensurationSpan = MensurationExtend.extend`
  font-weight: var(--ft-weight-reg);
`
/*
const SvgBodyImport = ({ className, srcProps }) => (
  <SvgBody srcProps={srcProps} className={className} />
);
export const SvgBodyStyled = styled(SvgBodyImport)``*/
