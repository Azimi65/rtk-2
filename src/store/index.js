import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import usersReducer from '../reducers/usersSlice'
export const store = configureStore({
  reducer: {
    Users:usersReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
})

