import { configureStore } from "@reduxjs/toolkit";
import postsSlice from '../services/postsSlicer';
import commentsSlice from '../services/commentsSlicer';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
  },
});