import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  tipo: string
}

const Button = styled.button<Props>`
  padding: 16px;
  font-size: 16px;
  background-color: ${(props) =>
    props.tipo === 'editar' ? `${variaveis.verde}` : `${variaveis.vermelho}`};
  cursor: pointer;
  border: none;
  border-radius: 16px;
  width: 30%;
  align-content: center;

  &:hover {
    background-color: ${(props) =>
      props.tipo === 'editar'
        ? `${variaveis.verdeClaro}`
        : `${variaveis.vermelhoClaro}`};
  }

  @media (max-width: 640px) {
    width: 35%;
    font-size: 12px;
  }
`
export default Button
