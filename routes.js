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
	console.log(req.body);
	let added = [];

	req.body.forEach(async element => {
		console.log(element);
		await Villes.create(element);
		added.push("a");
	});
	console.log(added);

	res.send(added);
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
	const { name } = req.body;
	Villes.create({ name });
	res.send("gg posted " + name);

	next();
}

module.exports = addRoute;
