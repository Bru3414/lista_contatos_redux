import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

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
