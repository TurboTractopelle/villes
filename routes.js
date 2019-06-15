
function addRoute(server){
    console.log("Adding routes")

    server.get("/", (req, res, next)=>{
        res.send("gg")
    })


}

module.exports = addRoute