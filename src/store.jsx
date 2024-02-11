import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
