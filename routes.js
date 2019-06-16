const mongoo = require("./mongoo")
const getStuff = require("./mongoo")
const Villes = require("./models/Villes")

function addRoute(server){
    console.log("Adding routes")

    server.get("/", getHome)

    server.post("/addVilles", addVilles)
    server.get({name:"test", path:"/test"}, testFn)
}

async function getHome(req,res,next){
    const data = await getStuff()
    res.send(data)
    next()
}

async function addVilles(req,res,next){
    console.log("addVilles function")
    Villes.create({name:"Paris"}).then(res=>console.log(res + " gg"))

    next()
}

function testFn(req, res, next){
    res.send("gg")
}



module.exports = addRoute