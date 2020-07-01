import React from "react";

import Header from "../src/Components/Header/index";

import * as Styled from "./styles/stylesHome";

function Home() {
  return (
    <>
      <Header />
      <Styled.Content>
        <Styled.MainText>
          Descubra como é fácil enviar suas encomendas através da SMARTENVIOS
        </Styled.MainText>
      </Styled.Content>
    </>
  );
}

export default Home;
