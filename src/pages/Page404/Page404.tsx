import { Link } from 'react-router-dom';
import './page-404.css';

function Page404 (): JSX.Element {
  return (
    <div className='page page-404'>
      <div className="container">
        <h1>404, Page not found</h1>
        <Link to='/'>Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default Page404;
