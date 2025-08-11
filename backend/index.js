const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

// Use CORS middleware
app.use(cors());

// Basic route to check if the server is working
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Example route for static data
app.get('/test', (req, res) => {
  res.send('BACKEND IS CONNECTED TO FRONTEND');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
