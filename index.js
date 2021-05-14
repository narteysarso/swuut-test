const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const body = [];

    req.on('data', (data) => {
        body.push(data);
    });

    req.on('end', () => {
        const parsedData = Buffer.concat(body).toString();
        console.log(parsedData);
        res.write(parsedData);
        res.end()
    });
    
})


server.listen(PORT, ()=> console.log(`server listening on port ${PORT}`))