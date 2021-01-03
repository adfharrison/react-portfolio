import './styles/header.css';
import './styles/nav.css';
import './styles/typewriter-effect.css';
import './styles/bio.css';
import './styles/gallery.css';
import './styles/app.css';
import './styles/footer.css';
import './styles/linkButtons.css';
import Header from './components/header-nav';
import { Router, navigate } from '@reach/router';
import Bio from './components/bio';
import Portfolio from './components/portfolio';
import Quals from './components/quals';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Bio path='/' />
        <Portfolio path='/portfolio' />
        <Quals path='/quals' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
