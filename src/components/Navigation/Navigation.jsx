import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavBar, NavButton } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavBar>
      <NavButton to="/">Home</NavButton>

      {isLoggedIn && <NavButton to="/contacts">Contacts</NavButton>}
    </NavBar>
  );
};
