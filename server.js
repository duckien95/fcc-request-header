var express = require("express");
var os = require("os");
var app = express();

app.get('/api/whoami/', function(req, res){
    var reqHead = req.headers;
    var result = {};
    result.ipaddress = reqHead['x-forwarded-for'];
    result.language = reqHead['accept-language'].split(',')[0];
    result.software = reqHead['user-agent'].split("(")[1].split(")")[0];
    res.json(result);
})

app.listen(process.env.PORT);