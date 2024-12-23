import type { ButtonHTMLAttributes, JSX } from 'react';

import { StyledButton } from './styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, type = 'button', onClick, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <StyledButton type={type} $variant={variant} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
