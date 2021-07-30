import './index.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Results from './components/results/Result';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Search/>
          <Results/>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
