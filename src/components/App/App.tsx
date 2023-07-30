import Home from '../../pages/Home/Home';

type AppProps = {
  countOffers: number;
}

function App({countOffers}: AppProps): JSX.Element {
  return (
    <div className="app">
      <Home countOffers={countOffers}/>
    </div>
  );
}

export default App;
