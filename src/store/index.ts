import { configureStore } from '@reduxjs/toolkit'
import contatosReducers from './reducers/contato'

export const store = configureStore({
    reducer: contatosReducers,
})

export type RootState = ReturnType<typeof store.getState>

export type Appdispatch = typeof store.dispatch