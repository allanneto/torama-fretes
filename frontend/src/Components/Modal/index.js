import React, { useState } from "react";

import { Form } from "antd";

import api from "../../services/api";

import * as Styled from "./styles";
import BoxImage from "../../assets/caixa.svg";
import SubmitButton from "../SubmitButton/index";
import FormatCnpj from "../../utils/cnpjMask";

export default function Modal({ open, setOpen }) {
  const [cnpj, setCnpj] = useState("");
  const [user, setUser] = useState([]);

  const [form] = Form.useForm();

  const validateMessages = {
    required: "Obrigatório",
  };

  const handleClose = () => {
    setOpen((current) => !current);
  };

  const handleSubmit = async (values) => {
    setUser({
      name: values.nome,
      email: values.email,
      telephone: values.telefone,
      cnpj: values.cnpj,
    });

    const response = await api.post("/user", {
      name: values.nome,
      email: values.email,
      telephone: values.telefone,
      cnpj: values.cnpj,
    });

    console.log(response.data);

    return setOpen((current) => !current);
  };

  return (
    open && (
      <Styled.Container>
        <Styled.Card>
          <Styled.FormBox
            validateMessages={validateMessages}
            form={form}
            onFinish={handleSubmit}
          >
            <BoxImage />
            <Styled.MainText>
              <strong>
                <span>Legal!</span>
              </strong>{" "}
              Você está a poucos cliques de enviar sua encomenda através da
              <strong> SMART</strong>
              <span>ENVIOS</span>
            </Styled.MainText>
            <Styled.Label label="Empresa" name="nome">
              <Styled.Input placeholder="Digite o nome da sua empresa" />
            </Styled.Label>

            <Styled.HWrapper>
              <Styled.Label label="CNPJ" name="cnpj">
                <Styled.Input
                  cnpj={cnpj}
                  maxLength={18}
                  onChange={(e) => setCnpj(FormatCnpj(e.target.value))}
                  placeholder="Digite o cnpj da empresa"
                />
              </Styled.Label>
              <Styled.Label label="Telefone" name="telefone">
                <Styled.Input
                  placeholder="Digite o seu telefone"
                  maxLength={13}
                />
              </Styled.Label>
            </Styled.HWrapper>

            <Styled.Label label="Digite seu e-mail" name="email">
              <Styled.Input placeholder="Digite o seu e-mail" />
            </Styled.Label>
            <div className="wrapper">
              <SubmitButton buttonType="submit" type="primary">
                <strong>Conhecer opções de Frete</strong>
              </SubmitButton>
            </div>
          </Styled.FormBox>

          <Styled.Icon onClick={handleClose} />
        </Styled.Card>
      </Styled.Container>
    )
  );
}
