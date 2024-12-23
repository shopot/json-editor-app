import { forwardRef, type HTMLAttributes, type JSX } from 'react';
import type { CSSProperties } from 'styled-components';

import { StyledPanel } from './styles';

export type PanelProps = {
  sx?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ sx, children, ...props }, ref): JSX.Element => (
    <StyledPanel ref={ref} $sx={sx} {...props}>
      {children}
    </StyledPanel>
  ),
);
