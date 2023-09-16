import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './Router/router';
import { UserProvider } from './contexts/user';

const App = () => {
  const router = createBrowserRouter(appRoutes);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;