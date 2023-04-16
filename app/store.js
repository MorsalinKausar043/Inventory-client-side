const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../features/Auth/authSlice";
import filterReducer from "../features/filter/filterSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    filter:filterReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
