import { Button, Stack } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Stack spacing={2} direction="row">
      <NavLink to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      )}
    </Stack>
  );
};
