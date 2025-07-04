import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const app = express();
const PORT = 5000;

// ✅ Correct way in Node.js
const OMDB_API_KEY = process.env.VITE_APIMOVIE_KEY;

app.use(cors());

app.get('/api/movies', async (req, res) => {
  const { search, page } = req.query;

  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search}&page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
