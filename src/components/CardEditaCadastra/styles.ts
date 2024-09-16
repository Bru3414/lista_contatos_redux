import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  padding: 8px 4px 4px;
  border: 3px solid ${variaveis.verdeClaro};
  background-color: ${variaveis.branco};

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
