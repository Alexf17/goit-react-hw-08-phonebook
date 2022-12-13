import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from 'components/AppBar/AppBar';

import { MainSection } from './Layout.styled';

export const Layout = () => {
  return (
    <MainSection>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer limit={2} />
    </MainSection>
  );
};
