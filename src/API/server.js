const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'points',
  password: 'jabaua005',
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Get all data from the database
app.get('/data', (req, res) => {
  pool.query('SELECT * FROM places', (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result.rows);
    }
  });
});

// Add form data to the database
app.post('/submit', (req, res) => {
  // eslint-disable-next-line no-shadow
  const { name, description, latitude, longitude, photo } = req.body;

  pool.query(
    // eslint-disable-next-line max-len
    'INSERT INTO places (name, description, latitude, longitude, photo) VALUES ($1, $2, $3, $4, $5)',
    [name, description, latitude, longitude, photo],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Form data added successfully' });
      }
    },
  );
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
