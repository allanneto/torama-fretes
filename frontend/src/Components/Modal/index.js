import React, { useState } from "react";

import Router from "next/router";

import { Form } from "antd";

import api from "../../services/api";

import * as Styled from "./styles";
import BoxImage from "../../assets/caixa.svg";
import SubmitButton from "../SubmitButton/index";
import FormatCnpj from "../../utils/cnpjMask";

export default function Modal({ open, setOpen, id }) {
  const [cnpj, setCnpj] = useState("");
  const [userId, setUserId] = useState("");
  const [form] = Form.useForm();

  const validateMessages = {
    required: "Obrigatório",
  };

  const handleClose = () => {
    setOpen((current) => !current);
  };

  const handleSave = async (token) => {
    localStorage.setItem("token", token);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/user", {
        name: values.nome,
        email: values.email,
        telephone: values.telefone,
        cnpj: values.cnpj,
      });

      const updatedResponse = await api.put(`/intention/${id}`, {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
        client_id: response.data.user.id,
      });

      await handleSave(response.data.token);

      setOpen((current) => !current);

      return Router.replace("/results");
    } catch (error) {
      window.alert("Erro na criação do usuário!");
    }
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
              <strong> TORAMA</strong>
              <span>FRETES</span>
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
