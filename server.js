const http = require('http');

const server = http.createServer((req, res) => {
    res.end('zakonczenie servera');

})
server.listen(process.env.PORT || 3000);