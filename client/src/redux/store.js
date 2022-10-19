import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slicers/ProductSlice"
import BidsReducer from "./slicers/BidsSlice"
import UserReducer from "./slicers/UserSlice"
import CardReducer from "./slicers/CardSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};


const persistedReducer = persistReducer(persistConfig, UserReducer);

export const store = configureStore({
        reducer: {
            products: ProductReducer,
            bids: BidsReducer,
            card: CardReducer,
            user: persistedReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    })

export let persistor = persistStore(store);
