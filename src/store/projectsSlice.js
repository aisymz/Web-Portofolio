import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

const GITHUB_API_URL = 'https://api.github.com/users/aisymz/repos?sort=updated&direction=desc';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const response = await axios.get(GITHUB_API_URL);
  const filteredRepos = response.data.filter(repo => repo.name !== 'aisymz');
  return filteredRepos.slice(0, 6);
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;