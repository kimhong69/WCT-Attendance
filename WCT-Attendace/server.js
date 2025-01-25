const express = require('express');
const mysql = require('mysql');
const app = express();

// Create connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: '12345', // your MySQL password
  database: 'attendance-management-db', // your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Route to fetch class data
app.get('/classes', (req, res) => {
  const query = 'SELECT * FROM classes'; // Adjust if needed
  db.query(query, (err, results) => {
    if (err) {
      console.error('Query error:', err.stack);
      return res.status(500).send('Database error');
    }
    res.json(results); // Send the results as JSON
  });
});

// Start the server
const PORT = 3001; // Change this to any available port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
