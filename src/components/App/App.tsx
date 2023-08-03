import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Favorites from '../../pages/Favorites/Favorites';
import Offer from '../../pages/Offer/Offer';
import Page404 from '../../pages/Page404/Page404';
import PrivateRoute from '../privateRoute/privateRoute';

type AppProps = {
  countOffers: number;
}

function App({ countOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home countOffers={countOffers} />} />
          <Route path='login' element={<Login />} />
          <Route path='favorites' element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path='offer/:id' element={<Offer />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
