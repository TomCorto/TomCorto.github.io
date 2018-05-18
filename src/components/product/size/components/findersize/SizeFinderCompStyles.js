import React from 'react';
import styled from 'styled-components';
import transition from 'styled-transition-group';
import InputGroupSetText from './components/input/InputGroupSetText';
import RadioComp from './components/radiocomp/RadioComp';
import ButtonComp from '../button/ButtonComp';
import ButtonSizeCTA from './components/button/ButtonSizeCTA.jsx';
import SvgBody from './components/svgbody/SvgBody';

export const Container = transition.section`
  /*background: ${props => props.backgroundColorProps ? "#FFFFFF" : "#D0021B"};*/
  transition: background 150ms ease-in;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  border-radius: 10px;

  @media all and (min-width: 1024px) {
    width: 768px;
    height: auto;
  }

  // Animation //
  &:enter {
    /*opacity: 0.01;
    transform:translateY(-50%);*/
  }
  &:enter-active {
    /*opacity: 1;
    transform:translateY(0%);
    transition: all 350ms linear;*/
  }
  &:exit { opacity: 1; }
  &:exit-active {
    /*opacity: 0;
    transform:translateY(-100%);
    transition: all 400ms ease-in;*/
  }
`

export const LeftSide = styled.div` /* Left Side Container */
  grid-area: 1 / 1 / -1 / 2;
  background-color: var(--color-primary-white);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 1.5em 0 1.5em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderGroup = styled.div` /* Step 1 & Step 2 & Step 3 - Container Title Group */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 323px;
  text-align: center;
`


export const TitleHeader = styled.h2` /* Step 1 & Step 2 & Step 3 - Title Header */
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-bold);
  font-size: 2rem;
  color: ${ props => props.colorProps };
`

export const TextSub = styled.p`
  margin: 0.5em 0 0 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 14px;
  color: ${props => props.colorProps};
`

export const FormGroup = styled.form`
  margin: 2em 0 2em 0;
  padding: 0;
  display: grid;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0 0 12px;
  }
  &:last-child {
    margin: 64px;
  }
`


export const ImgProduct = styled.img`
  margin: 2.25rem 0 0 0;
  width: 230px;
`

export const ModelProduct = styled.p`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.5rem;
  color: var(--color-primary-grey);
`



const ButtonSizeCTARoot = ({ className, colorProps, textProps, onClick }) => ( /* Step 3 - CTA Checkout */
  <ButtonSizeCTA className={className} colorProps={colorProps} textProps={textProps} onClick={onClick} />
)
export const ButtonSizeCTAStyled = styled(ButtonSizeCTARoot)`
  margin-top: 64px;
`

export const RightSide = styled.div`
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

const SvgBodyImport = ({ className, srcProps }) => (
  <SvgBody srcProps={srcProps} className={className} />
);
export const SvgBodyStyled = styled(SvgBodyImport)``


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

const RadioCompGender = ({ className, labelProps }) => (
  <RadioComp className={className} labelProps={labelProps} />
);
export const RadioCompGenderStyled = styled(RadioCompGender)`
  /*grid-area: 1 / 1 / 2 / 4;*/
  background: blue;
`;


const InputGroupSetTextHeight = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextHeightStyled = styled(InputGroupSetTextHeight)`
  /*grid-area: 2 / 1 / 3 / 2;*/
  margin: 0;
  padding: 0;
  border: 1px solid blue;
`

const InputGroupSetTextWeight = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextWeightStyled = styled(InputGroupSetTextWeight)`
  /*grid-area: 3 / 1 / -1 / 2;*/
`


const InputGroupSetTextChest = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextChestStyled = styled(InputGroupSetTextChest)`

`

const InputGroupSetTextLegs = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextLegsStyled = styled(InputGroupSetTextLegs)`

`

const InputGroupSetTextShoulder = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextShoulderStyled = styled(InputGroupSetTextShoulder)`

`

const InputGroupSetTextArms = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextArmsStyled = styled(InputGroupSetTextArms)`

`

const ButtonCTA = ({ className, propsText, onClick, colorProps }) => (
  <ButtonComp className={className} propsText={propsText} onClick={onClick} colorProps={colorProps} />
);
export const ButtonStyled = styled(ButtonCTA)`
  margin: 10em 0 0 0;
`

export const ResultGroup = transition.div`
  height: auto;
  width: auto;
`

export const HeaderResult = transition.h5`
  margin: 0;
  padding: 0;
  color: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 3.5rem;
    // Animation //
  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: all 350ms linear;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0;
    transition: all 400ms ease-in;
  }
`
