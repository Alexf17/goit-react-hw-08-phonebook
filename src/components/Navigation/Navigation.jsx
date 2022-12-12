import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <NavLink to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <button>Contacts</button>
        </NavLink>
      )}
    </div>
  );
};
