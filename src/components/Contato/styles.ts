import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
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

  h2 {
    font-size: 22px;
    line-height: 24px;
    padding: 8px;
    border-radius: 8px;
    background-image: linear-gradient(
      45deg,
      ${variaveis.amarelo},
      ${variaveis.rosa}
    );
    font-weight: normal;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow-x: auto;

    @media (max-width: 640px) {
      font-size: 16px;
      line-height: 18px;
      display: flex;
    }
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    align-content: center;
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
