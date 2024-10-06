import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import { ContatoBD } from '../../services/api'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (i) => i.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrarStore: (state, action: PayloadAction<ContatoBD>) => {
      const contato: Contato = {
        id: action.payload.id,
        nome: action.payload.nome,
        telefone: action.payload.telefone,
        email: action.payload.telefone,
        estaEditando: false
      }

      state.itens.push(contato)
    },
    isEdit: (state, action: PayloadAction<number>) => {
      const indexDoContato = state.itens.findIndex(
        (i) => i.id === action.payload
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].estaEditando =
          !state.itens[indexDoContato].estaEditando
      }

      console.log(state.itens[indexDoContato].estaEditando)
    },
    buscarContatos: (state, action: PayloadAction<ContatoBD[]>) => {
      state.itens = []
      const list: Contato[] = []
      action.payload.forEach((i) => {
        list.push({
          id: i.id,
          nome: i.nome,
          telefone: i.telefone,
          email: i.email,
          estaEditando: false
        })
      })

      state.itens = list
    }
  }
})

export const { remover, editar, cadastrarStore, isEdit, buscarContatos } =
  contatosSlice.actions

export default contatosSlice.reducer
