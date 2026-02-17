const http = require('http');

function test() {
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/status',
    method: 'GET'
  };

  console.log('Running tests...');

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.status === 'ok') {
          console.log('✓ Status endpoint test passed');
          process.exit(0);
        } else {
          console.log('✗ Status endpoint returned wrong data');
          process.exit(1);
        }
      } catch (e) {
        console.log('✗ Invalid JSON response');
        process.exit(1);
      }
    });
  });

  req.on('error', (e) => {
    console.log('✗ Connection failed:', e.message);
    process.exit(1);
  });

  req.end();
}

// Start server, run test, then exit
const app = require('./index.js');
const server = app.listen(3001, () => {
  setTimeout(() => {
    test();
    setTimeout(() => server.close(), 1000);
  }, 500);
});
