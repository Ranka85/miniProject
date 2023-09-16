import { AppLayout } from '../layout';
import { AboutPage } from '../pages/about';
import { HomePage } from '../pages/home';
// import { ProtectedRoute, PublicRoute } from './Routes';

export const appRoutes = [
  {
    path: '',
     element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        exact: true,
      },
      {
        path: 'about',
        
            element: <AboutPage />,
            exact: true,
         
      },
      { path: '*', element: <h1>404 Not found</h1> },
    ],
  },
  
];