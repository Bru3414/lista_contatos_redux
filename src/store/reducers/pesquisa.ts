import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState: {
    termo: ''
  },
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = pesquisaSlice.actions

export default pesquisaSlice.reducer
