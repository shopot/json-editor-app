import { type JSX, type InputHTMLAttributes, useRef } from 'react';

import { Button } from '../button';
import { StyledContainer, StyledInput } from './styles';

export type FileInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FileInput = ({ label, ...props }: FileInputProps): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => fileInputRef.current?.click();

  return (
    <StyledContainer>
      <StyledInput type="file" ref={fileInputRef} {...props} />
      <Button onClick={handleClick}>{label || 'Upload file'}</Button>
    </StyledContainer>
  );
};
