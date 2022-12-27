import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ButtonItem = styled.li`
  margin-right: 5px;
`;
export const Button = styled.button`
  width: 75px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  text-shadow: 1px 1px 2px #7786b4;
  transition: background-color 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    background-color: #3bdbe8;
  }
`;
