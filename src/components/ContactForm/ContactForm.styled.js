import styled from 'styled-components';

export const Wrap = styled.div`
  border: 2px solid black;
  padding: 30px;
  /* background-color: white; */
  width: 200px;
  margin: 25px auto;
  background: rgb(240, 240, 240, 0.3);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWpap = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  background-color: white;
  padding: 4px 4px;
  border-radius: 10px;
  background-color: transparent;
  color: #1976d3;
`;

export const Input = styled.input`
  font-size: 13px;
  font-weight: 600;
  background-color: rgb(228 235 236);
  padding-left: 10px;
  display: block;
  width: 100%;
  height: 30px;
  border-radius: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  font-size: 15px;
  width: 120px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: white;
  border: 1px solid black;
  color: #1b1820;

  &:hover,
  &:focus {
    background-color: rgb(228 235 236);
  }
`;
