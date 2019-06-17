const mongoo = require("./mongoo");
const getStuff = require("./mongoo");
const Villes = require("./models/Villes");

function addRoute(server) {
	console.log("Adding routes");

	server.get("/villes", getVilles);
	server.post("/addVilles", addVilles);
	server.post("/addVille/:name", addVille);
	server.get({ name: "test", path: "/test" }, testFn);
	//server.post({ name: "test", path: "/test/:id" }, testPost);
	server.post("/test/:id", testPost);
}

async function getVilles(req, res, next) {
	const data = await Villes.find();
	console.log(data);
	next();
}

async function addVilles(req, res, next) {
	Villes.create({ name: "Paris" }).then(res => console.log(res + " gg"));
	res.send("Ville created");
	next();
}

async function addVille(req, res, next) {
	console.log(req.body);
	console.log(req.params);
	next();
}

function testFn(req, res, next) {
	res.send("gg get");
}

function testPost(req, res, next) {
	console.log("-- start post --");
	console.log(req.body);
	console.log(req.params);
	res.send("gg post");
	console.log("-- end post --");
	next();
}

module.exports = addRoute;
