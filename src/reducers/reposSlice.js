import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  items: [],
  isFetching: true,
  count: 0,
};

// Создание слайса
const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
    // Другие редюсеры можно добавить здесь
  },
});

// Экспорт действий
export const { setCount } = reposSlice.actions;

// Экспорт редуктора
export default reposSlice.reducer;