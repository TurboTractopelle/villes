const mongoo = require("./mongoo")


function addRoute(server){
    console.log("Adding routes")

    server.get("/", getHome)
}

function getHome(req,res,next){
    res.send("getHome")
    next()
}


module.exports = addRoute