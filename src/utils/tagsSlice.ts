import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from "./URLConfig";
import {TagType} from "./types";

export const fetchTags = createAsyncThunk(
    'tags/get',
    async (_, ThunkAPI) => {
        const response = await instance.get('/tag')
        console.log(response.data)
        return response.data as TagType[]
    }
)

interface TagState {
    isLoading: boolean;
    data: TagType[] | null;
}

const initialState: TagState = {
    isLoading: true,
    data: null
}

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTags.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
    }
})

export default tagsSlice.reducer