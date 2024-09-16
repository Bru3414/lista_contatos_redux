import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const PesquisarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    padding-left: 8px;
    width: 70%;
    background-color: ${variaveis.brancoPesquisa};
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 16px;
    overflow: hidden;

    @media (max-width: 640px) {
      font-size: 14px;
    }
  }
`

export const BtnAdicionar = styled(Link)`
  display: flex;
  width: 64px;
  height: 64px;
  background-color: ${variaveis.verdeAdd};
  color: ${variaveis.branco};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${variaveis.verdeAddClaro};
  }
`

export default PesquisarContainer
