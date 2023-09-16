import { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { Navigate } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { AboutPage } from '../pages/about';

 export const PublicRoutes = () => (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
  