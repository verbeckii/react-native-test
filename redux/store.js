import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { postsApi } from '../services/postsApi'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postsApi.middleware),
})

setupListeners(store.dispatch)