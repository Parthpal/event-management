import React from 'react';
import Root from '../Layouts/Root';
import Home from '../pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import ServiceDetails from '../pages/Home/Shared/Services/ServiceDetails/ServiceDetails';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import PrivateRoutes from './PrivateRoutes';
import Portfolio from '../pages/Portfolio/Portfolio';
import LoveNotes from '../pages/LoveNotes/LoveNotes';
import ErrorPage from '../ErrorPage';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
            path: "/service/:id",
            loader:()=>fetch('/event.json'),
            element:<PrivateRoutes><ServiceDetails/></PrivateRoutes>
          },
          {
            path: "/login",
            element:<Login/>
          },
          {
            path: "/register",
            element:<Registration/>
          },
          {
            path: "/portfolio",
            element:<PrivateRoutes><Portfolio/></PrivateRoutes>
          },
          {
            path: "/lovenotes",
            element:<PrivateRoutes><LoveNotes/></PrivateRoutes>
          },
        ],
    },
  ]);

export default Routes;