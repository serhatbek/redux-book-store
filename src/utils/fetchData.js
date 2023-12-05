import axios from 'axios';

export const fetchBooks = async (url) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchBook = async (url, id) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const singleBook = data.find((book) => book.id === id);
    return singleBook;
  } catch (error) {
    console.log(error.message);
  }
};
