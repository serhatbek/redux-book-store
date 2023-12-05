import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBook, fetchBooks } from '../../utils/fetchData';

const url = 'https://example-data.draftbit.com/books';
export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', async () =>
  fetchBooks(url)
);

export const fetchSingleBook = createAsyncThunk(
  'books/fetchSingleBook',
  async (id) => fetchBook(url, id)
);

const initialState = {
  books: [],
  isLoading: false,
  singleBook: {},
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeSelectedBook: (state) => {
      state.singleBook = {};
    },
  },
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
      })
      .addCase(fetchSingleBook.pending, (state) => {
        state.isLoading == true;
      })
      .addCase(fetchSingleBook.fulfilled, (state, { payload }) => {
        // console.log('payload', payload);
        state.singleBook = payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleBook.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { removeSelectedBook } = booksSlice.actions;
export default booksSlice.reducer;
