import styled from 'styled-components';

/**
 * Generic styled component for the user to use flexbox in the center
 */
export const flexBoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  }
`;
