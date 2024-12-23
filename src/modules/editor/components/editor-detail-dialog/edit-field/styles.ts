import styled from 'styled-components';

import { Colors } from '@/core/components';

export const StyledEditField = styled.div`
  display: contents;
`;

export const StyledFormLabel = styled.label`
  color: ${Colors.Gray600};
`;

export const StyledRadioButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledFormInput = styled.div`
  display: flex;

  input[type='text'] {
    padding: 4px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    transition: border-color 0.3s;

    &:focus {
      border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      outline: none;
    }

    input[type='radio'] {
      margin-right: 8px;
    }
  }
`;
