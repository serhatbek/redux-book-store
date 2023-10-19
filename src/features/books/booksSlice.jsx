import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://example-data.draftbit.com/books';
export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (thunkAPI) => {
    try {
      const response = await axios.get(URL);
      const data = await response.data;
      return data;
    } catch (error) {
      //   console.log(thunkAPI.rejectWithValue(error.message));
      console.log(error.message);
    }
  }
);

const initialState = {
  books: [],
  isLoading: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllBooks.fulfilled, (state, { payload }) => {
        // console.log('payload', payload);
        state.books = payload;
        state.isLoading = false;
      })
      .addCase(fetchAllBooks.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log('rejected payload', payload);
      });
  },
});

export const {} = booksSlice.actions;
export default booksSlice.reducer;
