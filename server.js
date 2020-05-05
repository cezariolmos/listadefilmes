const express = require('express');

const server = express();

server.get('/', function(request, response) {
    response.send('Aqui vai estar a lista dos filmes que eu já vi!');
})

server.listen(process.env.PORT || 3000);