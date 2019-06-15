const {createServer} = require("restify")
const addRoute = require("./routes")


function initServer(){
    console.log("init server")
    const server = createServer()
    addRoute(server)

    return server
}

module.exports = initServer