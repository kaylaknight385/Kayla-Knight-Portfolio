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
    return {
      x: Math.random() * (window.innerWidth - 400),
      y: Math.random() * (window.innerHeight - 300) + 100
    };
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

  useEffect(() => {
    // show first popup after 3 seconds
    const firstTimer = setTimeout(() => {
      addPopup();
    }, 3000);

    // shows random popups every 15-30 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5 && popups.length < 3) {
        addPopup();
      }
    }, 20000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [popups.length]);

  return (
    <>
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
