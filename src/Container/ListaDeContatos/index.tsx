import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import Pesquisar from '../../components/Pesquisar'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <>
      <Pesquisar />
      <ul>
        {filtraContatos().map((i) => (
          <li key={i.id}>
            <Contato
              id={i.id}
              nome={i.nome}
              telefone={i.telefone}
              email={i.email}
              estaEditando={i.estaEditando}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaDeContatos
