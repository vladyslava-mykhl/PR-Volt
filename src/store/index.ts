import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./recordSlice";

const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
