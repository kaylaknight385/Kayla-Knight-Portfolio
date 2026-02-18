import { useState, useEffect } from 'react';

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch(`${API_URL}/api/entries`);
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error('Failed to fetch entries:', error);
      // Fallback to localStorage if API fails
      const savedEntries = localStorage.getItem('guestbook');
      if (savedEntries) {
        setEntries(JSON.parse(savedEntries));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (name.trim() && message.trim()) {
      setLoading(true);
      
      try {
        const response = await fetch(`${API_URL}/api/entries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            message: message.trim()
          })
        });

        if (response.ok) {
          const newEntry = await response.json();
          setEntries([newEntry, ...entries]);
          setName('');
          setMessage('');
        }
      } catch (error) {
        console.error('Failed to submit entry:', error);
        // Fallback to localStorage if API fails
        const newEntry = {
          _id: Date.now(),
          name: name.trim(),
          message: message.trim(),
          date: new Date().toISOString()
        };
        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem('guestbook', JSON.stringify(updatedEntries));
        setName('');
        setMessage('');
      } finally {
        setLoading(false);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
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
        <button type="submit" disabled={loading}>
          {loading ? 'Signing...' : 'Sign Guestbook'}
        </button>
      </form>

      <div className="guestbook-entries">
        {entries.length === 0 ? (
          <p className="no-entries">Be the first to sign!</p>
        ) : (
          entries.map(entry => (
            <div key={entry._id || entry.id} className="guestbook-entry">
              <div className="entry-header">
                <strong>{entry.name}</strong>
                <span className="entry-date">{formatDate(entry.date)}</span>
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
