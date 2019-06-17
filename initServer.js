const { createServer } = require("restify");
const addRoute = require("./routes");
const restify = require("restify");

function initServer() {
	console.log("init server");
	const server = createServer();

	server.pre(restify.plugins.pre.dedupeSlashes());
	server.pre(restify.plugins.pre.sanitizePath());
	server.pre(restify.plugins.pre.strictQueryParams());
	server.pre(restify.plugins.pre.userAgentConnection());

	server.use(restify.plugins.acceptParser(server.acceptable));
	server.use(restify.plugins.queryParser({ mapParams: false }));
	server.use(restify.plugins.jsonBodyParser({ mapParams: true }));

	addRoute(server);

	return server;
}

module.exports = initServer;
