import React from "react";

import BrazilHeart from "../../assets/brazil-2.svg";

import * as Styled from "./styles";

function Footer() {
  return (
    <Styled.Container>
      <Styled.TextSpan>
        Feito com <BrazilHeart /> no Brasil
      </Styled.TextSpan>
      <Styled.Text>ToramaFretes - Todos os Direitos Reservados</Styled.Text>
    </Styled.Container>
  );
}

export default Footer;
