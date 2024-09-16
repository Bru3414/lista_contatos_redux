import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import nomeImg from '../../images/sombra-de-usuario-masculino.png'
import emailImg from '../../images/o-email.png'
import Botao from '../Botao'
import ContatoClass from '../../models/Contato'
import * as S from './styles'
import telefoneImg from '../../images/telefone.png'
import { remover, isEdit } from '../../store/reducers/contatos'
import CardEditaCadastra from '../CardEditaCadastra'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id, estaEditando }: Props) => {
  const [editando, setEditando] = useState(false)
  const dispath = useDispatch()

  useEffect(() => {
    setEditando(estaEditando as boolean)
  }, [estaEditando])

  const editar = () => {
    dispath(isEdit(id))
  }

  return (
    <>
      {editando ? (
        <CardEditaCadastra
          nome={nome}
          email={email}
          telefone={telefone}
          id={id}
          estaEditando={editando}
        />
      ) : (
        <S.Card className="container">
          <h2>
            <img src={nomeImg} alt="" />
            {nome}
          </h2>
          <S.Dados>
            <img src={telefoneImg} alt="" />
            <InputMask
              mask="(99) 99999-9999"
              disabled={true}
              value={telefone}
              name="telefone"
            />
          </S.Dados>
          <S.Dados>
            <img src={emailImg} alt="" />
            <input disabled={true} type="text" value={email} name="email" />
          </S.Dados>
          <S.BotoesDiv>
            <Botao onClick={() => editar()} texto="EDITAR" tipo="editar" />
            <Botao
              onClick={() => dispath(remover(id))}
              texto="EXCLUIR"
              tipo="excluir"
            />
          </S.BotoesDiv>
        </S.Card>
      )}
    </>
  )
}

export default Contato
