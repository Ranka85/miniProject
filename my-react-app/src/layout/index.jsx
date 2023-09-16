import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { UserContext } from '../contexts/UserContext';

export const AppLayout = () => {
//   const { user, handleUserLogout } = useContext(UserContext);
  const handleLinkClassName = ({ isActive }) =>
    isActive ? 'text-green-500' : '';

  return (
    <>
      <nav>
        <NavLink to="/" className={handleLinkClassName}>
          Home
        </NavLink>
        |
        <NavLink to="/about" className={handleLinkClassName} end>
          About
        </NavLink>
        
        {/* <NavLink to="/about/team" className={handleLinkClassName}>
          Team
        </NavLink> */}
        {/* |
        <NavLink to="/users" className={handleLinkClassName}>
          Users
        </NavLink> */}
    
      </nav>
      <Outlet />
    </>
  );
};


