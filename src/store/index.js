import {
    configureStore
} from '@reduxjs/toolkit';
// Hapus './store/' dari path impor
import themeReducer from './themeSlice';
import projectReducer from './projectsSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        projects: projectReducer,
    },
});