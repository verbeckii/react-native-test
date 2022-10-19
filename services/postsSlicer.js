import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice
  } from '@reduxjs/toolkit';
  
 
  export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json());
  });
  
  export const postsAdapter = createEntityAdapter();

  
  const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState({
      loading: false
    }),
    reducers: {
        deletePost: postsAdapter.removeOne,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        postsAdapter.setAll(state, action.payload);
        state.loading = false;
      });
      builder.addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
    }
  });
  
  export const {
    selectById: selectPostById,
    selectAll: selectAllPosts,
  } = postsAdapter.getSelectors((state) => state.posts);

  export const { deletePost } = postsSlice.actions
  
  export default postsSlice.reducer;