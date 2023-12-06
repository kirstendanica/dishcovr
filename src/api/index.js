import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'dishcovr-app', 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dishcovr-app', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
