import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://6388f654a4bb27a7f7964f5d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    console.log({ name, number });
    try {
      const response = await axios.post('/contacts', { name, number });

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contact/changeContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
