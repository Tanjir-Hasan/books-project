import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Books from './Books';
import Banner from './Banner';
import BookDetails from './BookDetails';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
