import { configureStore } from '@reduxjs/toolkit'
import ProjectReducer from './projectSlice';
import TagsReducer from './tagsSlice';
import ProjectModalReducer from './projectModalSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        projects: ProjectReducer,
        tags: TagsReducer,
        projectModal: ProjectModalReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch