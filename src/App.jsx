import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import MusicPlayer from './components/MusicPlayer';
import PopupManager from './components/PopupManager';
import gif1 from './assets/images/sitting.gif';
import gif2 from './assets/images/toot.gif';
import gif3 from './assets/images/puffer.gif';
import gif4 from './assets/images/pinksit.gif';
import gif5 from './assets/images/pink.gif';
import bow from './assets/images/prettybow.webp';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
      <MusicPlayer />
      <PopupManager />
      
      {/* Pretty bows across the page */}
      <img src={bow} alt="bow" className="bow bow1" />
      <img src={bow} alt="bow" className="bow bow2" />
      <img src={bow} alt="bow" className="bow bow3" />
      
      {/* Doll gifs around music player */}
      <img src={gif1} alt="decoration" className="decor-gif gif1" />
      <img src={gif2} alt="decoration" className="decor-gif gif2" />
      <img src={gif3} alt="decoration" className="decor-gif gif3" />
      <img src={gif4} alt="decoration" className="decor-gif gif4" />
      <img src={gif5} alt="decoration" className="decor-gif gif5" />
    </>
  );
}

export default App;
