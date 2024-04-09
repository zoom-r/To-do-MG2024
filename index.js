const express = require('express')
var fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var index = fs.readFileSync('./frontend/index.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'html'});
    res.end(index);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})