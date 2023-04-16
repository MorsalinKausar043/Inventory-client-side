import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import Auth from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(Auth, email, password);
    return data.user;
  }
);
export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(Auth, email, password);
    return data.user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.email = action.payload;
    },
    logOut: (state, action) => {
      state.email = "";
    },
    toggleState: (state, action) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    // create user -=---=-----=-------=--------=-------=>
    builder
      .addCase(createUser.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isError = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errMassage = action.error.massage;
      })
      // sign_in user -=---=-----=-------=--------=-------=>
      .addCase(signInUser.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isError = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errMassage = action.error.massage;
      });
  },
});

export const { saveUser, logOut, toggleState } = authSlice.actions;
export default authSlice.reducer;
