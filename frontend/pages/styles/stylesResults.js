import styled, { css } from "styled-components";

import { Card } from "antd";

import Barato from "../../src/assets/barato.svg";
import BaratoMobile from "../../src/assets/coin.svg";
import Rapido from "../../src/assets/rapido.svg";
import RapidoMobile from "../../src/assets/clock.svg";

export const Container = styled.div`
  font-family: "Quicksand", sans-serif;

  @import "antd/dist/antd.css";
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap");

  background: #f4f6f9;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainText = styled.p`
  position: relative;
  color: #2a5072;
  font-size: 24px;
  span {
    color: #f58634;
  }
`;

export const SVGtest = styled.img.attrs((props) => ({
  src: "../../src/assets/barato.svg",
}))``;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

export const Item = styled(Card)`
  position: relative;
  background-color: #ffffff;
  height: 200px;
  display: flex;

  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);

  .ant-card-body {
    color: #2a5072;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 10px 10px 0 10px;

    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Title = styled.span`
  font-size: 16px;
  margin-top: 10px;
`;

export const Info = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-top: 0;
  }

  div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    :first-child {
      align-items: flex-start;
      margin-right: 70px;
    }
  }
`;

export const Cheaper = styled(Barato).attrs((props) => ({
  cheap: props.cheap,
  id: props.id,
}))`
  ${(props) =>
  props.id === props.cheap
    ? css`
          display: block;
          @media (max-width: 360px) {
            display: none;
          }
        `
    : css`
          display: none;
        `}
`;

export const MobileCheaper = styled(BaratoMobile).attrs((props) => ({
  cheap: props.cheap,
  id: props.id,
}))`
  ${(props) =>
  props.id === props.cheap
    ? css`
          display: none;

          @media (max-width: 360px) {
            display: block;
          }
        `
    : css`
          display: none;
        `}
`;

export const Faster = styled(Rapido).attrs((props) => ({
  fast: props.fast,
  id: props.id,
}))`
  ${(props) =>
  props.id === props.fast
    ? css`
          display: block;
          @media (max-width: 360px) {
            display: none;
          }
        `
    : css`
          display: none;
        `}
`;

export const MobileFaster = styled(RapidoMobile).attrs((props) => ({
  fast: props.fast,
  id: props.id,
}))`
  ${(props) =>
  props.id === props.fast
    ? css`
          display: none;
          @media (max-width: 360px) {
            display: block;
          }
        `
    : css`
          display: none;
        `}
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  margin: 0 20px;
  padding: 20px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);

  color: #2a5072;
  font-size: 16px;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;

    button {
      width: 180px;
    }

    line-height: 20px;

    &:last-child {
      margin-left: 70px;
      align-items: flex-end;
    }

    a {
      text-decoration: none;
    }
  }
`;
