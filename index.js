const app = require('express');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const server = app();

server.use(bodyParser.json())

server.use('/', (req, res) => {
    console.log(req.body);
    const parsedData = req.body
    try {
        if (parsedData['action']) {
            let getAction = parsedData['action'];
            if (getAction == 'test') {
                ok = "{\"Status\":\"1\",\"Description\":\"Connection is ok\"}";
            }
            else if (getAction == 'auth') {
                if (parsedData['terminal'] != '0') {
                    ok = "{\"Status\":\"1\",\"Description\":\"Authorization is ok\"}";
                }
                else {
                    ok = "{\"Status\":\"0\",\"Description\":\"Authorization is fail\"}";
                }
            }
            else if (getAction == 'query_rec') {
                if (parsedData['start'] != '20200915') {
                    ok = "{\"Status\":\"1\",\"List\":[\"202009180001\",\"202009180002\",\"202009180003\"]}";
                }
                else {
                    ok = "{\"Status\":\"0\",\"Description\":\"Error!\"}";
                }
            }
            else if (getAction == 'query_detail') {
                if (parsedData['title'] == '202009180001') {
                    ok = "{\"Status\":\"1\",\"Description\":\"time:2020-09-18 12:30:30%%Terminal Number:1234%%Card Number:3556749171%%Ticket Value:10%%Card Balance:500%%Serial Number:0001\"}";
                }
                else if (parsedData['title'] == '202009180002') {
                    ok = "{\"Status\":\"1\",\"Description\":\"time:2020-09-18 20:12:15%%Terminal Number:1234%%Card Number:3556749171%%Ticket Value:5%%Card Balance:495%%Serial Number:0002\"}";
                }
                else {
                    ok = "{\"Status\":\"0\",\"Description\":\"Error 2\"}";
                }
            }
            else if (getAction == 'query_sum') {
                ok = "{\"Status\":\"1\",\"Description\":\"Ticket count:100%%Ticket Amount Sum:5000\"}";
            }
            else if (getAction == 'query_tran') {
                if (parsedData['serNum'] == '123456789') {
                    ok = "{\"Status\":\"1\",\"Description\":\"time:2020-09-16 12:30:30%%Terminal Number:1234%%Card Number:3556749171%%Ticket Value:10%%Card Balance:500%%Serial Number:123456789\"}";
                }
                else {
                    ok = "{\"Status\":\"0\",\"Description\":\"Error!\"}";
                }
            }
            else if (getAction == 'check') {
                ok = "{\"Status\":\"1\",\"Description\":\"Check connection is ok\"}";
            }
            else if (getAction == 'send_rec') {
                ok = "{\"Status\":\"1\",\"Description\":\"OK\"}";
            }
            else if (getAction == 'recharge') {
                ok = "{\"Status\":\"1\",\"Description\":\"OK\"}";
            }
            else if (getAction == 'issue') {
                ok = "{\"Status\":\"1\",\"Description\":\"OK\"}";
            }
            else {
                ok = "{\"Status\":\"0\",\"Description\":\"fail\"}";
            }
        }
        else {
            ok = "JSON Err";
        }
    } catch (error) {
        console.log(error)
    }
    
    res.send(ok);

});


server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});