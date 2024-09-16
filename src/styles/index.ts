import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .body {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(135deg, ${variaveis.rosaFundo}, ${variaveis.roxoFundo});
    align-content: center;

    .container-body {
      width: 40%;
      height: 80%;
      background-color: ${variaveis.brancoFundo};
      margin: 0 auto;
      padding: 20px 0;
      border-radius: 16px;
      overflow-y: scroll;

      @media (max-width: 1024px) {
        width: 80%;
      }
      @media (max-width: 640px) {
        width: 90%;
      }
        }
  }

  .container {
    margin: 0 auto;
    width: 80%;
  }

  body {
    ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${variaveis.amarelo};
    border-radius: 16px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: ${variaveis.rosa};
    border-radius: 16px;
    border: 3px solid ${variaveis.amarelo};
  }
  }

.card {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  padding: 4px;
  background-image: linear-gradient(
    45deg,
    ${variaveis.rosa},
    ${variaveis.amarelo}
  );

  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    align-content: center;
  }
}


.card-dados{
  display: flex;
  align-items: center;

  input {
    width: 90%;
    outline: none;
    border: none;
    font-size: 16px;
    border-bottom: 2px dashed ${variaveis.preto};
    padding: 4px;

    &:disabled {
      background-color: transparent;
    }

    @media (max-width: 640px) {
      font-size: 12px;
    }
  }
}

.card-botoes-div{
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;

}

`

type Props = {
  tipo: 'normal' | 'editaCadastra'
}

export const Card = styled.form<Props>`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  ${(props) =>
    props.tipo === 'normal'
      ? `padding: 4px;
  background-image: linear-gradient(
    45deg,
    ${variaveis.rosa},
    ${variaveis.amarelo}
  );`
      : `padding: 8px 4px 4px;
  border: 3px solid ${variaveis.verdeClaro};
  background-color: ${variaveis.branco};`}

  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    align-content: center;
  }

  small {
    margin-left: 24px;
    color: ${variaveis.vermelho};
  }
`

export const Dados = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 90%;
    outline: none;
    border: none;
    font-size: 16px;
    border-bottom: 2px dashed ${variaveis.preto};
    padding: 4px;

    &:disabled {
      background-color: transparent;
    }

    @media (max-width: 640px) {
      font-size: 12px;
    }
  }
`
export const BotoesDiv = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default EstiloGlobal
