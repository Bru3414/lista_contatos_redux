import { useDispatch, useSelector } from 'react-redux'

import PesquisarContainer, { BtnAdicionar } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/pesquisa'

const Pesquisar = () => {
  const dispath = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <PesquisarContainer className="container">
      <input
        type="text"
        placeholder={`Pesquisar (${itens.length} Contatos)`}
        value={termo}
        onChange={(e) => dispath(alterarTermo(e.target.value))}
      />
      <BtnAdicionar to="/novo">+</BtnAdicionar>
    </PesquisarContainer>
  )
}

export default Pesquisar
