import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { logOut } from 'redux/auth/authOperations';
import {
  UserMenuContainer,
  UserMenuText,
  UserMenuButton,
  UserMenuUsername,
} from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <UserMenuText>
        Welcome, <UserMenuUsername>{userName}</UserMenuUsername>
      </UserMenuText>
      <br />
      <UserMenuButton type="button" onClick={handleButtonClick}>
        Log out
      </UserMenuButton>
    </UserMenuContainer>
  );
};
