const http = require('http')
const fs = require ('fs')

const server = http.createServer(function(req,res){
    res.end('well')
    })

server.listen(5000)
console.log("server is running at port 5000")