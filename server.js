const initServer = require("./initServer");
const PORT = 5000;
const db = require("./db/connection");

const server = initServer();

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
