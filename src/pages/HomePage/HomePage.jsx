import {
  HomePageContainer,
  HomePageTitle,
  HomePageButton,
  HomePageText,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <HomePageTitle>Phonebook</HomePageTitle>
        <HomePageButton to="/login">Login</HomePageButton>
        <HomePageButton to="register">Register</HomePageButton>
        <HomePageText>
          {' '}
          Welcome to our website. <br /> Register, create your phonebook 🕮 and
          manage it effectively!
        </HomePageText>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
