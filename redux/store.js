import { configureStore } from "@reduxjs/toolkit";
import postsSlice from '../services/postsSlicer';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});