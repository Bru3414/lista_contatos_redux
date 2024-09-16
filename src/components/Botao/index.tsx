import Button from './styles'

type Props = {
  tipo: string
  texto: string
  onClick?: () => void
}

const Botao = ({ texto, tipo, onClick }: Props) => {
  return (
    <Button onClick={onClick} type="submit" tipo={tipo}>
      {texto}
    </Button>
  )
}

export default Botao
