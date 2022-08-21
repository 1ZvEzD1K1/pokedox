import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemons";

const rootReducer = combineReducers({
    pokemons: pokemonsReducer
})

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware
})