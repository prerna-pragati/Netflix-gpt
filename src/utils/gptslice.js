import { createSlice } from "@reduxjs/toolkit";
const gptslice = createSlice({
    name: 'gpt',
    initialState: {
        gptSearchView: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.gptSearchView = !state.gptSearchView
        },
        addMovieResults: (state, action) => {
            state.movieResults = action.payload.movieResults
            state.movieNames = action.payload.movieNames
        }
    }
});
export const { toggleGptSearchView, addMovieResults } = gptslice.actions;

export default gptslice.reducer;