import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  getContact,
  getFilterWord,
  IsLoading,
} from 'redux/contacts/contactsSelectors';
import { RotatingLines } from 'react-loader-spinner';
import { AppContainer, Loader } from './App.styled';
import authSelectors from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import AppBar from 'components/AppBar';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

//
const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const FirstPage = lazy(() => import('pages/FirstPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

//

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppBar />
      <Suspense>
        fallback=
        {
          <Loader role="alert">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="100"
              visible={true}
            />
          </Loader>
        }
        {!isFetchingCurrentUser && (
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/register"
              exact
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              exact
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Suspense>
    </AppContainer>
  );
};
