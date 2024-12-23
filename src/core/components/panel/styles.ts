import styled, { CSSProperties } from 'styled-components';
import { HTMLAttributes } from 'react';

import { Borders, BordersRadius, Colors } from '../themes';

export type StyledPanelProps = {
  $sx?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const StyledPanel = styled.div<StyledPanelProps>`
  padding: 8px 16px;
  border: ${Borders.Base};
  border-radius: ${BordersRadius.Base};
  background-color: ${Colors.White};

  ${({ $sx }) => $sx && { ...$sx }}
`;
