import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuthHeader, clearAuthHeader } from 'axiosHelpers/config';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`users/signup`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/users/login`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/users/logout`, credentials);
      clearAuthHeader(response.data.token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue('Invalid token');
    }
    setAuthHeader(token);
    try {
      const response = await axios.get(
        'https://connections-api.herokuapp.com/users/current'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
