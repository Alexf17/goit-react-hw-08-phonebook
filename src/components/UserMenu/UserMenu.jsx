import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { WelcomeText } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div>
      <WelcomeText>Welcome, {user.email}</WelcomeText>
      <Button
        variant="contained"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};
