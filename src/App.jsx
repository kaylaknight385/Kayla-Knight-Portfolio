import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import MusicPlayer from './components/MusicPlayer';
import PopupManager from './components/PopupManager';
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
      <img src={bow} alt="bow" className="bow bow4" />
      <img src={bow} alt="bow" className="bow bow5" />
      <img src={bow} alt="bow" className="bow bow6" />
    </>
  );
}

export default App;
