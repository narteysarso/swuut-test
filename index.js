const app = require('express');
const PORT = process.env.PORT || 3000;

const server = app();


server.use('/', (req, res) => {
    console.log(req.body);

    res.json({"name": "data"});

});


server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});