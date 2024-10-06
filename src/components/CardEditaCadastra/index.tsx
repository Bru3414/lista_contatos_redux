import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { cadastrarStore, editar, isEdit } from '../../store/reducers/contatos'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { Card } from '../Contato/styles'
import Botao from '../Botao'
import * as S from '../../styles'
import telefoneImg from '../../images/telefone.png'
import nomeImg from '../../images/sombra-de-usuario-masculino.png'
import emailImg from '../../images/o-email.png'
import ContatoClass from '../../models/Contato'
import { useNavigate } from 'react-router-dom'
import {
  ContatoBD,
  useAlterarMutation,
  useCadastrarMutation
} from '../../services/api'
import { useEffect } from 'react'
import { RootReducer } from '../../store'

type Props = ContatoClass

const CardEditaCadastra = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const [cadastrar, { data, isSuccess, isLoading }] = useCadastrarMutation()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const [
    alterar,
    { isSuccess: isSuccessAlterar, isLoading: isLoadingAlterar }
  ] = useAlterarMutation()

  useEffect(() => {
    if (isSuccess && data) {
      const cbd: ContatoBD = {
        id: data.id,
        nome: data.nome,
        telefone: data.telefone,
        email: data.email
      }
      dispath(cadastrarStore(cbd))
      navigate('/')
    }

    if (isSuccessAlterar && id > 0) {
      dispath(
        editar({
          nome: form.values.nome,
          telefone: form.values.telefone,
          email: form.values.email,
          id,
          estaEditando: true
        })
      )
      dispath(isEdit(id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isSuccessAlterar])

  const checkNome = (): boolean => {
    const item = itens.find((i) => i.nome == form.values.nome && i.id != id)

    if (item) {
      return true
    }
    return false
  }

  const salvarEdicao = () => {
    if (!checkNome() && !isLoadingAlterar) {
      if (id > 0) {
        alterar({
          nome: form.values.nome,
          telefone: form.values.telefone,
          email: form.values.email,
          id
        })
      } else if (!isLoading) {
        cadastrar({
          nome: form.values.nome,
          telefone: form.values.telefone,
          email: form.values.email
        })
      }
    } else {
      alert('Contato com este nome já existe')
    }
  }

  const form = useFormik({
    initialValues: {
      nome: nomeOriginal,
      telefone: telefoneOriginal,
      email: emailOriginal
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório')
        .max(50),
      telefone: Yup.string().min(1).max(20).required('Campo obrigatório'),
      nome: Yup.string()
        .min(3, 'Nome inválido')
        .max(50)
        .required('Campo obrigatório')
    }),
    onSubmit: () => {
      salvarEdicao()
    }
  })

  const cancelarEdicao = () => {
    if (!isLoading && !isLoadingAlterar) {
      if (id > 0) {
        form.values.nome = nomeOriginal
        form.values.telefone = telefoneOriginal
        form.values.email = emailOriginal
        dispath(isEdit(id))
      } else {
        navigate('/')
      }
    }
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <Card
      tipo="editaCadastra"
      onSubmit={form.handleSubmit}
      className="container"
    >
      <S.Dados>
        <img src={nomeImg} alt="" />
        <input
          type="text"
          value={form.values.nome}
          name="nome"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </S.Dados>
      <small>{getErrorMessage('nome', form.errors.nome)}</small>
      <S.Dados>
        <img src={telefoneImg} alt="" />
        <InputMask
          mask="(99) 99999-9999"
          value={form.values.telefone}
          name="telefone"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </S.Dados>
      <small>{getErrorMessage('telefone', form.errors.telefone)}</small>
      <S.Dados>
        <img src={emailImg} alt="" />
        <input
          type="text"
          value={form.values.email}
          name="email"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </S.Dados>
      <small>{getErrorMessage('email', form.errors.email)}</small>
      <S.BotoesDiv>
        <Botao
          texto={isLoading || isLoadingAlterar ? '...' : 'SALVAR'}
          tipo="editar"
        />
        <Botao
          onClick={() => cancelarEdicao()}
          texto="CANCELAR"
          tipo="excluir"
        />
      </S.BotoesDiv>
    </Card>
  )
}

export default CardEditaCadastra
