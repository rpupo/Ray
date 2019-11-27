const http = require('http')

const port = 80
const start = Date.now();

const server = http.createServer((request, response) => {
  const millis = Date.now() - start;
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Ray :: Hello World\n')
  response.end('Ray :: Elapsed milli-secs : ' + millis + ' Version: ' + process.env.NODE_VERSION + '\n')

})

server.listen(port)

console.log(`Ray :: Server running at http://localhost: ${port}`)

