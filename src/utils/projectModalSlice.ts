import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {Contribution, Project} from "./types";
import instance from "./URLConfig";

export const fetchProject = createAsyncThunk(
    'project/get/id',
    async (id: number, ThunkAPI) => {
        const response = await instance.get(`/project/${id}`)
        return response.data as Project
    }
)

export const fetchContributions = createAsyncThunk(
    'project/get/contributions',
    async (id: number, ThunkAPI) => {
        const response = await instance.get(`/contribution/approved/${id}`)
        return response.data as Contribution[]
    }
)

interface ProjectModalState {
    isVisible: boolean;
    isLoading: boolean;
    selectedId: number | null;
    data: Project | null;
    contributions: Contribution[] | null
}

const initialState: ProjectModalState = {
    isVisible: false,
    isLoading: false,
    selectedId: null,
    data: null,
    contributions: null,
}

export const projectModalSlice = createSlice({
    name: 'projectModal',
    initialState,
    reducers: {
        handleModal: (state, action) => {
            state.isVisible = true
            state.selectedId = action.payload
        },
        clearModal: () => {
            return initialState
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProject.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProject.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchContributions.fulfilled, (state, action) => {
            state.contributions = action.payload
        })
    }
})

export const {handleModal, clearModal} = projectModalSlice.actions

export default projectModalSlice.reducer