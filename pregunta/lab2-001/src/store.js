import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/app/appSlice";
import cartSlice from "./Slices/cart/cartSlice";
import userSlice from "./Slices/user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const reducers = combineReducers({
    app: appSlice,
    user: userSlice,
    cart: cartSlice,
})

const rootPersistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
    reducer: reducers,
});

export default store;
