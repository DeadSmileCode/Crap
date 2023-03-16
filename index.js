const express = require("express");

const app = express();

console.log("start\n");

app.use(express.static(__dirname + "/html"));
const jsonParser = express.json();

app.get("/", function(req, res){
	res.sendFile(__dirname + "/html/index.html");
	console.log("Home \n");
});

app.post("/crap", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
    response.json(request.body);
});

app.listen(3000);