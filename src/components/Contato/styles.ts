import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  tipo: 'normal' | 'editaCadastra'
}

export const Card = styled.form<Props>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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

const Nome = styled.h2`
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
`

export default Nome
