import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, BookDetail, Layout, Error } from './pages';

// const URL = 'https://example-data.draftbit.com/books';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/book/:bookID',
        element: <BookDetail />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
