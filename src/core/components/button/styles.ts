import styled, { css } from 'styled-components';

export type StyledButtonProps = {
  $variant?: 'primary' | 'secondary';
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  min-width: 80px;
  height: 30px;
  transition:
    background-color 0.3s,
    color 0.3s;

  ${({ $variant = 'primary' }) =>
    $variant === 'primary'
      ? `
        background-color: #1890ff; /* Primary color */
        color: white;
        &:hover {
          background-color: #40a9ff; /* Lighter shade on hover */
        }
        &:active {
          background-color: #096dd9; /* Darker shade on active */
        }
      `
      : `
        background-color: white; /* Secondary background */
        color: #1890ff; /* Primary color */
        border: 1px solid #1890ff; /* Primary border */
        &:hover {
          background-color: rgba(24, 144, 255, 0.1); /* Light background on hover */
        }
        &:active {
          background-color: rgba(24, 144, 255, 0.2); /* Slightly darker on active */
        }
      `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f5f5f5;
      color: #bfbfbf;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
