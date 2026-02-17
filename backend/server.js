const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/status', (req, res) => {
  res.json({
    service: 'backend',
    version: '1.0.0',
    uptime: process.uptime(),
    kubernetes: process.env.KUBERNETES_SERVICE_HOST ? true : false
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Boiler Room Week 5 - K8s Backend' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
