import type { JSX, ButtonHTMLAttributes } from 'react';

import { Colors } from '../themes';
import { StyledIconButton } from './styles';

type IconButtonProps = {
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ color = Colors.Gray100, onClick, children }: IconButtonProps): JSX.Element => (
  <StyledIconButton $color={color} onClick={onClick}>
    {children}
  </StyledIconButton>
);
