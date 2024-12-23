import styled from 'styled-components';

export type StyledIconButtonProps = {
  $color: string;
};

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  & svg {
    fill: ${({ $color }) => $color || 'gray'};
  }

  &:hover {
    opacity: 0.8;
  }
`;
