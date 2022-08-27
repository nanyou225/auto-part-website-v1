import styled from "styled-components";
import { Container } from "../../globalStyles";

export const SelectContainer = styled(Container)`
  position: relative;
  display: flex;

  ${Container}
`;

export const SelectCar = styled.div`
  display: flex;
  background: #fff;
  position: absolute;
  padding: 35px;
  width: 390px;
  border-radius: 8px;
  top: 45px;

  button {
    font-weight: 700;
    width: 320px;
    height: 35px;
    letter-spacing: 12px;

    &:hover {
      color: #fb3d28;
    }
  }

  input {
    text-align: center;
    font-weight: 700;
    width: 320px;
    height: 35px;
    letter-spacing: 2px;
  }
`;
