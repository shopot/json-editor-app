import { forwardRef, type HTMLAttributes, type JSX } from 'react';
import type { CSSProperties } from 'styled-components';

import { StyledBox } from './styles';

export type BoxProps = {
  sx?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ sx, children, ...props }, ref): JSX.Element => (
    <StyledBox ref={ref} $sx={sx} {...props}>
      {children}
    </StyledBox>
  ),
);
