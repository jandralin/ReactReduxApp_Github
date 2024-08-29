import { configureStore } from '@reduxjs/toolkit';
import reposReducer from './reposSlice';
import { thunk } from "redux-thunk";

// Создание store
const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production', // Включение DevTools в разработке
});

export default store;