import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { cadastrar, editar, isEdit } from '../../store/reducers/contatos'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Botao from '../Botao'
import * as S from './styles'
import telefoneImg from '../../images/telefone.png'
import nomeImg from '../../images/sombra-de-usuario-masculino.png'
import emailImg from '../../images/o-email.png'
import ContatoClass from '../../models/Contato'
import { useNavigate } from 'react-router-dom'

type Props = ContatoClass

const CardEditaCadastra = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const navigate = useNavigate()
  const dispath = useDispatch()

  const salvarEdicao = () => {
    if (id > 0) {
      dispath(
        editar({
          nome: form.values.nome,
          telefone: form.values.telefone,
          email: form.values.email,
          id,
          estaEditando: true
        })
      )
    } else {
      dispath(
        cadastrar({
          nome: form.values.nome,
          telefone: form.values.telefone,
          email: form.values.email,
          estaEditando: false
        })
      )
      navigate('/')
    }
    dispath(isEdit(id))
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
        .required('Campo obrigatório'),
      telefone: Yup.string().min(1).required('Campo obrigatório'),
      nome: Yup.string().min(3, 'Nome inválido').required('Campo obrigatório')
    }),
    onSubmit: () => {
      salvarEdicao()
    }
  })

  const cancelarEdicao = () => {
    if (id > 0) {
      form.values.nome = nomeOriginal
      form.values.telefone = telefoneOriginal
      form.values.nome = nomeOriginal
      dispath(isEdit(id))
    } else {
      navigate('/')
    }
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <S.Card onSubmit={form.handleSubmit} className="container">
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
        <Botao texto="SALVAR" tipo="editar" />
        <Botao
          onClick={() => cancelarEdicao()}
          texto="CANCELAR"
          tipo="excluir"
        />
      </S.BotoesDiv>
    </S.Card>
  )
}

export default CardEditaCadastra
