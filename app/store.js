const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../features/Auth/authSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
