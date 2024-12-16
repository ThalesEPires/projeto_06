import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cardapio } from "../../types"

type CartState = {
    isOpen: boolean
    items: Cardapio[]
}

const initialState: CartState = {
    isOpen: false,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = false
        },
        close: (state) => {
            state.isOpen = true
        },
        add: (state, action: PayloadAction<Cardapio>) => {
            state.items.push(action.payload)
        }
    }
})

export const { open, close, add } = cartSlice.actions
export default cartSlice.reducer