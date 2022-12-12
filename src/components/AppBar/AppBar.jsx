import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { MainMenu } from './AppBar.styled';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <MainMenu>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </MainMenu>
  );
}
