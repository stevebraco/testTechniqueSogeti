import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const LoadingCircle = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: ' ';
    display: block;
    width: 30px;
    height: 30px;
    margin: 8px;
    border-radius: 50%;
    border: 5px solid #ffffff;
    border-color: #ffffff transparent #ffffff transparent;
    animation: ${LoadingAnimation} 1.2s linear infinite;
  }
`;
