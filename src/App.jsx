import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, BookDetail, Layout, Error, SinglePageError } from './pages';

const router = createBrowserRouter([
  {
    path: '/redux-book-store',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <SinglePageError />,
      },
      {
        path: '/book/:bookID',
        element: <BookDetail />,
        errorElement: <SinglePageError />,
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
