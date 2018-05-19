import styled from 'styled-components';

export const ImgProduct = styled.img` /* @ImgProduct - Image Product step 3 */
  margin: 2.25rem 0 0 0;
  width: 230px;
`

export const ModelProduct = styled.p` /* @ModelProduct - Model Title Product  */
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.5rem;
  color: var(--color-primary-grey);
  text-align: center;
`

export const SpecsContainer = styled.div` /* @SpecsContainer - Container Specs Result */
  margin: 0.5em 0 0 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
`

export const SpecsGroup = styled.div` /* @SpecsGroup - Group Specificities */
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const SpecsTitle = styled.h6` /* @SpecsTitle - Title Specs */
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-red);
  font-size: 1rem;
`

const SpecsDescriptionRoot = SpecsTitle.withComponent('p');
export const SpecsDescription = SpecsDescriptionRoot.extend`/* @SpecsDescription - Sub-title texte */
  color: var(--color-primary-grey);
  font-size: 1rem;
  font-weight: var(--ft-weight-reg);
`
