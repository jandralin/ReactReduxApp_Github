import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  items: [],
  isFetching: true,
};

// Создание слайса
const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos(state, action) {
      state.items = action.payload.items;
			state.isFetching = false;
    },
		setIsFetching(state, action) {
			state.isFetching = action.payload
		}
  },
});

// Экспорт действий
export const { setRepos, setIsFetching } = reposSlice.actions;

// Экспорт редуктора
export default reposSlice.reducer;