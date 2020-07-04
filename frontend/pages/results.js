import React, { useState, useEffect } from "react";

import Head from "next/head";
import Router from "next/router";

import Truck from "../src/assets/logistics.svg";
import BoxImage from "../src/assets/caixa.svg";
import DeliveryImage from "../src/assets/coleta.svg";

import * as Styled from "./styles/stylesResults";
import api from "../src/services/api";

import Header from "../src/components/Header/index";
import Footer from "../src/components/Footer/index";
import SubmitButton from "../src/Components/SubmitButton/index";

import withAnalytics from "../src/hocs/withAnalytics";

const Results = () => {
  const [intentions, setIntentions] = useState([]);
  const [fastId, setFastId] = useState("");
  const [cheapId, setCheapId] = useState("");

  const loadIntention = async (token) => {
    const response = await api.get("/intention");

    let cheap = 0;
    let fast = 0;

    for (let intention of response.data) {
      if (cheap === 0) {
        cheap = intention.value;
      }
      if (fast === 0) {
        fast = intention.days;
      }
      if (intention.value <= cheap) {
        cheap = intention.value;
        setCheapId(intention.id);
      }
      if (intention.days <= fast) {
        fast = intention.days;
        setFastId(intention.id);
      }
    }

    setIntentions(response.data);
  };

  const handleSelect = async (id) => {
    try {
      const intentionId = localStorage.getItem("id");

      window.alert("Lead Atualizado!");

      Router.replace("/");

      const response = await api.post(`intention/${intentionId}/lead`, {
        freight_id: id,
      });

      window.alert(response.data.lead);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      Router.replace("/");
    }

    api.defaults.headers.Authorization = `Bearer ${userToken}`;

    loadIntention(userToken);
  }, []);

  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        <Styled.MainText>
          Aqui estão os <strong>resultados</strong> de sua{" "}
          <strong>cotação</strong>
        </Styled.MainText>
        <Styled.CardBox>
          {!intentions ? (
            <Styled.MainText>
              Sem informação de frete disponivel.
            </Styled.MainText>
          ) : (
            intentions.map((intention) => (
              <Styled.Item onClick={() => handleSelect(intention.id)}>
                <Truck></Truck>
                <Styled.Title>Transportadora A</Styled.Title>
                <Styled.Info>
                  <div>
                    <span>Prazo</span>
                    <strong>4 dias úteis</strong>
                  </div>
                  <div>
                    <span>Prazo</span>
                    <strong>4 dias úteis</strong>
                  </div>
                </Styled.Info>
                <Styled.Cheaper id={intention.id} cheap={cheapId} />
                <Styled.MobileCheaper id={intention.id} cheap={cheapId} />
                <Styled.Faster id={intention.id} fast={fastId} />
                <Styled.MobileFaster id={intention.id} fast={fastId} />
              </Styled.Item>
            ))
          )}
        </Styled.CardBox>
        <Styled.UserBox>
          <DeliveryImage />
          <Styled.UserInfo>
            <div>
              <strong>PLACELOG SOLUCOES LOGISTICAS - 29.364.024/0001-01</strong>
              <span>
                <strong>CEP Origem: </strong>
                Rua do Cep de Origem - 14095-140 - Ribeirão Preto, SP
              </span>
              <span>
                <strong>CEP Destino: </strong>
                <span>
                  Rua do Cep de Destion - 14091-220 - Ribeirão Preto, SP
                </span>
              </span>
            </div>

            <div>
              <SubmitButton buttonType="submit" type="primary">
                Quero contratar
              </SubmitButton>
              <a href="/">Nova Cotação</a>
              <span>Saldo Restante: 2</span>
            </div>
          </Styled.UserInfo>
          <BoxImage />
        </Styled.UserBox>
      </Styled.Content>
      <Footer />
    </Styled.Container>
  );
};

export default withAnalytics()(Results);
