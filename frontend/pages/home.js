import React, { useState } from "react";

import { Form } from "antd";
import Head from "next/head";

import Header from "../src/components/Header/index";
import Footer from "../src/components/Footer/index";
import Modal from "../src/components/Modal/index";
import SubmitButton from "../src/components/SubmitButton/index";

import Trophy from "../src/assets/cup-1.svg";
import BoxImage from "../src/assets/caixa.svg";
import DeliveryImage from "../src/assets/coleta.svg";
import Sponsor1 from "../src/assets/logo-azul.svg";
import Sponsor2 from "../src/assets/logo-gol.svg";
import Sponsor3 from "../src/assets/logo-correios.svg";

import FormatCep from "../src/utils/cepMask";
import * as Styled from "./styles/stylesHome";
import api from "../src/services/api";

function Home() {
  const [form] = Form.useForm();
  const [cepOrigem, setCepOrigem] = useState("");
  const [cepDestino, setCepDestino] = useState("");
  const [intentionId, setIntentionId] = useState([]);
  const [open, setOpen] = useState(false);

  const validateMessages = {
    required: "Obrigatório",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/intention", {
        zip_code_start: values.origem,
        zip_code_end: values.destino,
        quantity: 1,
        height: values.altura,
        length: values.comprimento,
        width: values.largura,
        price: values.preco,
        weight: values.peso,
      });

      const { id } = response.data;

      setIntentionId(id);

      localStorage.setItem("id", id);

      return setOpen((current) => !current);
    } catch (error) {
      console.log(error);
      window.alert(
        "Falha na criação da intenção de frete, verifique se os dados estão corretos!",
      );
    }
  };

  return (
    <>
      <Head>SmartEnvios</Head>
      <Modal open={open} setOpen={setOpen} id={intentionId}></Modal>
      <Styled.Container>
        <Styled.Content>
          <Header />
          <Styled.TextWrapper>
            <Styled.MainText>
              Descubra como é <strong>fácil enviar</strong> suas{" "}
              <strong>encomendas</strong> através da <strong>SMART</strong>
              <span>ENVIOS</span>
            </Styled.MainText>
          </Styled.TextWrapper>
          <Styled.CardBox gutter={40}>
            <Styled.Column>
              <Styled.Item title="Marketplace de Frete">
                <Styled.DownArrow />
                <Styled.Circle>
                  <h3>1</h3>
                </Styled.Circle>
                Através de nossas integrações seu cliente seleciona o
                <b>melhor frete</b>
                em nosso marketplace direto no check-out de sua loja.
              </Styled.Item>
              <Styled.UpArrow />
            </Styled.Column>
            <Styled.Column>
              <Styled.Item title="Smart Coleta">
                <Styled.Circle>
                  <h3>2</h3>
                </Styled.Circle>
                <b>Coletores</b>
                credenciados retiram diariamente as suas encomendas e levam até
                os
                <b>transportadores</b>.
              </Styled.Item>
              <Styled.RightArrow />
            </Styled.Column>
            <Styled.Column>
              <Styled.Item title="Acompanhamento">
                <Styled.Circle>
                  <h3>3</h3>
                </Styled.Circle>
                Você e seu cliente <b>acompanham</b>
                todo <b>o trajeto</b>
                da encomenda através da plataforma SmartEnvios
              </Styled.Item>
              <Styled.UpArrow />
            </Styled.Column>
            <Styled.Column>
              <Styled.Item title="O destinatário recebe">
                <Styled.Circle>
                  <Trophy></Trophy>
                </Styled.Circle>
                E <b>notificamos</b> vocês assim que o envio for
                <b>entregue com segurança</b>
                ao seu <b>cliente</b>.
              </Styled.Item>
            </Styled.Column>
          </Styled.CardBox>

          <Styled.Wrapper>
            <Styled.LeftArrow />
            <Styled.MainText>
              <strong>Faça uma cotação</strong>
            </Styled.MainText>
          </Styled.Wrapper>

          <Styled.ContentBox>
            <DeliveryImage />
            <Styled.FormBox
              validateMessages={validateMessages}
              form={form}
              onFinish={handleSubmit}
            >
              <Styled.HWrapper>
                <Styled.Label label="De" name="origem">
                  <Styled.CepInput
                    maxLength={9}
                    onChange={(e) => setCepOrigem(FormatCep(e.target.value))}
                    cep={cepOrigem}
                    placeholder="Digite o CEP do endereço de coleta"
                  />
                </Styled.Label>
                <Styled.Label label="Para" name="destino">
                  <Styled.CepInput
                    onChange={(e) => setCepDestino(FormatCep(e.target.value))}
                    cep={cepDestino}
                    placeholder="Digite o CEP de destino da encomenda"
                  />
                </Styled.Label>
              </Styled.HWrapper>
              <Styled.VolumeBox>
                <strong>Volumes</strong>
                <Styled.HWrapper>
                  <Styled.Label label="largura" name="largura">
                    <Styled.Input
                      placeholder="L"
                      type="text/number"
                      maxLength={3}
                    />
                  </Styled.Label>
                  <Styled.Label label="altura" name="altura">
                    <Styled.Input
                      placeholder="A"
                      type="text/number"
                      maxLength={3}
                    />
                  </Styled.Label>
                  <Styled.Label label="comprimento" name="comprimento">
                    <Styled.Input
                      placeholder="C"
                      type="text/number"
                      maxLength={3}
                    />
                  </Styled.Label>
                  <span>cm</span>
                  <Styled.Label label="peso" name="peso" type="text/number">
                    <Styled.Input placeholder="do pacote" maxLength={5} />
                  </Styled.Label>
                  <span>KG</span>
                  <Styled.Label label="valor do produto" name="preco">
                    <Styled.Input placeholder="valor produto" />
                  </Styled.Label>
                </Styled.HWrapper>
              </Styled.VolumeBox>
              <Styled.SubmitBox>
                <div>
                  <p>Alguns de nossos parceiros logísticos</p>
                  <div>
                    <Sponsor1 />
                    <Sponsor2 />
                    <Sponsor3 />
                  </div>
                </div>
                <SubmitButton buttonType="submit" type="primary">
                  Encontrar o melhor frete
                </SubmitButton>
              </Styled.SubmitBox>
            </Styled.FormBox>
            <BoxImage />
          </Styled.ContentBox>
          <Footer />
        </Styled.Content>
      </Styled.Container>
    </>
  );
}

export default Home;
