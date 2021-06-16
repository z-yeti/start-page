import Settings from './components/settings'
import Search from './components/search'
import Welcome from './components/welcome'
import DateTime from './components/date-time';
import Weather from './components/weather';
import Links from './components/links';

function App() {
  return (
    <div className='App'>
      <Settings />
      <Welcome />
      <DateTime />
      <Weather />
      <Links />
      <Search />
    </div>
  );
}

export default App;
