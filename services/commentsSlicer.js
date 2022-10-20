import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice
  } from '@reduxjs/toolkit';
  
 
  export const fetchCommentsByPostId = createAsyncThunk('comments/fetchComments', async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return (await response.json());
  });
  
  export const commentsAdapter = createEntityAdapter();

  
  const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState({
      loading: false
    }),
    reducers: {
        addComment: commentsAdapter.addOne,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCommentsByPostId.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
        commentsAdapter.setAll(state, action.payload);
        state.loading = false;
      });
      builder.addCase(fetchCommentsByPostId.rejected, (state) => {
        state.loading = false;
      });
    }
  });
  
  export const {
    selectAll: selectAllComments,
  } = commentsAdapter.getSelectors((state) => state.comments);

  export const { addComment } = commentsSlice.actions
  
  export default commentsSlice.reducer;