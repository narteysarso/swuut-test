const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    const body = [];

    req.on('data', (data) => {
        body.push(data);
    });

    req.on('end', () => {
        const parsedData = JSON.parse(Buffer.concat(body).toString());

        let ok = " ";
        

        console.log(parsedData);

        res.write(parsedData);
        res.end()
    });

})


server.listen("5000", "0.0.0.0", () => console.log(`server listening on port ${PORT}`))