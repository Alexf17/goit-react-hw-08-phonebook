import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

import { Loader } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import Contacts from 'pages/Contaсts/Contaсts';

const Home = lazy(() => import('../../pages/Home/Home'));
const Register = lazy(() => import('../../pages/Register/Register'));
const LogIn = lazy(() => import('../../pages/Login/LogIn'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      {isRefreshing ? (
        'Please wait... Updating data....'
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={Register} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LogIn} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
    </Suspense>
  );
};
