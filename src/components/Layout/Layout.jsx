import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { MainSection } from './Layout.styled';

export const Layout = () => {
  return (
    <MainSection>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </MainSection>
  );
};
