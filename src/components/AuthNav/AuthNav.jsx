import { Button } from '@mui/material';
import { Item } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Item to="/register">
        <Button variant="outlined">Register</Button>
      </Item>
      <Item to="/login">
        <Button variant="outlined">Log In</Button>
      </Item>
    </div>
  );
};
