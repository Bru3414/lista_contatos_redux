import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Talita Souza',
      telefone: '69932642521',
      email: 'talitasouza_martins@hotmail.com',
      estaEditando: false
    },
    {
      id: 2,
      nome: 'Liz Martins',
      telefone: '49931937154',
      email: 'lizmartins.saraiva@yahoo.com',
      estaEditando: false
    },
    {
      id: 3,
      nome: 'Isadora Santos',
      telefone: '83937888883',
      email: 'isadorasantos32@gmail.com',
      estaEditando: false
    },
    {
      id: 4,
      nome: 'Sophia Melo',
      telefone: '11925313768',
      email: 'sophiamelo_carvalho5@gmail.com',
      estaEditando: false
    },
    {
      id: 5,
      nome: 'Eduarda Xavier',
      telefone: '84933985643',
      email: 'eduardaxavier_moreira@bol.com.br',
      estaEditando: false
    },
    {
      id: 6,
      nome: 'Maria Luiza',
      telefone: '94938555656',
      email: 'marialuizamartins.barros@hotmail.com',
      estaEditando: false
    },
    {
      id: 7,
      nome: 'Livia Martins',
      telefone: '47934352562',
      email: 'lviamartins.moraes49@bol.com.br',
      estaEditando: false
    }
  ]
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
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find((contato) => {
        return contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
          ? true
          : false
      })

      if (contatoJaExiste) {
        alert('Este nome de contato já existe.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    isEdit: (state, action: PayloadAction<number>) => {
      const indexDoContato = state.itens.findIndex(
        (i) => i.id === action.payload
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].estaEditando =
          !state.itens[indexDoContato].estaEditando
      }
    }
  }
})

export const { remover, editar, cadastrar, isEdit } = contatosSlice.actions

export default contatosSlice.reducer
