import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recommend: [],
    newDisney: [],
    original: [],
    trending: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, actions) => {
            state.recommend = actions.payload.recommend;
            state.newDisney = actions.payload.newDisney;
            state.original = actions.payload.original;
            state.trending = actions.payload.trending;
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;