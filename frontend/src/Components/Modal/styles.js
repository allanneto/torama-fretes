import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { Form, Input as AntInput, Modal as AntModal } from "antd";

export const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  background: #ffffff;
  width: 480px;

  padding: 30px;

  border-radius: 5px;

  transition: 400ms;

  @media (max-width: 900px) {
    width: 400px;
  }
`;

export const Icon = styled(MdClose)`
  position: absolute;
  height: 20px;
  width: 20px;
  color: #000000;

  cursor: pointer;

  top: 5px;
  right: 5px;
`;

export const FormBox = styled(Form)`
  position: relative;
  display: flex;

  flex-direction: column;

  svg {
    position: absolute;
    right: 0px;
    bottom: 10%;

    z-index: 0;
  }

  .wrapper {
    margin-top: 20px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainText = styled.p`
  margin: 0;
  position: relative;
  color: #2a5072;
  font-size: 22px;

  span {
    color: #f58634;
  }

  margin-bottom: 20px;
`;

export const Label = styled(Form.Item).attrs({
  rules: [{ required: true }],
})`
  flex: 1;
  display: flex;
  flex-direction: column;

  z-index: 1;

  margin-top: 20px;

  color: #044d75;
  font-weight: bold;
  font-size: 16px;
`;

export const Input = styled.input.attrs((props) => ({
  value: props.cnpj,
}))`
  height: 30px;
  margin: 5px 0 5px 0;
  border: 1px solid #eee;
  width: 100%;
  padding: 5px;
  opacity: 0.75;

  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 16px;
  color: #044d75;

  ::placeholder {
    color: #044d75;
  }
`;

export const HWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  justify-content: space-between;

  &:first-child {
    padding: 20px;
    justify-content: space-between;
  }
`;
