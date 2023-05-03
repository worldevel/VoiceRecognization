const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
};


const htmlContent = fs.readFileSync('./client.html', 'utf-8');

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end(htmlContent);
}).listen(443);

console.log('HTTPS server listening on port 443');