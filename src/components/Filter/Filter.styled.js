import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  padding-left: 10px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  background: rgb(240, 240, 240, 0.3);
  :-ms-input-placeholder {
    color: red;
  }
`;
