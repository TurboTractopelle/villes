const initServer = require("./initServer")
const PORT = 3000

const server = initServer()

server.listen(PORT, ()=>console.log(`Listening on http://localhost:${PORT}`))