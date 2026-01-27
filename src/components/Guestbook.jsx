import { useState, useEffect } from 'react';

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedEntries = localStorage.getItem('guestbook');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim() && message.trim()) {
      const newEntry = {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        date: new Date().toLocaleDateString()
      };
      
      const updatedEntries = [newEntry, ...entries];
      setEntries(updatedEntries);
      localStorage.setItem('guestbook', JSON.stringify(updatedEntries));
      
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="guestbook">
      <h2> Sign my guestbook!</h2>
      
      <form onSubmit={handleSubmit} className="guestbook-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="30"
          required
        />
        <textarea
          placeholder="Leave a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength="200"
          rows="3"
          required
        />
        <button type="submit">Sign Guestbook</button>
      </form>

      <div className="guestbook-entries">
        {entries.length === 0 ? (
          <p className="no-entries">Be the first to sign!</p>
        ) : (
          entries.map(entry => (
            <div key={entry.id} className="guestbook-entry">
              <div className="entry-header">
                <strong>{entry.name}</strong>
                <span className="entry-date">{entry.date}</span>
              </div>
              <p>{entry.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Guestbook;
