import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';

const Layout = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
export default Layout;
