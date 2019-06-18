const mongoo = require("./mongoo");
const getStuff = require("./mongoo");
const Villes = require("./models/Villes");

function addRoute(server) {
  console.log("Adding routes");

  server.get("/villes", getVilles);
  server.post("/addVilles", addVilles);
  server.post("/addVille/:name", addVille);
  server.get({ name: "test", path: "/test" }, testFn);
  server.post("/test/:id", testPost);
}

async function getVilles(req, res, next) {
  const {
    query: { letter }
  } = req;

  const data = await Villes.search(letter);
  res.send(data);
  next();
}

async function addVilles(req, res, next) {
  try {
    await req.body.forEach(async element => {
      await Villes.create(element);
    });
    res.send("added");
    next();
  } catch (err) {
    console.log(err);
  }
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
