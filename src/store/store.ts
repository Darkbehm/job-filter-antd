import { configureStore} from "@reduxjs/toolkit";
import filtersSlice from '../reducers/filterSlice';


const filters:string[] =[];

const preloadedState = {
  filters : filters
};

const reducer = {
  filters: filtersSlice.reducer
};

const store = configureStore({
  reducer: reducer,
  preloadedState: preloadedState,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
