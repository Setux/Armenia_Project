import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Project} from "./types";
import instance from "./URLConfig";

export const fetchProjects = createAsyncThunk(
    'project/get',
    async (_, ThunkAPI) => {
        const response = await instance.get('/project')
        console.log(response.data)
        return response.data as Project[]
    }
)

interface ProjectState {
    isLoading: boolean;
    data: Project[] | null;
}

const initialState: ProjectState = {
    isLoading: true,
    data: null
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProjects.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
    }
})

export default projectSlice.reducer
