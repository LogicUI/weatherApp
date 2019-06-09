import styled from 'styled-components';

/**
 * styled component for the root of the app , uses css grid template area to delegate each component structure
 */
export const StyledRoot = styled.section`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'nav'
    'content'
    'footer';

  grid-template-columns: 1fr;
  grid-template-rows:
    auto
    minmax(75px, 1fr)
    1fr
    auto;

  @media (min-width: 768px) {
    grid-template-areas:
      'header header header'
      'nav content content'
      'footer footer footer';

    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    font-family: 'Merriweather', serif;
  }
`;
