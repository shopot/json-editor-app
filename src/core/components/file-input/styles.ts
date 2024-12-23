import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledSpinnerWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledSpinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
