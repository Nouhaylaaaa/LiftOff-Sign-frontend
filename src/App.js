import logo from './logo.svg';
import './App.css';
import Footer from './composants/Footer';
import Authentification from './composants/Authentification';
import Connecter from './composants/Connecter';
import Slides from './composants/Slides';

function App() {
  return (
    <div className="App">
      <div className='bod'><Authentification/><Slides/></div>
      <Footer/>
    </div>
  );
}

export default App;
