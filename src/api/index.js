import express from 'express';
import path from 'path';

const app = express();

// Serve the React app on the root route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
});

export default app;