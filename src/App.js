import './App.css';
import './App.scss'
import Menu from './components/Menu'
import Home from './components/Home';
import Decoration from './components/Decoration';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <body>
        <Home/>
        <div className="body-bottom">
          <SocialMedia/>
          <Decoration/>
        </div>
      </body>
    </div>
  );
}

export default App;
