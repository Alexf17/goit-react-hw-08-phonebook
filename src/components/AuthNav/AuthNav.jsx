import { Button } from '@mui/material';
import { Item } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Item to="/register">
        <Button variant="contained">Register</Button>
      </Item>
      <Item to="/login">
        <Button variant="contained">Log In</Button>
      </Item>
    </div>
  );
};
