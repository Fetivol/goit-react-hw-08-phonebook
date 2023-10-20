import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  name: 'auth',
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {
      state.isLoading = true;
      return state;
    },
    [register.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      return state;
    },
    [logIn.pending](state, action) {
      state.isLoading = true;
      return state;
    },
    [logIn.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
      return state;
    },
    [logOut.pending](state, acction) {
      state.isLoading = true;
      return state;
    },
    [logOut.fulfilled](state) {
      state.isLoading = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, acction) {
      state.isLoading = false;
      return state;
    },
    [refreshUser.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isLoading = false;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
