import React from "react";

import * as Styled from "./styles";

function SubmitButton({ children, buttonType, type }) {
  return (
    <Styled.SubmitButton htmlType={buttonType} type={type}>
      {children}
    </Styled.SubmitButton>
  );
}

export default SubmitButton;
