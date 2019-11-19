const express = require('express')
const app = express()
const curl = new (require( 'curl-request' ))();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/ugblogin', function (req, res) {
let {carnet,pass} = req.query
curl.setBody({
 carnet,pass
})
.post('https://estudiantes.ugb.edu.sv/API/auth')
.then(({body}) => {
    body = JSON.parse(body)
    res.json(body[0])
})
.catch((e) => {
    res.send('error')
});
})
 
app.listen(3000)
console.log('Server working on port 3000')