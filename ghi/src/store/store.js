import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { accountSlice } from './accountSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
            .concat(accountSlice.middleware)
    }
})

setupListeners(store.dispatch)
