import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import pesquisaReducer from './reducers/pesquisa'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    pesquisa: pesquisaReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
