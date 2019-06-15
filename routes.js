const mongoo = require("./mongoo")
const getStuff = require("./mongoo")
const Villes = require("./models/Villes")

function addRoute(server){
    console.log("Adding routes")

    server.get("/", getHome)

    server.post("/villes", addVille)
    server.get({name:"test", path:"/test"}, testFn)
}

async function getHome(req,res,next){
    const data = await getStuff()
    res.send(data)
    next()
}

function addVille(req,res,next){
    console.log("addVille function")
    console.log(req.body)
    next()
}

function testFn(req, res, next){
    res.send("gg")

}



module.exports = addRoute