import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div>
      <span>Welcome,{user.email}</span>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};
