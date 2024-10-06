import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import pesquisaReducer from './reducers/pesquisa'

import api from '../services/api'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    [api.reducerPath]: api.reducer,
    pesquisa: pesquisaReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
