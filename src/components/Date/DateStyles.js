import styled from 'styled-components';

const DateStyles = styled.span`
  display: block;
  color: gray;
  font-size: 13px;
  font-style: italic;
  padding-left: 5px;
  @media (max-width: 520px) {
    font-size: 8px;
  }
`;

export default DateStyles;
