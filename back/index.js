const express = require('express');
const db = require('./db');

const app = express();

app.get('/api/posts', (req, res) => {
  db.query(
    'SELECT id, title, content, user_id FROM post',
    (err, results) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          query: err.sql
        });
      }
      return res.json(results);
    }
  );
});

app.listen(5000);
