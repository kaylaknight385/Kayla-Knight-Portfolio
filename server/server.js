import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// mongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// guestbook Entry Schema
const entrySchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 30 },
  message: { type: String, required: true, maxlength: 200 },
  date: { type: Date, default: Date.now }
});

const Entry = mongoose.model('Entry', entrySchema);

// get all entries
app.get('/api/entries', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
});

// create new entry
app.post('/api/entries', async (req, res) => {
  try {
    const { name, message } = req.body;
    const newEntry = new Entry({ name, message });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create entry' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
