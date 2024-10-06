import { useDispatch, useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import Pesquisar from '../../components/Pesquisar'
import { RootReducer } from '../../store'
import { useGetContatosQuery } from '../../services/api'
import { useEffect } from 'react'
import { buscarContatos } from '../../store/reducers/contatos'
import ListItem from './styles'

const ListaDeContatos = () => {
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { data: contatos, isSuccess } = useGetContatosQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if (contatos) {
      dispatch(buscarContatos(contatos))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  if (!contatos) {
    return <>Carregando...</>
  }

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
          <ListItem key={i.id}>
            <Contato
              id={i.id}
              nome={i.nome}
              telefone={i.telefone}
              email={i.email}
              estaEditando={i.estaEditando}
            />
          </ListItem>
        ))}
      </ul>
    </>
  )
}

export default ListaDeContatos
