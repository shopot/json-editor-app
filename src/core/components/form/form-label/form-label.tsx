import type { JSX, PropsWithChildren } from 'react';
import { StyledFormLabel } from './styles';

export const FormLabel = ({ children }: PropsWithChildren): JSX.Element => (
  <StyledFormLabel>{children}</StyledFormLabel>
);
