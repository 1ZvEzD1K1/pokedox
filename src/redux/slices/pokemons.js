import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { url } = getState().pokemons
            const urls = await axios.get(url)
            const requests = urls.data.results.map(({url}) => axios.get(url))
            const res = await Promise.all(requests)
            return {
                next: urls.data.next,
                pokemons: res.map(({data}) => data)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    pokemons: [],
    loading: 'idle',
    error: null,
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=12',
    targetPokemon: {}
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: initialState,
    reducers: {
        choosePokemon: (state, action) => {
            state.targetPokemon = action.payload
        }
    },
    extraReducers: {
        [getPokemons.pending]: (state) => {
            state.loading = 'pending';
            state.error = null;
        },
        [getPokemons.fulfilled]: (state, action) => {
            state.loading = 'fulfilled';
            state.pokemons = [...state.pokemons, ...action.payload.pokemons];
            state.url = action.payload.next
        },
        [getPokemons.rejected]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.payload;
        }
    }
})

export default pokemonsSlice.reducer
export const { choosePokemon } = pokemonsSlice.actions