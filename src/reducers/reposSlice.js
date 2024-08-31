import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  items: [],
  isFetching: true,
	currentPage: 1,
	perPage: 10,
	totalCount: 0,
};

// Создание слайса
const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos(state, action) {
      state.items = action.payload.items;
			state.totalCount = action.payload.total_count;
			state.isFetching = false;
    },
		setIsFetching(state, action) {
			state.isFetching = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		}
  },
});

// Экспорт действий
export const { setRepos, setIsFetching, setCurrentPage} = reposSlice.actions;

// Экспорт редуктора
export default reposSlice.reducer;