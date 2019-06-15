const mongoo = require("./mongoo")
const getStuff = require("./mongoo")


function addRoute(server){
    console.log("Adding routes")

    server.get("/", getHome)
}

async function getHome(req,res,next){
    const data = await getStuff()
    res.send(data)
    next()
}


module.exports = addRoute