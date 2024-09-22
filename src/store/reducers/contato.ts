import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Contato = {
    id: number;
    nome: string;
    telefone: string;
    email: string
}

type ContatoState = {
    constosList: Contato[]
}

const initialState: ContatoState = {
    constosList: [
        { id: 1, nome: "João Silva", telefone: "(11) 99999-9999", email: "joao@email.com" },
        { id: 2, nome: "Maria Souza", telefone: "(21) 88888-8888", email: "maria@email.com" },
        { id: 3, nome: "Pedro Santos", telefone: "(31) 77777-7777", email: "pedro@email.com" },
    ]
}

const contatoSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionarContato: (state, action: PayloadAction<Contato>) => {
            state.constosList.push(action.payload)
        },
        removerContato: (state, action: PayloadAction<number>) => {
            state.constosList = state.constosList.filter(contato => contato.id != action.payload)
        },
        editarContato: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.constosList.findIndex((contato) => contato.id === action.payload.id)

            if(indexDoContato >= 0) {
                state.constosList[indexDoContato] = action.payload
            }
        }
    }
});

export const { removerContato, adicionarContato, editarContato } = contatoSlice.actions
export default contatoSlice.reducer