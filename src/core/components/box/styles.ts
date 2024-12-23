import { type HTMLAttributes } from 'react';
import styled, { CSSProperties } from 'styled-components';

export type StyledBoxProps = {
  $sx?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export const StyledBox = styled.div<StyledBoxProps>`
  ${({ $sx }) => $sx && { ...$sx }}
`;
