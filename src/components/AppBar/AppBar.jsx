import { useSelector } from 'react-redux';
import { HomePage } from 'pages/HomePage';
import { UserMenu } from 'components/UserMenu';
import authSelectors from 'redux/auth/authSelectors';
import { Navigation } from 'components/Navigation';
import { AppBarHeader } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBarHeader>
      <Navigation></Navigation>
      {isLoggedIn && <UserMenu />}
    </AppBarHeader>
  );
};

export default AppBar;
