const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.send('First Pipeline Challenge - Week 4');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
