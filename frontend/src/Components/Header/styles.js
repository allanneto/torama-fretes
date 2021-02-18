import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 45px 0;
  
  h1 {
    color: #2a5072;
    font-style: italic;
  }

  @media(max-width: 360px){
    padding: 25px 0;

    svg{
      width: 100%;
    }
  }
`;
