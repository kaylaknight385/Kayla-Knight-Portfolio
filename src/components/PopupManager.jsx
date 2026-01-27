import { useState, useEffect } from 'react';
import PopupWindow from './PopupWindow';

function PopupManager() {
  const [popups, setPopups] = useState([]);

  const cuteMessages = [
    "i love you so much! ♡",
    "you're sooo fine DAMN!",
    "stay with me you gorgeous human ♡",
    "a hotties like you deserves $10k",
    "i wanna kiss u so bad!",
    "you're doing amazing!",
    "hi king/queen! ☆",
    "wow i love beautiful things...like you! ♡",
    "talented, gorgeous, intelligent, body tea, face 10/10...that the description police have on you so far ):",
    "nooo...you're too sexy 4 problems!",
    "LOVE SEXY FOLKS LIKE U! ♡",
    "why are you so successful, driven, funny, and hot?"
  ];

  const getRandomPosition = () => {
    // position popups around the perimeter (edges) of the page
    const positions = [
      // top edge
      { x: Math.random() * (window.innerWidth - 400), y: 20 },
      // bottom edge
      { x: Math.random() * (window.innerWidth - 400), y: window.innerHeight - 220 },
      // left edge
      { x: 20, y: Math.random() * (window.innerHeight - 300) + 100 },
      // right edge
      { x: window.innerWidth - 420, y: Math.random() * (window.innerHeight - 300) + 100 }
    ];
    
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const addPopup = () => {
    const randomMessage = cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
    const newPopup = {
      id: Date.now(),
      message: randomMessage,
      position: getRandomPosition()
    };
    setPopups(prev => [...prev, newPopup]);
  };

  const removePopup = (id) => {
    setPopups(prev => prev.filter(popup => popup.id !== id));
  };

  const clearAllPopups = () => {
    setPopups([]);
  };

  useEffect(() => {
    // show first popup after 10 seconds
    const firstTimer = setTimeout(() => {
      addPopup();
    }, 10000);

    // shows random popups every 45-60 seconds, max 2 popups
    const interval = setInterval(() => {
      if (Math.random() > 0.7 && popups.length < 2) {
        addPopup();
      }
    }, 50000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [popups.length]);

  //chile clear all cuz its getting toooo much lol
  return (
    <>
      {popups.length > 0 && (
        <button className="clear-all-popups" onClick={clearAllPopups}>
          Clear All ✕
        </button>
      )}
      {popups.map(popup => (
        <PopupWindow
          key={popup.id}
          message={popup.message}
          initialPosition={popup.position}
          onClose={() => removePopup(popup.id)}
        />
      ))}
    </>
  );
}

export default PopupManager;
