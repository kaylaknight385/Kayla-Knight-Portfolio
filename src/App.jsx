import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import MusicPlayer from './components/MusicPlayer';
import PopupManager from './components/PopupManager';

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
      case 'shop':
        return <Shop />;
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
    </>
  );
}

export default App;
