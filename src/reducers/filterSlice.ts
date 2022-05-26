import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:string[] = [];

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers:{
    addFilter: (state, action:PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload) ;
      }
    },
    removeFilter: (state, action:PayloadAction<string>) => {
      return state.filter(filter => filter !== action.payload);
    },
    clearFilters: () => {
      return [];
    }
  },
  extraReducers:(builder) => {
    builder.addDefaultCase(() => {})
  },
});

export const { addFilter,  removeFilter, clearFilters } = filtersSlice.actions
export default filtersSlice;