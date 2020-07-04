import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 45px 0;
  
  @media(max-width: 360px){
    padding: 25px 0;

    svg{
      width: 100%;
    }
  }
`;
