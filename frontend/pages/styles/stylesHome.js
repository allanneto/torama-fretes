import styled from "styled-components";

import { Card, Row, Col, Divider, Form, Button, Input as AntInput } from "antd";

import DArrow from "../../src/assets/arrow-para-baixo.svg";
import UArrow from "../../src/assets/flexa-direita-cima.svg";

export const Container = styled.div`
  font-family: "Quicksand", sans-serif;

  @import "antd/dist/antd.css";
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap");

  background: #f4f6f9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 100px;
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const MainText = styled.p`
  position: relative;
  color: #2a5072;
  font-size: 24px;
  margin-left: 70px;
  span {
    color: #f58634;
  }
`;

export const DownArrow = styled(DArrow)`
  position: absolute;
  top: -100px;
  left: 45%;
`;

export const UpArrow = styled(DArrow)`
  position: absolute;
  bottom: -25%;
  right: -40px;
  transform: rotate(220deg);
`;

export const RightArrow = styled(UArrow)`
  position: absolute;
  top: -35%;
  right: -55px;
`;

export const LeftArrow = styled(UArrow)`
  position: absolute;
  bottom: -100%;
  right: calc(15% - 100px);
  transform: rotate(130deg);
`;

export const CardBox = styled(Row)`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
`;

export const Column = styled(Col)`
  padding: 8px 0;
  position: relative;
`;

export const Circle = styled.div`
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid #f58634;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  top: -25px;
  left: 40%;
  margin: 0;
`;

export const Item = styled(Card)`
  position: relative;
  max-width: 300px;
  height: 150px;
  background-color: #ffffff;

  .ant-card-head {
    text-align: center;
    margin-top: 30px;
    color: #f58634;
    font-size: 18px;
    font-weight: bold;
  }

  .ant-card-body {
    color: #2a5072;
    font-size: 14px;
    padding: 10px;
  }

  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled(Divider)`
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ContentBox = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const VolumeBox = styled.div`
  display: flex;

  flex-direction: column;
  padding: 20px;

  strong {
    color: #2a5072;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const HWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  &:first-child {
    padding: 20px;
    justify-content: space-between;
  }

  &:last-child {
    background: #fff;
    border-radius: 4px;

    padding: 20px;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const FormBox = styled(Form)`
  margin: 20px;
`;

export const Label = styled(Form.Item).attrs({
  rules: [{ required: true }],
})`
  display: flex;
  flex-direction: column;

  color: #044d75;
  font-weight: bold;
  font-size: 16px;

  &:first-child {
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  height: 30px;
  width: 100px;
  margin: 10px;
  border: 1px solid #eee;

  border-radius: 4px;
  font-size: 16px;
  color: #044d75;

  ::placeholder {
    color: #044d75;
    text-align: center;
  }
  padding: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const CepInput = styled.input.attrs((props) => ({
  value: props.cep,
}))`
  margin: 10px 0 5px 0;
  width: 350px;
  height: 30px;

  font-size: 16px;
  color: #044d75;

  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  ::placeholder {
    color: #044d75;
  }
`;

export const SubmitBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin: 15px 10px 0 0;
  }
`;

export const SubmitButton = styled(Button)`
  background: #f58634;
  width: 300px;
  height: 45px;
  border: 0;
  border-radius: 4px;

  font-weight: bold;
  color: #fff;
  font-size: 16px;

  cursor: pointer;
`;
