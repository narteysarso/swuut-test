const app = require('express');

const server = app();


server.use('/', (req, res) => {
    console.log(req.body);
    
    res.json({"name": "data"});

});



server.listen(3000)