

import MainNavigation from './components/MainNavigation/MainNavigation'
import './styles/reset.css'
import './App.css';

import Routes from './routes'


function App() {
  return (
    <div className='App'>
      <MainNavigation />
      <Routes />

    </div>
  );
}

export default App;
