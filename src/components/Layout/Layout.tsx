import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footes';

function Layout(): JSX.Element {
  const location = useLocation();
  const pathName: string = location.pathname;
  let pageClass = '';

  switch (pathName) {
    case '/':
      pageClass = ' page--gray page--main';
      break;
    case '/login':
      pageClass = ' page--gray page--login';
      break;
  }

  return (
    <div className={`page${pageClass}`}>
      <Outlet />
      {location.pathname === '/favorites' ? <Footer /> : null}
    </div>
  );
}

export default Layout;
