import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { oppourtiunityApi } from "./services/sliceApi";

export const store = configureStore({
  reducer: {
    [oppourtiunityApi.reducerPath]: oppourtiunityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(oppourtiunityApi.middleware),
});

setupListeners(store.dispatch);
