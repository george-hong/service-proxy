const path = require('path');
const fs = require('fs');
const httpProxy = require('http-proxy');
const certificatesDir = path.join(__dirname, 'certificates');

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 3000
  },
  ssl: {
    key: fs.readFileSync(path.join(certificatesDir, 'certificate.key'), 'utf8'),
    cert: fs.readFileSync(path.join(certificatesDir, 'certificate.pem'), 'utf8')
  }
}).listen(443);
