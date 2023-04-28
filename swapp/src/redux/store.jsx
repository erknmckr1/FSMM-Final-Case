import {configureStore} from '@reduxjs/toolkit'
import { shıpSlice } from './shıpSlice'

export const store = configureStore({
    reducer:{
        shıps:shıpSlice.reducer
    }
})