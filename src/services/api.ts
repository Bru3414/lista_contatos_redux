import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ContatoPayload = {
  nome: string
  telefone: string
  email: string
}

export type ContatoBD = {
  id: number
  nome: string
  telefone: string
  email: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lista-contatos-api.bru3414.com'
  }),
  tagTypes: ['contatos'],
  endpoints: (builder) => ({
    getContatos: builder.query<ContatoBD[], void>({
      query: () => '/',
      providesTags: ['contatos']
    }),
    cadastrar: builder.mutation<ContatoBD, ContatoPayload>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['contatos']
    }),
    excluir: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['contatos']
    }),
    alterar: builder.mutation<void, ContatoBD>({
      query: (body) => ({
        url: '/',
        method: 'PUT',
        body
      }),
      invalidatesTags: ['contatos']
    })
  })
})

export const {
  useGetContatosQuery,
  useCadastrarMutation,
  useExcluirMutation,
  useAlterarMutation
} = api

export default api
