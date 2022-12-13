import axios from 'axios';

import { toast } from 'react-toastify';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuthHeader, clearAuthHeader } from 'api/config';

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
      if (error.response.status === 400) {
        toast.warning(
          'Invalid email or password,check spelling and try again',
          {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
            pauseOnHover: true,
          }
        );
      }

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
