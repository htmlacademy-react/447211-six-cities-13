import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footes';

function Layout(): JSX.Element {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Outlet />
      { location.pathname === '/favorites' ? <Footer /> : null }
    </>
  );
}

export default Layout;
