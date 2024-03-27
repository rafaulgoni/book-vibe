import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Books from "../components/Books/Books";
import Pages from "../components/Pages/Pages";
import Registration from "../components/Registration/Registration";
import Updates from "../components/Updates/Updates";
import Details from "../components/Details/Details";
import Wishlist from "../components/Wishlist/Wishlist";
import Read from "../components/Read/Read";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/FakeCard.json')
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader: () => fetch('/FakeCard.json'),
        children:[
          {
            path:'',
            element:<Read></Read>,
            loader: () => fetch('/FakeCard.json'),
          },
          {
            path:'wishlist',
            element:<Wishlist></Wishlist>,
            loader: () => fetch('/FakeCard.json'),
          }
        ]
      },
      {
        path: '/pages',
        element: <Pages></Pages>,
        loader: () => fetch('/FakeCard.json'),
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/updates',
        element: <Updates></Updates>,
      },
      {
        path:'/details/:bookId',
        element: <Details></Details>,
        loader: ()=> fetch('/FakeCard.json')
      },
      ]
    },
  ]);